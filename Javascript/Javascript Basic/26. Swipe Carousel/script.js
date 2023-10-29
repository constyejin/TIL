let start = 0;
let push = false;

// mousedown, mouseup, mousemove Event
$('.slide-item').eq(0).on('mousedown', function(e){
  // start = e.touches[0].clientX;
  start = e.clientX;
  push = true;
})

$('.slide-item').eq(0).on('mousemove', function(e){
  // console.log(e.clientX - start);
  if(push == true) {
    $('.slide-list').css('transform', `translateX(${e.clientX - start}px)`)
  }
})

$('.slide-item').eq(0).on('mouseup', function(e){
  push = false;
  
  // mouseup시 100px 이상 이동했으면 두번째 사진, 아니면 첫번째 사진 보여주기
  // e.changedToushes[0].clientX
  if(e.clientX - start < -100) {
    $('.slide-list')
      .css('transition', 'all 500mss')
      .css('transform', `translateX(-100vw)`);
  } else {
    $('.slide-list')
    .css('transition', 'all 500ms')  
    .css('transform', `translateX(0vw)`);
   }

   setTimeout(() => {
     $('.slide-list').css('transition', 'none');
   },500)
})

// touchstart, touchmove, touchend

// Hammer.js 라이브러리 사용하면 편하게 구현 가능함
// 브라우저간 호환성 잡아줌
// 이벤트리스너 6개 말고 1개만 필요
// Swipe, pinch, rotate 이벤트리스너도 제공

// (응용) 나머지 이미지들도 적용하기
// 첫번째 이미지는 우측으로 스와이프 못하게 적용
