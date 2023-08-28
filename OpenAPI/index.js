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
// app.get('/', function(requests, response){
//   response.send('Hello World!!!');
// })

app.get('/', function(requests, response){
  response.sendFile(__dirname + '/index.html');
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



// body-parser 라이브러리 사용하는 방법
// body-parser는 요청 데이터 해석을 도와주는 라이브러리
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

// html input 태그에 name 속성 추가하기
// 서버에서 input을 구분하기 위해 사용하는 속성

// 1
// 폼에 입력한 데이터를 서버에 전송하는 방법
// 어떤 사람이 /login 경로로 POST 요청하면 ~ 해주세요
// app.post('경로', function(){})

// 우리가 작성한 input 속 내용은 requests라는 파라미터가 가지고 있다.
// 이 값을 꺼내서 사용하려면 body-parser 라이브러리가 필요하다.
// npm install body-parser
app.post('/add', function(requests, response){
  response.send('전송 완료!')
  console.log(requests.body.id)
})

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
