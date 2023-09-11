// 환경 변수 라이브러리 등록
// index.js 파일과 같은 경로에 env 파일 생성
require('dotenv').config();

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
// app.get('/login', function(requests, response){
//   response.sendFile(__dirname + '/login.html');
// })

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

// 기존 index.js 코드
// MongoClient.connect('mongodb+srv://admin:wmfdlekt12@test.tithxy6.mongodb.net/?retryWrites=true&w=majority', function(error, client){
//   // 커넥션 에러 대부분은 url 오타
//   if(error) {
//     return console.log(error)
//   }

//   // db 이름
//   db = client.db('testapp');
//   // db.collection('post').insertOne('저장 할 데이터', 콜백함수)
//   // 데이터는 object 자료형으로 저장해야 한다.
//   // db.collection('post').insertOne({이름 : '홍길동', 나이 : 20}, function(error, result){
//   //   console.log('저장!')
//   // })

//   // 접속 확인
//   app.listen('7070', function(){
//     console.log('seccess!')
//   })

// })

// env 파일 적용 코드
  MongoClient.connect(process.env.MONGO_URI, function(error, client){
  if (error) return console.log(error)

  db = client.db('testapp');
  
  app.listen(process.env.PORT, function() {
    console.log('listening on 7070')
  })
}) 


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


// 로그인중인 유저의 _id와 글에 저장된 _id가 일치하면 데이터 삭제
app.delete('/delete', function(requests, response){
  // body에 담긴 게시물 번호에 따라 DB에서 해당 데이터 삭제
  console.log(requests.body)
  // 서버에서 응답 코드로 요청의 상태를 표시할 수 있다
  // 2xx => 요청 성공
  // 4xx => 고객 문제로 요청 실패`
  // 5xx => 서버 문제로 요청 실패
  // 응답코드 200과 함께 보낼 메세지 작성

  let removeData = {_id : requests.body._id, writer : requests.body.name}

  // deleteOne(삭제 대상, function(error, result){})
  // 데이터를 주고 받을 때 형이 변환되는 경우가 있다 parseInt로 형변환
  requests.body._id =  parseInt(requests.body._id);

  db.collection('post').deleteOne(removeData, function(error, result){
    console.log('삭제 완료!')
    response.status(200).send({message : '성공적'});
  })
})



// 데이터 마다 상세페이지 만들기
// 각 페이지에 보여줄 내용이 다르기 때문에 경로도 달라져야함
// detail/1 로 접속 했을 때
// detail/2 로 접속 했을 때
// detail/ _id가 가진 고유 값
// 일반적인 서버 개발 방법
// 사용자가 /detail: 콜론 뒤에 아무 문자나 입력 했을 때 
// url 파라미터 = 함수의 파라미터
app.get('/detail/:id', function(requests, response){
  // params.id : 파라미터 중 :id 값 
  // parseInt 정수로 변환 (String X)
  db.collection('post').findOne({_id : parseInt(requests.params.id)}, function(error, result){
    console.log(result)
    response.render('detail.ejs', {data : result})
  })
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

    // 다른 URL로 리디렉션하는 즉, "/data"라는 URL로 다시 이동
    response.redirect('/data')
  })
})
// 읽기, 쓰기, 수정, 삭제 CRUD 완료!


// 세션, JWT, OAuth 등 회원인증 방법론
// 회원가입 구현하는 방법 여러가지 중 제일 많이 사용하는 세션
// 유저가 로그인 하면 세션 아이디라는걸 하나 발급해서 서버와 고객 둘 다 그 값을 가진다.
// 세션 아이디란? 유저가 로그인 한 정보가 담긴 자료
// 로그인 하는 유저가 여러명이니까 고유의 세션 아이디 값으로 구분한다.
// 발급된 세션 아이디는 서버에도 보관되고, 사용자 브라우저 쿠키에도 기록된다.
// 유저가 페이지를 요청할 때 마다 쿠키가 서버로 전송된다.
// 서버는 전송 받은 쿠키에 기록된 세션 아이디 값과 DB에 있는 세션 아이디를 비교해서 같다면 원하는 정보를 준다.

// Session 로그인 기능 구현
// 라이브러리 3개 설치
// 1. npm install passport 
// 2. npm install passport-local 
// 3. npm install express-session
// npm install 다음 띄어쓰기 하면 동시에 여러개 라이브러리를 설치할 수 있다.
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

// app.use (미들웨어)
// 서버에 요청 - 응답 하는 중간에 실행하고 싶은 코드
// passport가 제공하는 미들웨어
// passport : Node.js 환경에서 로그인을 쉽게 구현할 수 있게 도와주는 라이브러리
app.use(session({secret : 'secret', resave : true, saveUninitialized : false}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', function(requests, response){
  response.render('login.ejs')
})

// 어떤 사람이 로그인 페이지에 가서 아이디/비밀번호를 입력
// 아이디 비밀번호 검사해서 일치하면 응답
// local 이라는 방식으로 인증 
// 회원인증 실패하면 /fail 경로로 이동

// 사용자가 '/login' 경로로 POST 요청을 보내면 
// Passport로 로컬 방식으로 인증을 시도하고, 인증이 성공하면 메인 페이지('/')로 리디렉션 한다. 
// 인증이 실패하면 '/fail' 경로로 리디렉션
app.post('/login', passport.authenticate('local', {
  failureRedirect : '/fail'
}), function(requests, response){
  response.redirect('/')
})


// 로그인 실패 했을 때 fail 경로로 가니까 보여줄 화면 작성
app.get('/fail', function(requests, response){
  response.send('로그인 실패~!')
})


// 로컬스트레트지로 아이디, 비밀번호 값 인증
passport.use(new LocalStrategy({
  // 유저가 입력한 아이디와 비밀번호 필드 이름 설정. 
  // HTML 폼에서 입력한 값을 설정된 필드 이름으로 서버로 전달(name 속성)
  usernameField: 'id',
  passwordField: 'pw',
  // 사용자의 로그인 세션을 유지할 것인지 여부
  session: true,
  // 아이디 / 비밀번호 말고 다른 정보 검증하고 싶을 때 사용 (req)를 콜백 함수로 전달
  passReqToCallback: false,

// 콜백함수에서 사용자 아이디 / 비밀번호 검증
}, function (userID, userPW, done) {
  //console.log(userID, userPW);
  db.collection('post').findOne({ id : userID }, function (error, result) {
    // 결과에 찾는 값이 없다면 실행
    // done 세 개의 파라미터를 받는다
    // (서버에러, 사용자 db 데이터, 에러메세지)
    if (!result) {
      return done(null, false, { message: '없는 아이디' })
    }

    if (userPW == result.pw) {
      return done(null, result)
    } else {
      return done(null, false, { message: '비밀번호 불일치'})
    }
  })
}));

// 로그인 성공 -> 세션 정보(유저 로그인 데이터)를 만든다.
// 씨리얼라이즈유저 : 유저 정보를 암호화 한다.
// 로그인 성공 했을 때 
passport.serializeUser(function(user, done){
  done(null, user.id)
});

// 해당 세션 데이터를 가진 사람을 db에서 찾아준다.
// 로그인한 유저의 개인정보를 db에서 찾는 역할
// 디씨리얼라이즈유저
passport.deserializeUser(function(id, done){
  // db에서 user.id로 유저를 찾은 후 유저 정보를 done에 넣어준다.
  // 마이페이지 같은 곳에서 유저 이름 표시해주고 싶을 때 사용
  // 로그인한 유저의 세션아이디를 바탕으로 개인정보를 db에서 찾는 역할
  db.collection('login').findOne({id : id}, function(error, result){
    done(null, result)
  })
})


// Login 기능 구현
// 1. views 폴더 안 join.ejs 파일 생성 
// 2. 회원가입 폼 작성 
// 3. db.collection('login')에 join.ejs 파일에 있는 input value값 저장 
// 저장전에 id가 이미 있는지 중복 여부 체크
// id에 알파벳 숫자만 잘 들어있나 체크
// 비밀번호 저장 전에 암호화 했는지 여부 체크
app.get('/join', function(requests, response){
  response.render('join.ejs')
})

app.post('/join', function(requests, response){
  db.collection('counter').findOne({name : 'dataLength'}, function(error, result){
    console.log(result.totalData)
    let totalDataLength = result.totalData;

    db.collection('post').insertOne({_id : totalDataLength + 1, name : requests.body.name, id : requests.body.id, pw : requests.body.pw}, function(error, result){
      console.log('login collection에 저장완료!')
    })

    db.collection('counter').updateOne({name : 'dataLength'},{ $inc : {totalData : 1}}, function(error, result){
      if(error) {
        return console.log(error);
      }
      response.redirect('/login')
    })
  })
})


// 로그인 한 사람만 접속할 수 있는 페이지
app.get('/mypage', getLogin ,function(requests, response){
  console.log(requests.user)
  response.render('mypage.ejs', {info : requests.user})
})

// 로그인 여부를 판단하는 미들웨어 생성
// 파라미터 3개
function getLogin(requests, response, next){
  // 로그인 후 세션이 있으면 requests에 user정보가 있다.
  if(requests.user) {
    next()
  } else {
    response.send('로그인 하세요~!')
  }
}


app.post('/logout', function (requests, response, next) {
  requests.session.destroy();
  // response.clearCookie();
  console.log('로그아웃 완료!')
  response.redirect('/login')
});

// 회원가입 양식을 만들고 거기에 입력된 정보 login db에 저장
// 서버를 껐다 키면 세션이 사라져서 다시 로그인 해야한다.


// 검색 버튼 누르면 해당 키워드 DB에서 찾기 서버에게 요청
// 하나 찾을 때 collection().findOne()
// 다 찾을 때 collection.find().toArray)()

// GET 요청으로도 서버로 데이터를 전달할 수 있다.
// query string 또는 query parameter
// localhost/data?데이터이름=데이터값
// GET 요청으로 서버에 데이터 넘겨주는 방법

// app.get('/search', (requests, response) => {
//   // console.log(requests.query.value);
//   db.collection('post').findOne({아이디 : requests.query.value}, (error, result) => {
//     console.log(result)
//     response.render('search.ejs', {data : result})
//   })
// })

// 정확히 일치하는 것만 찾아주는 게 아니라 그 해당 키워드가 들어가는 것 전부 찾기
// 정규식으로 구현
// 데이터가 많을 경우, find로 하나하나 찾으려면 너무 오래 걸리기 때문에 indexing 사용
// 컴퓨터의 기본적인 search 알고리즘 = 0번 부터 순서대로 하나씩 체크하면서 해당 값을 찾는다. (비효율적)

// Binary Search 
// 데이터가 100개 있다면 0부터 찾는 게 아니라 반 부터 시작
// Binary Search 적용 조건 : 데이터가 숫자순(오름, 내림차순)으로 정렬되어 있어야 한다.

// Mongo DB는 _id 값 순으로 정렬 시켜준다.
// 문자열도 적용 가능한데, 가나다, abc 순으로 정렬되어 있어야함. => 이 과정을 '인덱스 생성'이라고 한다.

// find -> agreegate 
// 검색조건을 여러개 설정 할 수 있다.
app.get('/search', (requests, response) => {
  let searchPara = [
    {
      $search: {
        index: 'idSearch',
        text: {
          query: requests.query.value,
          path: 'id'  // 제목날짜 둘다 찾고 싶으면 ['제목', '날짜']
        }
      }
    },
    // 결과 정렬(_id를 오름차순 정렬)
   { $sort : { _id : 1 } },
  //  결과 제한(맨 위 10개만 가져오기)
   { $limit : 10 },
  //  찾아온 결과 중 원하는 항목만 보여주기.
  //  { $project : { 제목 : 1, _id : 0 } }
  ]
  db.collection('post').aggregate(searchPara).toArray((error, result) => {
    console.log(result) 
    response.render('search.ejs', {data : result})
  })
})

// 띄어쓰기 기준이로 검색해서 붙어있으면 검색 X
// Create Search Index
// Lucene => lucene.korean으로 선택 (한국어 형태소 분석 ~을,를 등 조사 제거)

// index.js에 shop.js 라우터 첨부
// app.use => 미들웨어(요청과 응답사이에 실행 할 코드)
app.use('/', require('./routes/shop.js'))
// app.get('/test/01', function(requests, response){
//   response.send('test 01번 페이지');
// })

// app.get('/test/02', function(requests, response){
//   response.send('test 02번 페이지');
// })

let multer = require('multer');
// 휘발성이 있게 저장하고 싶으면 memoryStorage에 저장
var storage = multer.memoryStorage({
  destination : function(req, file, cb) {
    cb(null, './public/image')
  },
  filename : function(req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({storage : storage});

// 이미지는 DB보다 일반하드에 저장하는게 싸고 편함.
app.get('/upload', (requests, response)=> {
  response.render('upload.ejs')
})

// 데이터를 쉽게 처리할 수 있게 도와주는 라이브러리
// npm install multer 
// 이미지 업로드시 multer를 미들웨어로 동작시키기
// upload.single('input의 name 속성 이름')
app.post('/upload', upload.single('profile'), (requests, response) => {
  response.send('업로드 완료!')
});


