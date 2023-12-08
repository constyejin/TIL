const express = require('express');
const app = express();
const { MongoClient, ObjectId } = require('mongodb');


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
  console.log(request.params.id)
  let result = await db.collection('post').findOne({ _id : new ObjectId(request.params.id)})
  console.log(result)
  response.render('detail.ejs', {result : result})
})

