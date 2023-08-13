// Node.js 에서 express로 서버를 만들기 위한 기본 문법
const express = require('express');
const app = express();

// .listen이라는 함수를 쓰면 서버를 열 수 있는데 어디에 열건지 정해줘야 한다.
// listen(파라미터1, 파라미터2)
// 파라미터1 : 서버를 띄울 포트 번호
// 파라미터2 : 띄운 후 실행 할 코드

// 포트 : 컴퓨터에는 외부랑 네트워크 통신을 하기 위한 6만개 정도의 구멍이 있다.  
// 그 여러개의 구멍중에 8080으로 접속한 사람에게는 이 서버를 띄워주세요.
app.listen(8000, function(){
  console.log('8000 포트!');
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
// slash / 하나는 홈페이지
app.get('/hello', function(requests, response){
  response.send('Hello World!');
})

// 서버 종료 ctrl + c
// http://localhost:8080/hello 으로 접속



// /bye 로 접속 했을 때 Goodbye 텍스트 보여주기
// .get()으로 경로 여러개 생성 가능
app.get('/bye', function(requests, response){
  response.send('Goodbye');
})


// 서버 재실행 자동화
// -g 컴퓨터 모든 폴더에서 이용 가능하게 global하게 설치
// npm install -g nodemon
// nodemon ./Node.js/server.js


// powershell 보안 오류시
// poswershell (관리자 권한으로 실행)
// executionpolicy 입력
// Restricted 라고 뜨면 허가한 script 외에 막아버리기 때문에 에러 발생
// set-executionpolicy unrestricted 입력
// y 입력 후 엔터


// Javascript나 Node.js에서는 callback 함수를 자주 사용한다.
// 함수 안에 함수 (function(){}) = 콜백함수
// 순차적으로 코드를 실행하고 싶을 때 사용
app.get('/', function(requests, response){
  response.sendFile(__dirname + '/index.html')
})

// // 어떤 사람이 슬래시 write로 접속하면 이 함수 안에 내용을 실행 해주세요.
// 콜백 함수 안에는 두 개의 파라미터가 들어간다.
// (요청 내용, 응답 방법)
app.get('/write', function(requests, response){
  response.sendFile(__dirname + '/write.html')
})

// ES6 신문법
// arrow function 
// function 대신 => 화살표 사용
// .get('경로', (요청 내용, 응답 방법) => {})


// 어떤 사람이 /add 경로로 POST 요청을 하면 ?? 를 해주세요
// POST 요청 처리 함수

// input에 적은 정보는 requests에 저장되어 있다
// 이 정보를 꺼내쓰려면 라이브러리 필요! => body-parser
app.post('/add', function(requests, response){
  response.send('전송 완료!')
})
