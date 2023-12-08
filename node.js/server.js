const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true})) 

const { MongoClient } = require('mongodb');
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
  response.sendFile(__dirname + '/index.html')
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

app.post('/add', (request, response) => {
  let title = request.body.title;
  let content = request.body.content;
  // console.log(title, content)
  db.collection('post').insertOne({title : title, content : content})

})

