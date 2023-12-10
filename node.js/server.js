const express = require('express');
const app = express();
const { MongoClient, ObjectId } = require('mongodb');
const methodOverride = require('method-override')

app.use(methodOverride('_method')) 
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true})) 

let db;
const url = 'mongodb+srv://admin:wmfdlekt12@test.tithxy6.mongodb.net/?retryWrites=true&w=majority'
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum')
  app.listen(8080, () => {
    console.log('8080')
  })
}).catch((err)=>{
  console.log(err)
})

app.get('/', (request, response) => {
  response.render('main.ejs')
})

app.get('/news', (request, response) => {
  response.send('News Page')
  // db.collection('post').insertOne({title : 'laala'})
})

// await : 다음줄을 실행하기 전에 잠깐 기다리라는 문법
// Javascript는 처리가 오래 걸리는 코드는 처리완료 기다리지 않고 바로 다음줄을 실행한다.
// await은 정해진 곳에만 붙일 수 있다 (promise 뱉는 것)
app.get('/list', async (request, response) => {
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
// app.get('/list/:id', async (request, response) => {
//   // .skip() 성능 안 좋음. 너무 많이 skip 불가능하게 막는게 좋다.
//   let result = await db.collection('post').find().skip((request.params.id -1) * 5).limit(5).toArray();
//   response.render('list.ejs', { posts : result })
// })

app.get('/list/next/:id', async (request, response) => {
  // .skip() 성능 안 좋음. 너무 많이 skip 불가능하게 막는게 좋다.
  let result = await db.collection('post')
  // 방금 본 게시물의 _id보다 큰 게시물 중에 위에서 부터 5개만 잘라서 가져오기
  .find({_id : {$gt : }})
  .limit(5).toArray();
  response.render('list.ejs', { posts : result })
})

// app.get('/list/2', async (request, response) => {
//   // 5~10번 글 찾아서 result 변수에 저장
//   let result = await db.collection('post').find().skip(5).limit(5).toArray();
//   response.render('list.ejs', { posts : result })
// })
