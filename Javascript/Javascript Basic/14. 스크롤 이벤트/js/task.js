// progress-bar (프로그래스 바)
// 페이지를 얼만큼 읽었는지 표시해주는 UI 바
// 스크롤 전체 높이, 현재 스크롤한 값
// 스크롤을 1% 내리면 박스 길이도 1%
window.addEventListener('scroll', function(){
  let scrollTop = document.querySelector('html').scrollTop; // 0 ~ 1760
  let clientHeight = document.querySelector('html').clientHeight; // 1540px
  let scrollHeight = document.querySelector('html').scrollHeight;  // 3300px
  // console.log('스크롤 양 :',  scrollTop)
  // console.log('화면 높이 :',  clientHeight)
  // console.log('스크롤 높이:',  scrollHeight)

  // 백분율 환산
  // (구하려는 백분율을 나타내는 수 / 전체의 수) * 100
  let progress = ((scrollTop / (scrollHeight - clientHeight)) * 100);
  console.log(progress)
  document.querySelector('.line').style.width = progress + '%';
});
