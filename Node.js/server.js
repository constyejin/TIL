// Node.js 에서 express로 서버를 만들기 위한 기본 문법
const express = require('express');
const app = express();

// .listen이라는 함수를 쓰면 서버를 열 수 있는데 어디에 열건지 정해줘야 한다.
// listen(파라미터1, 파라미터2)
// 파라미터1 : 서버를 띄울 포트 번호
// 파라미터2 : 띄운 후 실행 할 코드

// 포트 : 컴퓨터에는 외부랑 네트워크 통신을 하기 위한 6만개 정도의 구멍이 있다.  
// 그 여러개의 구멍중에 8080으로 접속한 사람에게는 이 서버를 띄워주세요.
app.listen(8080, function(){
  console.log('8080 포트!');
});

// node ./Node.js/server.js 서버가 잘 뜨는지 확인
// 내 컴퓨터에서 8080 포트로 진입하고 싶다면,
// 브라우저에서 localhost:8080

// 서버에 GET 요청해서 해당하는 HTML 받아오기
// url에 경로를 때려 박는건 GET 요청

// 누군가가 /hello 로 방문하면 
// 인사말을 띄워준다.
// app.get('경로', function(){});
// requests / response
app.get('/hello', function(requests, response){
  response.send('Hello World!');
})

// 서버 종료 ctrl + c
// http://localhost:8080/hello 으로 접속



// /bye 로 접속 했을 때 Goodbye 텍스트 보여주기
app.get('/bye', function(requests, response){
  response.send('Goodbye');
})
