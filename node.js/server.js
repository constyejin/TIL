const express = require('express');
const app = express();
const { MongoClient, ObjectId } = require('mongodb');
const methodOverride = require('method-override')
const bcrypt = require('bcrypt') 
require('dotenv').config() 

app.use(methodOverride('_method')) 
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true})) 

const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const MongoStore = require('connect-mongo')


app.use(passport.initialize())
app.use(session({
  // session의 document id는 암호화해서 유저에게 보낸다.
  secret: '암호화에 쓸 비번',
  // 유저가 서버로 요청할 때 마다 session 갱신 할건지 여부
  resave : false,
  // 로그인 안 해도 session 만들건지 여부
  saveUninitialized : false,
  // session document 유효기간 변경 가능
  cookie : { maxAge : 60 * 60 * 1000 },
  store : MongoStore.create({
    mongoUrl : process.env.DB_URL,
    dbName : 'forum'
  })
}))
app.use(passport.session()) 


const { S3Client } = require('@aws-sdk/client-s3')
const multer = require('multer')
const multerS3 = require('multer-s3')
const s3 = new S3Client({
  region : 'ap-northeast-2',
  credentials : {
      accessKeyId : 'IAM에서 발급받은 액세스키',
      secretAccessKey : 'IAM에서 발급받은 시크릿키'
  }
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: '님들버킷이름',
    key: function (요청, file, cb) {
      cb(null, Date.now().toString()) //업로드시 파일명 변경가능
    }
  })
})


let db;
const url = process.env.DB_URL
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum')
  app.listen(process.env.PORT, () => {
    console.log('8080')
  })
}).catch((err)=>{
  console.log(err)
})

function checkLogin(request, response, next) {
  // 미들웨어 함수에선 요청, 응답 자유롭게 사용 가능하다.
  if(!request.user) {
    response.send('로그인 하세요.')
  }
  next()
}

// 이 코드 밑에 있는 모든 API는 checkLogin middleware 적용
// app.use(checkLogin)

// middleware
// (request, response, next) => {} 함수 바로 넣기 가능
// middleware 여러개 넣기 가능
app.get('/', checkLogin, (request, response) => {
  // checkLogin(request, response)
  response.render('main.ejs')
})

app.get('/news', (request, response) => {
  response.send('News Page')
  // db.collection('post').insertOne({title : 'laala'})
})

function currentTime(request, response, next) {
  console.log(new Date())
  next()
}

// await : 다음줄을 실행하기 전에 잠깐 기다리라는 문법
// Javascript는 처리가 오래 걸리는 코드는 처리완료 기다리지 않고 바로 다음줄을 실행한다.
// await은 정해진 곳에만 붙일 수 있다 (promise 뱉는 것)
app.get('/list', currentTime ,async (request, response) => {
  let result = await db.collection('post').find().toArray();
  // console.log(result[0]);
  // response.send(result[0].title);
  response.render('list.ejs', { posts : result })
})

app.get('/time', (request, response) => {
  let time = new Date();
  console.log(time)
  response.render('time.ejs', {time : time})
})

app.get('/write', (request, response) => {
  response.render('write.ejs')
})

app.post('/add', async (request, response) => {
  // console.log(request.body)
  try {
    // 여기 코드 실행해보고
    if(request.body.title === '') {
      response.send('제목 입력 하세요.')
    } else if (request.body.content === '') {
      response.send('내용 입력 하세요.')
    } else {
      await db.collection('post').insertOne({title : request.body.title, content : request.body.content})
      response.redirect('/list')
    }
  } catch(e) {
    // 에러나면 이 코드 실행
    // 에러시 에러코드 같이 전송해주는 게 좋다.
    // 500 : 서버 잘못으로 인한 에러
    console.log(e)
    response.status(500).send('서버 에러났음;')
  }
})


// 상세페이지 만들기(URL Parameter)
// 비슷한 /URL 가진 API 여러개 만들 필요 없음.
app.get('/detail/:id', async (request, response) => {
  try {
    // console.log(request.params.id)
    let result = await db.collection('post').findOne({ _id : new ObjectId(request.params.id)})
    // console.log(result)
    if(result == null) {
      response.status(404).send('이상한 url 입력 에러')
    }
    response.render('detail.ejs', {result : result})
  } catch(e) {
    console.log(e)
    // 400 : 유저 문제로 에러 발생 코드
    response.status(404).send('이상한 url 입력 에러')
  }
})

app.get('/edit/:id', async (request, response) => {
  let result = await db.collection('post').findOne({ _id : new ObjectId(request.params.id)});
  console.log(result)
  response.render('edit.ejs', { result : result });

  // console.log(request.body)
  // db.collection('post').updateOne({ _id : new ObjectId(request.params.id )}, {$set : {}});
})

app.put('/edit', async(request, response) => {
  console.log(request.params)
   try {
    if(request.body.title === '') {
      response.send('제목 입력 하세요.')
    } else if (request.body.content === '') {
      response.send('내용 입력 하세요.')
    } else {
      await db.collection('post').updateOne({ _id : new ObjectId( request.body.id )}, { $set : { title : request.body.title, content : request.body.content }})
      // await db.collection('post').updateOne({ _id : 1 }, { $inc : { like : -1 }})
      response.redirect('/list')
    }
   } catch(e) {
    console.log(e);
   }
})

app.delete('/delete', async (request, response) => {
  // console.log(request.query.docid)
  try {
    await db.collection('post').deleteOne({ _id : new ObjectId( request.query.docid )});
    // ajax요청 사용시 response.redirect / response.render 사용 안하는게 좋다.
    // ajax 장점이 새로 고침하지 않고 데이터를 가져오기 때문.
    response.send('삭제 완료!')
  } catch(e) {
    console.log(e)
  }
})

// Pagenation
app.get('/list/:id', async (request, response) => {
  // .skip() 성능 안 좋음. 너무 많이 skip 불가능하게 막는게 좋다.
  let result = await db.collection('post').find().skip((request.params.id -1) * 5).limit(5).toArray();
  response.render('list.ejs', { posts : result })
})

app.get('/list/next/:id', async (request, response) => {
  console.log(request.params.id) 
  // .skip() 성능 안 좋음. 너무 많이 skip 불가능하게 막는게 좋다.
  let result = await db.collection('post')
  // 방금 본 게시물의 _id보다 큰 게시물 중에 위에서 부터 5개만 잘라서 가져오기
  .find({_id : {$gt : new ObjectId(request.params.id)}})
  .limit(5).toArray();
  response.render('list.ejs', { posts : result })
})

// app.get('/list/2', async (request, response) => {
//   // 5~10번 글 찾아서 result 변수에 저장
//   let result = await db.collection('post').find().skip(5).limit(5).toArray();
//   response.render('list.ejs', { posts : result })
// })


passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
  let result = await db.collection('user').findOne({ username : 입력한아이디})
  if (!result) {
    return cb(null, false, { message: '아이디 DB에 없음' })
  }
  
  if (await bcrypt.compare(입력한비번, result.password)) {
    return cb(null, result)
  } else {
    return cb(null, false, { message: '비번불일치' });
  }
}))

passport.serializeUser((user, done) => {
  console.log(user)
  // Node.js 환경에서 특정코드를 비동기적으로 처리한다.
  process.nextTick(() => {
    done(null, { id : user._id ,username : user.username })
  })
})

// 유저가 보낸 쿠키 분석 passport.deserializeUser()
// 쿠키 이상없으면 현재 로그인된 유저 정보를 알려준다.

// 비효율 포인트 
// 1. deserialize는 세션정보 적힌 쿠기 가지고 있는 유저가 요청 날릴 때 마다 실행된다.
//   => 특정 API에서만 deserializeUser를 실행한다.
// 2. 요청이 너무 많아서 DB가 부담 된다면?
//   => connect redis 사용
passport.deserializeUser(async (user, done) => {
  let result = await db.collection('user').findOne({ _id : new ObjectId(user.id) })
  delete result.password

  process.nextTick(() => {
    return done(null, result)
  })
})

function checkInput(request, response, next){
  if(request.body.username === '' | request.body.password === '') {
    response.send('아이디 / 비밀번호를 입력하세요.')
  } else {
    next()
  }
}

app.use(checkInput)

app.get('/login', async (request, response) => {
  console.log(request.user)
  response.render('login.ejs')
})

app.post('/login', async (request, response, next) => {
  // user : 성공시 로그인한 유저정보
  // info : 요청 실패시 이유
  passport.authenticate('local', (error, user, info) => {
    if(error) return response.status(500).json(error)
    if(!user) return response.status(400).json(info.message)
    request.logIn(user, (err) => {
      if(err) return next(err)
      response.redirect('/')
    })
  })(request, response, next)
})

app.get('/register', (request, response) => {
  response.render('register.ejs')
})

app.post('/register', async (request, response) => {
  let hash = await bcrypt.hash(request.body.password, 10)
  console.log(hash)

  await db.collection('user').insertOne({ 
    username : request.body.username,
    // 비밀번호는 hasing해서 저장하는 게 좋다.
    // hasing : 문자 -> 랜덤문자로 변환
    // hasing algorithm : md5, SHA1, (SHA3-256, SHA3-512, bcrypt, scrype, argon2)... etc
    password : hash
  })
  response.redirect('/')
})

app.get('/mypage', (request, response) => {
  response.render('mypage.ejs')
})
