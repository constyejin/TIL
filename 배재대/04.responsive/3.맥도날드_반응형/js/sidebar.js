// 변수 선언 : var, let, const 
// 변수명이 길더라도 명시적으로 적어주는 게 좋음
const gnbIconBtn = document.querySelector('.gnb-icon-button');

const sidebar = document.querySelector('.sidebar');
// 자바스크립트가 처음이기 때문에 하나하나 이해하려고 하지말고 
// 저런 식으로 작성을 하는구나 정도만 느껴도 충분함 
const sidebarOverlay = document.querySelector('.overlay');

// 어떤 실수를 할지 모르기 때문에 항상 작성 하고나서 내 의도대로 됐는지 확인 해보는 게 좋음 ->  로그 찍어보기
console.log(gnbIconBtn, sidebar, sidebarOverlay);


function openSidebar() {
  // 우리가 하고 싶은 내용 = 사이드바, 오버레이가 보이게 하려면 
  // is-active라는 클래스를 가지고 있으면 됨
  
  // DOM 메소드를 이용해서 쉽게 클래스를 추가 및 제거 할 수 있다
  // 현재 웹 브라우저에서 DOM을 조작하는 언어는 자바스크립트 뿐 
  // DOM이란 자바스크립트 같은 스크립팅 언어가 우리가 만들어 놓은 웹 페이지에 접근해서 그 요소를 쉽게 조작할 수 있게 도와주는 역할을 한다.
  // DOM의 데이터 타입 (프로퍼티, 메소드, 이벤트 리스너, 스타일 등) 

  // 그걸 도와주는 친구가 classList
  // class 탈부착 식으로 코드를 작성해야 확장성이 좋다.
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');

  // 어떤 요소의 class를 쉽게 제어할 수 있음
  // querySelector에서는 선택자니까 css의 선택자로 클래스를 표현할 때는 
  // 앞에 점을 찍어줘야하기 때문에 여기서는 점을 찍어 줘야함. 
  // BUT classList에서는 선택자처럼 점을 찍지 않고 추가하고 싶은 
  // class 이름만 넣어주면 됨!
}

// 내가 sidebarMenuButton에게 클릭 이벤트를 추가할건데, 걔를 클릭 했을 때 openSidebar 함수를 실행 시켜줘
gnbIconBtn.addEventListener('click', openSidebar);


// 콜백함수 : 함수를 활용하는 하나의 방식
// 변수의 유효범위(scope), 동기 / 비동기처리
// 코드가 작성된 순서대로 동작(가독성이, 재사용성이 좋다)
// 결과는 같지만, 함수를 호출하는 시점이나 동작하는 순서가 달라진다.
// gnbIconBtn.addEventListener('click', function() {
//   sidebar.classList.add('is-active');
//   sidebarOverlay.classList.add('is-active');
// })


function closeSidebar() {
  // is-actvie 제거
  sidebar.classList.remove('is-active');
  sidebarOverlay.classList.remove('is-active');
}

sidebarOverlay.addEventListener('click', closeSidebar);


// sidebarOverlay.addEventListener('click', function() {
//   sidebar.classList.remove('is-active');
//   sidebarOverlay.classList.remove('is-active');
// })
