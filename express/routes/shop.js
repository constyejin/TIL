// require('파일경로/라이브러리명')
let router = require('express').Router();

router.get('/test/01', function(requests, response){
  response.send('test 01번 페이지');
})

router.get('/test/02', function(requests, response){
  response.send('test 02번 페이지');
})

// 현재 파일에서 내보낼 변수명
module.exports = router;
