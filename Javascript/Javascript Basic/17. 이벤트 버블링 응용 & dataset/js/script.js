// for(let i = 0; i < $('.tab-button').length; i++) {
//   $('.tab-button').eq(i).on('click', function(){
//     탭열기(i)
//   })
// }

// 함수로 축약하기
function 탭열기(num){
  $('.tab-button').removeClass('orange');
  $('.tab-content').removeClass('show');

  $('.tab-button').eq(num).addClass('orange');
  $('.tab-content').eq(num).addClass('show');
}


// 탭기능 다르게 만들기 (이벤트리스터 1개 사용)
// document.querySelector('.list').addEventListener('click', function(e){
//   // 지금 클릭된 요소가 버튼 0이라면 버튼 0에 show, orange class add
//   if(e.target == document.querySelectorAll('.tab-button')[0]) {
//     탭열기(0);
//   } else if(e.target == document.querySelectorAll('.tab-button')[1]) {
//     탭열기(1);
//   } else if(e.target == document.querySelectorAll('.tab-button')[2]) {
//     탭열기(2);
//   } else if(e.target == document.querySelectorAll('.tab-button')[3]) {
//     탭열기(3);
//   }
// })
// 매우 유사한 조건문 반복


// html 태그에 유저는 볼 수 없게 몰래 정보 숨기기 가능
// data-자료이름 = "값"
// document.querySelector('').dataset.자료이름
document.querySelector('.list').addEventListener('click', function(e){
  // 지금 누른 버튼에 숨겨져있는 dataset.id를 매개변수로 넘겨준다.
  // 자바스크립트 형변환
  탭열기(Number(e.target.dataset.id));
  console.log(e.target.dataset.id);
})
