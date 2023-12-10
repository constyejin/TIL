const router = require('express').Router()

router.get('/shop/shirts', (request, response) => {
  response.send('셔츠 파는 페이지')
})

router.get('/shop/pants', (request, response) => {
  response.send('바지 파는 페이지')
})

module.exports = router
