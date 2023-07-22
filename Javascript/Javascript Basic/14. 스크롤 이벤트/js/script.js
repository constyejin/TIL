// 유저가 스크롤을 얼마나 내렸는지 파악하고 싶을 때 사용하는 이벤트
// window : 현재 html 페이지를 의미 (document랑 같은 개념이라고 생각하면 된다.)
// window > document > html tags
// scroll 이벤트에는 관습적으로 window를 부착한다.
window.addEventListener('scroll', function(){
  // 현재 페이지에서 얼마나 스크롤 했는지를 px 단위로 알 수 있다. (세로)
  // (가로 스크롤이 있다면)scrollX : 가로로 얼마나 스크롤 했는지 알 수 있다.
  // console.log(window.scrollY);

  // 강제로 스크롤바 이동 window.scrollTo(x,y)
  // window.scrollTo(0, 100);

  // jQuery로 구현
  // scrollTop() (Vanilla JS scrollY와 동일) & 스크롤 이동까지 한번에 가능
  // $(window).on('scroll', function(){
  //   $(window).scrollTop(500);
  //   console.log($(window).scrollTop())
  // })


  // task1
  // 페이지 스크롤바를 100 이상 내렸을 때 배경색 변경
  if(100 < window.scrollY) {
    document.querySelector('nav').style.backgroundColor = '#ccc';
  } else {
    document.querySelector('nav').style.backgroundColor = '#fff';
  }
})

// task2
// 스크롤이 끝까지 됐을 때 '스크롤 끝!' alert 창 띄우기
// 스크롤바 내린 양 + 화면에 보이는 div 높이 == div 실제 높이
document.querySelector('.lorem').addEventListener('scroll', function(){
  let 스크롤양 = document.querySelector('.lorem').scrollTop;
  // 박스가 화면에 보이는 부분 높이
  let 높이 = document.querySelector('.lorem').clientHeight;
  // 박스에 스타일로 넣은 높이값 말고 스크롤 가능한 실제높이
  let 실제높이 = document.querySelector('.lorem').scrollHeight;
  // console.log(스크롤양 + 높이, 실제높이)

  if(스크롤양 + 높이 == 실제높이) {
    alert('lorem 스크롤 끝!')
  }

  // 풀이
  // if(스크롤양 + 높이 > 실제높이 - 10) {
  //   alert('스크롤 끝!')
  // }
})


window.addEventListener('scroll', function(){
  // 응용 문제
  // documentElement == querySelector('html')
  let 스크롤양1 = document.documentElement.scrollTop;
  let 높이1 = document.querySelector('html').clientHeight;
  let 실제높이1 = document.querySelector('html').scrollHeight;
  // console.log(스크롤양1, 높이1, 실제높이1)
  
  if(스크롤양1 + 높이1 == 실제높이1) {
    alert('html 스크롤 끝!');
  }
})

// 1. 스크롤바 조작할 때 마다 코드실행 가능
// 2. 박스의 실제 높이 / 보이는 높이 구하는 방법 (scrollHeight / clientScroll)
// 3. 스크롤된 양 구하는 방법 (scrollTop)
// 이 정도 이해하고 지나가면 충분함. 문법은 필요할 때 구글에서 검색해서 쓰면 됨.

// scroll 다룰 때 주의점
// 1. scroll 이벤트리스너 안의 코드는 1초의 60번 이상 실행 되므로 컴퓨터한테 부담을 줄 수 있으니 너무 많이 사용하지 않는 게 좋다.
// 2. 중복 방지 

