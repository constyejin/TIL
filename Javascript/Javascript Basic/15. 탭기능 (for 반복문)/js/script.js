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


// 반복문으로 작성
// for (let i = 0; i < 3; i++) {
//   $('.tab-button').eq(i).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');

//     $(this).addClass('orange');
//     $('.tab-content').eq(i).addClass('show');
//   })
// }


// (응용) 확장성 있는 코드로 변경
// 좋은 코드의 조건
// 1. 원하는 기능이 잘 구현 되었는지
// 2. 확장성이 좋은지
// 3. 나중에 관리가 용이한지
// 4. 성능문제는 없는지
for(let i = 0; i < buttons.length; i++) {
  buttons.eq(i).on('click', function(){
    buttons.removeClass('orange');
    $('.tab-content').removeClass('show');

    $(this).addClass('orange');
    $('.tab-content').eq(i).addClass('show');
  })
}
