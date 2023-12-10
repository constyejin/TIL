const router = require('express').Router()
let connectData = require('./../database');

let db;
connectData.then((client)=>{
  console.log('DB연결성공');
  db = client.db('forum');
}).catch((err)=>{
  console.log(err);
})

router.get('/search', async(request, response) => {
  // console.log(request.query.val)
  let result = await db.collection('post').find({ title : { $regex : request.query.val} }).toArray();
  response.render('search.ejs', { posts : result })
})

module.exports = router
