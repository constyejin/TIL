let checkLogin = function checkLogin (request, response, next) {
  // 미들웨어 함수에선 요청, 응답 자유롭게 사용 가능하다.
  if(!request.user) {
    return response.send('로그인 하세요.');
  }
  next()
}

module.exports = checkLogin
