let start = 0;
let push = true;

// mousedown, mouseup, mousemove Event
$('.slide-item').eq(0).on('mousedown', function(e){
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
})

// mouseup시 100px 이상 이동했으면 두번째 사진, 아니면 첫번째 사진 보여주기
