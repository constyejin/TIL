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
  // document가 많은 경우 .find() 사용하면 성능이 저하된다.
  // => document가 많아도 빠르게 찾으려면 DB에 index를 만들면 된다.
  // Binary Search (절반씩 잘라가며 찾기) 사용 => 정렬이 되어 있어야 사용 가능
  // index : collection 복사해서 미리 정렬해둔 것

  // let result = await db.collection('post').find({ title : { $regex : request.query.val} }).toArray();

  // index 사용해서 검색하기
  // index 단점 
  // 1. 용량 차지
  // 2. document 추가 / 수정/ 삭제시 idnex에도 반영해야 한다.
  // search index(= Full text index)로 검색속도 향상, 단어 부분검색 가능
  let searchRequire = [
    {$search : {
      index : 'title_index',
      text : { query : request.query.val, path : 'title' }
    }},
    
    // -1 : 역순정렬 
    // 건너뛰기 : $skip : 
    { $sort : { _id : 1 } },
    { $limit : 10 },
    // 필드 숨기기 : title 필드는 보여주고, id 필드는 숨겨주세요.
    { $project : { title : 1, _id : 0 } }
  ]
  let result = await db.collection('post')
  // explain('executionStats') => 실행 시간
  .aggregate(searchRequire).toArray()
  console.log(result)
  response.render('search.ejs', { posts : result })
})

module.exports = router
