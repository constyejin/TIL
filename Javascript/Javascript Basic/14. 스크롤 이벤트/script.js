// 유저가 스크롤을 얼마나 내렸는지 파악하고 싶을 때 사용하는 이벤트
// window : 현재 html 페이지를 의미 (document랑 같은 개념이라고 생각하면 된다.)
// window > document > html tags
// scroll 이벤트는 window에 부착한다.
window.addEventListener('scroll', function(){
  // 사용자가 스크롤을 얼만큼 내렸는지 알 수 있다
  // console.log(window.scrollY);

  // 강제로 스크롤하기 window.scrollTo(x,y)
  // window.scrollTo(0, 100);

  // jQuery로 구현
  // scrollTop() (Vanilla JS scrollY와 동일) & 스크롤 이동까지 한번에 가능
  // $(window).on('scroll', function(){
  //   $(window).scrollTop(500);
  //   console.log($(window).scrollTop())
  // })


  // task1
  // 100 이상 스크롤 됐을 때 배경색 변경
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
  let 실제높이 = document.querySelector('.lorem').scrollHeight;
  let 높이 = document.querySelector('.lorem').clientHeight;
  console.log(스크롤양 + 높이, 실제높이)

  if(스크롤양 + 높이 == 실제높이) {
    alert('스크롤 끝!')
  }
})
