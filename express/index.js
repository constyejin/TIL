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
// app.listen(7000, function(){
//   console.log('7000 포트!!!');
//   // document.querySelector('body').innerHTML = '<h1>hello</h1>';
// });


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

// 폴더 내 모든 정적 파일 제공(css, 이미지, js, 폰트 등)
app.use(express.static(__dirname));


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
// app.post('/add', function(requests, response){
//   response.send('전송 완료!')
//   console.log(requests.body)
// })


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

// 2. Client - Server 역할 구분
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



// MongoDB
// npm install mongodb@3.6.4
const MongoClient = require('mongodb').MongoClient;

// 커넥션 url
// Database Access에서 만든 아이디 : 비밀번호 입력
// 몽고 디비 클라우드 접속 끝

// 콜백함수 에러 파라미터 : 에러가 발생했을 때 어떤 에러인지 알려준다.

// 데이터를 저장할 변수 하나 지정
let db;
MongoClient.connect('mongodb+srv://admin:wmfdlekt12@test.tithxy6.mongodb.net/?retryWrites=true&w=majority', function(error, client){
  // 커넥션 에러 대부분은 url 오타
  if(error) {
    return console.log(error)
  }

  // db 이름
  db = client.db('testapp');
  // db.collection('post').insertOne('저장 할 데이터', 콜백함수)
  // 데이터는 object 자료형으로 저장해야 한다.
  // db.collection('post').insertOne({이름 : '홍길동', 나이 : 20}, function(error, result){
  //   console.log('저장!')
  // })

  // 접속 확인
  app.listen('7070', function(){
    console.log('seccess!')
  })

})

// 빨간 에러외에 워닝 메세지는 무시해도된다.



// 어떤 사람이 /add 라는 경로로 post 요청하면
// 아이디랑 비밀번호 데이터를 보내고 
// 이 데이터를 post라는 이름을 가진 collection에 저장한다.
app.post('/add', function(requests, response){
  response.send('전송 완료!')
  console.log(requests.body)

  // DB에서 총 데이터 수 꺼내오기
  // 데이터를 전부 찾고싶으면 find(), 하나만 찾고싶으면 findOne()
  // 이름이 tatalData인 데이터를 찾아달라는 쿼리문
  db.collection('counter').findOne({name : 'dataLength'}, function(error, result){
    console.log(result.totalData) // 서버에 있는 총 데이터 수
    let totalDataLength = result.totalData;

    db.collection('post').insertOne({_id: totalDataLength + 1, 아이디 : requests.body.id , 비밀번호 : requests.body.pw}, function(error, result){
      console.log('저장완료!!')

      // 새로운 데이터가 생기면 counter collection에 있는 totalData 1 증가 시키키
      // undateOne({변경 할 데이터},{ $set : {수정값}})
      // update operator(연산자) $set(변경), $inc(증가) 등 여러가지가 있음
      // {$set : {totalData : 변경할 값} }
      // {$inc : {totalData : 기존값에 더해줄 값}}
      db.collection('counter').updateOne({name : 'dataLength'},{ $inc : {totalData : 1}}, function(error, result){
        if(error) {
          // form에서 /add로 post청하면 DB에서 counter라는 collection에서
          // counter 내 총 데이터 수를 찾고 그 값을 변수에 저장한다
          // post 라는 collection에 새 데이터 저장 할 때 id값 = 현재 데이터 수 + 1
          // counter내 총 데이터 수 + 1
          return console.log(error);
        }
      })
    })
  });

  // 아이디 값을 1이라고 하드 코딩하면 안되고 '총 데이터 수 + 1'
  // auto increment 
  // db에 항목 추가할 때마다 자동으로 1 증가시켜서 저장
  // 총 게시물 수 구하는 기능 posts라는 collection에 저장된 값에 + 1하는 기능 (간단하지만 좋은 방법 X)
  // 데이터가 삭제되고, 바뀌어도 id값은 바뀌지 않고 그대로 지정되어 있는 게 좋다.
})
 
// /data 로 접속하면 GET 요청으로 DB에 저장된 데이터를 보여준다.
// npm install ejs
app.set('view engine', 'ejs');

// .html -> ejs로 바꾸기
// 서버에서 html 말고 .ejs 파일 보내주는 방법
app.get('/data', function(requests, response){
  // DB에 저장된 post라는 collection안 데이터를 꺼낸다.
  // 데이터를 꺼내서 html에 보여주는 거니까 데이터를 꺼내는 게 먼저
  db.collection('post').find().toArray(function(error, result){
    // result가 가지고 있는 데이터를 ejs 안으로 집어 넣는다.
    console.log(result)

    // 서버에서 보낸 posts라는 변수
    // posts에 들어있는 길이만큼 반복문으로 반복
    response.render('data.ejs', {posts : result});
  });
});


// Error: Failed to lookup view
// ejs 파일들은 항상 views 라는 폴더내에 생성해야 한다.


// ejs 문법 반복문
// for (let i = 0; i < posts.length; i++) {
//   <p>ID : <%= posts[0].아이디 %> </p>
//   <p>PW : <%= posts[0].비밀번호 %> </p>
// }


app.delete('/delete', function(requests, response){
  // body에 담긴 게시물 번호에 따라 DB에서 해당 데이터 삭제
  console.log(requests.body._id)
  // 서버에서 응답 코드로 요청의 상태를 표시할 수 있다
  // 2xx => 요청 성공
  // 4xx => 고객 문제로 요청 실패`
  // 5xx => 서버 문제로 요청 실패
  // 응답코드 200과 함께 보낼 메세지 작성
  
  // deleteOne(삭제 대상, function(error, result){})
  // 데이터를 주고 받을 때 형이 변환되는 경우가 있다 parseInt로 형변환
  requests.body._id =  parseInt(requests.body._id);

  db.collection('post').deleteOne({_id : requests.body._id}, function(error, result){
    console.log('삭제 완료!')
  })
  response.status(200).send({message : '성공적'});
})



// HTML form 에서는 get, post요청만 가능 
// put, delete 요청을 하고 싶다면 외부 라이브러리 사용
// npm install method-override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


// 게시글 마다 각각 다른 edit.ejs가 필요함
// url 파라미터 (params.id)
// /edit/1 로 접속하면 1번 게시물 아이디 비밀번호를 보내준다.
app.get('/edit/:id', function(requests, response){
  // findOne 안에 어떤 데이터를 찾고싶은지 쿼리문 작성
  // 문자가 아니라 숫자로 보내줘야하기 때문에 parseInt()
  db.collection('post').findOne({_id : parseInt(requests.params.id)}, function(error, result){
    console.log(result)
    response.render('edit.ejs', {post : result})
  })
})


// 서버로 put요청 들어오면 데이터 수정 처리
app.put('/edit', function(requests, response){
  // 폼에 담긴 데이터(아이디, 비밀번호)를 db.collection('post')에 업데이트
  db.collection('post').updateOne({_id : parseInt(requests.body._id)}, { $set : {아이디 : requests.body.id, 비밀번호 : requests.body.pw}}, function(error, result){
    console.log('데이터 수정 완료!')
    response.redirect('/data')
  })
})


// 읽기, 쓰기, 수정, 삭제 CRUD
