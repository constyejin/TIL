// 서버 : 데이터 요청하면 보내주는 프로그램
// 1. 어떤 데이터인지
// 2. 어떤 방식으로 요청 할건지 잘 기재해야 데이터 줌

// GET : 데이터를 읽을 때
// POST : 데이터를 보낼 때

// 특정 url로 POST 요청 하는 방법
// <form action="경로" method="post">
// 유저가 서버에 데이터 보내려면 거의 POST 요청 


// GET / POST 요청하면 브라우저 새로고침됨.
// Ajax는 새로고침 없이 GET, POST를 요청 할 수 있다.


// Ajax로 GET 요청하기(jQuery 이용) 
// $.get('url')
// $.get('https://codingapple1.github.io/hello.txt').done(function(data){
//   console.log(data);
// })


// Ajax로 POST 요청하기(jQuery 이용) 
// post(url, 데이터)
// POST 요청을 처리 할 서버가 없기 때문에 일단 사용 방법만 숙지
// $.post('https://codingapple1.github.io/hello.txt', {name: 'yejin'}).done(function(data){
//   console.log(data);
// })


// Ajax 실패시 특정 코드 실행하는 방법
// Error 마다 다 뜻이있는데, 404 Error => url 주소가 이상할 때
// $.get('https://codingapple1.github.io/hello.txt').done(function(data){
//   console.log(data);
// }).fail(function(){
//   console.log('실패!');
// })



// GET 요청으로 콘솔창에 가격 출력하기
// 서버에서 작성해둔 API 문서에 따라서 GET, POST 요청으로 서버랑 통신 할 수 있다.
// $.get('https://codingapple1.github.io/price.json').done(function(data){
//   console.log(data.price);
// }).fail(function(){
//   console.log('요청 실패');
// })


// 동일한 기능 Vanilla JS로 구현 (fetch 사용)
// 서버와 유저는 문자 자료만 주고 받을 수 있다.
// object, arrat를 보내고 싶다면 따옴표로 문자열로 만들어야 한다.
// 따옴표 친 object 자료형 => 'json' 이라고 부른다.
// json은 문자열이기 때문에 원하는 자료만 뽑기 어렵다.
// 그래서 받아온 json을 다시 object로 바꿔준다.
// jQury $.get() 은 json -> object로 자동 변환 해준다.
// fetch('https://codingapple1.github.io/price.json')
// .then(res => res.json())
// .then(data => {
//   console.log(data.price)
// })
// .catch(error => {
//   console.log(error)
// })
