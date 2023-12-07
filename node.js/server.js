const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

const { MongoClient } = require('mongodb')
let db
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
  db.collection('post').insertOne({title : 'laala'})
})
// 



