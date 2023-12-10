const router = require('express').Router()

// 공통된 URL 축약
router.get('/shirts', (request, response) => {
  response.send('셔츠 파는 페이지')
})

router.get('/pants', (request, response) => {
  response.send('바지 파는 페이지')
})

module.exports = router
