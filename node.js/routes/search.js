const router = require('express').Router()

router.get('/search', async(request, response) => {
  console.log(request.query.val)
})

module.exports = router
