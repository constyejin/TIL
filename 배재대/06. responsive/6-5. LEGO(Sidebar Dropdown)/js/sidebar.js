// 변수명이 길더라도 명시적으로 적어주는 게 좋음
// HTML 문서 안에서 클래스가 gnb-icon-button Element를 가져와 달라는 코드
// HTML 요소를 영어로 Element라 부른다.
// 프로그래밍에서 등호는 같다는 의미가 아니라 오른쪽 값을 왼쪽에 넣어달라는 뜻
const sidebarMenuButton = document.querySelector('.gnb-icon-button')

const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')

// 함수 만드는 방법
// 긴 코드를 짧은 단어로 축약할 수 있는 문법 -> function(함수) 문법
function openSidebar() {
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');
}

sidebarMenuButton.addEventListener('click', openSidebar)

function closeSidebar() {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarOverlay.addEventListener('click', closeSidebar)
