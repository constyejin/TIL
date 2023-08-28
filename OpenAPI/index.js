// Express라는 라이브러리를 사용해서 서버 구축
// 1. nodemon 폴더 생성
// 2. 터미널 창에서 해당 폴더로 이동

// npm init
// enrty point 뒤에 파일명 작성
// npm install express


// Node.js에서 express로 서버를 만들기 위한 기본 문법
const express = require('express');
const app = express();

// .listen이라는 함수를 사용하면 서버를 열 수 있다.
// 소괄호 안에 서버를 어떤 포트에서 열건지 작성해야 한다.
// listen(para1, para2)
// para1 : 서버를 띄울 포트 번호
// para2 : 실행 할 코드 

// port : 컴퓨터에는 외부랑 네트워크 통신을 하기 위한 6만개 정도의 구멍이 있다. 그 여러개 구멍 중에 내가 어떤 번호로 접속할건지 작성
// node. index.js
// 내 컴퓨터에서 7000번 포트로 진입
// localhose:7000
app.listen(7000, function(){
  console.log('7000 포트!!!');
  // document.querySelector('body').innerHTML = '<h1>hello</h1>';
});


// 서버에 GET 요청으로 정보 받아오기
// 어떤 사람이 localhost:7000으로 접속하면 send 안 내용을 보여준다.
// app.get('경로', function(){})
// requests(요청), response(응답)
// slash 하나는 메인 경로
app.get('/', function(requests, response){
  response.send('Hello World!!!');
})


// localhost:7000/login 으로 접속 했을 때 HTML 파일 보여주고 싶을 때
app.get('/login', function(requests, response){
  response.sendFile(__dirname + '/login.html');
})

// 서버 종료 ctrl + c
// 서버 재실행 자동화
// -g 컴퓨터 모든 폴더에서 이용 가능하게 global하게 설치
// npm install -g nodemon
// nodemon index.js
 


// 카카오 개발자 사이트 접속
// 내 애플리케이션 -> 애플리케이션 추가하기
// 플랫폼 -> 플랫폼 설정하기 -> Web 플랫폼 등록
// Javascript key
app.get('/map', function(requests, response){
  response.sendFile(__dirname + '/kakaoMap.html');
})
