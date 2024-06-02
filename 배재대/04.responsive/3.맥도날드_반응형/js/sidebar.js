// 변수 선언 : var, let, const 
// 변수명이 길더라도 명시적으로 적어주는 게 좋음

// 콜백함수 : 함수를 활용하는 하나의 방식
// 변수의 유효범위(scope), 동기 / 비동기처리
// 코드가 작성된 순서대로 동작(가독성이, 재사용성이 좋다)
// 결과는 같지만, 함수를 호출하는 시점이나 동작하는 순서가 달라진다.


const sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
const sidebar = document.querySelector('.sidebar');

let search = document.querySelector('.search');
let searchOpenBtn = document.querySelector('.search-open-btn');
let searchCloseBtn = document.querySelector('.search-close-btn');

const overlay = document.querySelector('.overlay');


function openSidebar() {
  sidebar.classList.add('active');
  overlay.classList.add('active');
}

sidebarOpenBtn.addEventListener('click', openSidebar);


function closeSidebar() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener('click', closeSidebar);


// search
function openSearch() {
  search.classList.add('active');
}

searchOpenBtn.addEventListener('click', openSearch);

function closeSearch() {
  search.classList.remove('active');
}

searchCloseBtn.addEventListener('click', closeSearch);


// Parameter
// function open(ele) {
//   ele.classList.add('active');
//   overlay.classList.add('active');
// }

// function close(ele) {
//   ele.classList.remove('active');
//   overlay.classList.remove('active');
// }

// sidebarOpenBtn.addEventListener('click', () => {open(sidebar)});
// overlay.addEventListener('click', () => {close(sidebar)});

// searchOpenBtn.addEventListener('click', () => {open(search)});
// searchCloseBtn.addEventListener('click', () => {close(search)});

