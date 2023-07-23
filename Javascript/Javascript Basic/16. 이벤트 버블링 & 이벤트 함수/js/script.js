document.getElementById('open-btn').addEventListener('click', function () {
  document.querySelector('.black-bg').classList.add('is-open');
})

document.getElementById('close').addEventListener('click', function () {
  document.querySelector('.black-bg').classList.remove('is-open');
})

// .black-bg 클릭시 is-open 클래스 remove
document.querySelector('.black-bg').addEventListener('click', function(e){
    // e.target; // 유저가 실제로 누른 것 
    // // console.log(e.target);
    // e.currentTarget(); // 이벤트리스터 달린 곳 (this)
    // e.preventDefault(); // 이벤트 기본동작을 막아준다.
    // e.stopPropagation(); // 이벤트 버블링 되는 것을 막아준다.
    
    // 내가 실제로 클릭한게 black-bg일 때 black-bg 닫기
    if(e.target == document.querySelector('.black-bg')) {
      document.querySelector('.black-bg').classList.remove('is-open');
    }
})


// 모든 브라우저는 이벤트 버블링이 일어남
// 이벤트 버블링 : 이벤트가 상위 html로 퍼지는 현상
// 브라우저는 바보가 아니기 때문에 유저가 맨 처음에 클릭한 요소가 무엇인지 알고있다.

// 유용한 이벤트관련 함수들
// 이벤트 버블링을 막을 수 있는 함수
