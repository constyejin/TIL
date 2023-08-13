// Node.js 에서 express로 서버를 만들기 위한 기본 문법
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

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
// npm install body-parser
app.post('/add', function(requests, response){
  response.send('전송 완료!')
  // form에서 보낸 데이터를 object 자료형으로 수신
  // (requests.body.htmlName) => 내가 원하는 데이터만 뽑기도 가능
  console.log(requests.body);
})

// POST 요청으로 서버에 데이터 전송 하고 싶다
// 1. body-parser install
// 2. form에 input에 name 작성

// 여기까지가 서버한테 정보를 보내는 코드
// 서버에 보낸 정보를 영구 저장하려면 DB에 저장


// REST API
// 서버를 만들 때 REST 하게 API를 짜는 게 좋다.
// API 라는걸 REST 하게 만들면 좋다

// API(Application Programming Interface)
// 프로그램 간에 어떤 식으로 통신할 수 있는지 통신 규약을 뜻하는 게 API

// (웹개발) 어떤 식으로 서버랑 통신을 할건지 적혀있는 문서
// 그 API를 어떤식으로 만들어야 좋은 API인지 고민하며 작성한게 REST API
// 초기에 API에 일관성도 없고 막 만들어놔서 url이 어렵고 복잡했음
// Roy Fielding 이라는 개발자가 'REST' 라는 원칙에 의해서 사용하자. 고 졸업 논문 작성
// REST (Representational State Transfer)

// REST 원칙 6개
// 이것들을 잘 지켰을 경우 RESTFUL 하다고 한다.
// 1. Uniform interface (가장 중요!)
// - 하나의 자료는 하나의 URL로
// - URL 하나를 알면 둘을 알 수 있어야함
// - 요청과 응답을 정보가 충분히 들어있어야 함

// 2. Client-Server 역할 구분
// - 브라우저는 요청만 할 뿐 서버의 역할을 해서는 안됨
// - 서버는 응답만 한다

// 3. Stateless
// - 요청 1과 요청 2는 서로 의존성이 없어야함. (독립적 존재) 요청마다 단독 관리

// 4. Chchable (브라우저가 알아서 해줘서 신경 쓸 필요 X)
// - 서버에서 보내주는 정보들은 캐싱이 가능해야 함
// - 캐싱을 위한 버전 같은 것도 관리 잘 해야 함

// 5. Layered System (중요 X)
// 6. Code on Demand (중요 X)


// 좋은 REST API 예시
// www.shopping.com/products/4000
// instagram.com/explore/tags/food/
// facebook.com/natgeo/photos/


// 좋은 REST API 이름짓기 원칙
// 1. URL을 명사로 작성 추천
// 2. 하위 문서를 나타낼 땐 / slash (하위폴더 나누듯이 사용)
// 3. 파일 확장자(.html) 사용 X
// 4. 띄어쓰기 대신 (-) 사용
// 5. 자료 하나당 하나의 URL
