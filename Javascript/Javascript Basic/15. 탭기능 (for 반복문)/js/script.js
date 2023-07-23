// 버튼 0 누르면 -> show, orange 클래스 추가 

// 모든 버튼에 붙은 show ,orange 클래스 제거
// 클릭한 버튼에만 show, orange 클래스 추가

let buttons = $('.tab-button');

// $('.tab-button').eq(0).on('click', function(){
//   $('.tab-button').removeClass('orange');
//   $('.tab-content').removeClass('show');

//   $(this).addClass('orange');
//   $('.tab-content').eq(0).addClass('show');
// })

// $('.tab-button').eq(1).on('click', function(){
//   $('.tab-button').removeClass('orange');
//   $('.tab-content').removeClass('show');

//   $(this).addClass('orange');
//   $('.tab-content').eq(1).addClass('show');
// })

// $('.tab-button').eq(2).on('click', function(){
//   $('.tab-button').removeClass('orange');
//   $('.tab-content').removeClass('show');

//   $(this).addClass('orange');
//   $('.tab-content').eq(2).addClass('show');
// })

// 좋은 관습 : 자주 쓰는 셀렉터 변수에 저장

for (let i = 0; i < 3; i++) {
  $('.tab-button').eq(i).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');

    $(this).addClass('orange');
    $('.tab-content').eq(i).addClass('show');
  })
}


// 
