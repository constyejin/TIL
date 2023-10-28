// window == viewport
$(window).scroll(function(){
  let height = $(window).scrollTop();
  console.log(height);

  // 650 ~ 1150까지 스크롤바 내리면,
  // 첫번째 card-box의 opacity 1~0으로 서서히 변경
  
  // 1차 함수
  // 높이가 650~1150일 때 0~1이 되는 y는?
  let y = (-1/500) * height + 115/50;
  // 1 = a * 650 + b
  // 0 = a * 1150 + b
  // a = -1/500
  // b = 115/50

  $('.card-box').eq(0).css('opacity', y);
})
