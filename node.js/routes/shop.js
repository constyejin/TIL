const router = require('express').Router()

let connectData = require('./../database');

let db;
connectData.then((client)=>{
  console.log('DB연결성공');
  db = client.db('forum');
}).catch((err)=>{
  console.log(err);
})

// 공통된 URL 축약
router.get('/shirts', async (request, response) => {
  let result = await db.collection('post').find().toArray()
  console.log(result)
  response.send('셔츠 파는 페이지')
})

router.get('/pants', (request, response) => {
  response.send('바지 파는 페이지')
})

module.exports = router
