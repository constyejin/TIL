// sidebar-drawer menu의 활성화 상태 toggle

// const : 재할당 X, 재선언 X, 범위 {중괄호} (변하면 안되는 값을 보관할 때 사용 : 상수)
// querySelectorAll 함수를 사용해서 해당 css선택자 요소를 모두 선택
// 그 선택된 값들은 drawerMenuButtonList 라는 상수 (<-> 변수)에 저장
const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-button');
console.log(drawerMenuButtonList)

function toggleDrawerMenu() {
  // this는 클릭 이벤트가 발생한 요소를 가르킨다.
  // parentNode 속성으로 클릭된 요소의 부모 요소를 찾는다.
  const drawerMenu = this.parentNode;
  // 클래스가 이미 존재하는 경우 제거하고, 없는 경우 추가

  // drawer menu open
  drawerMenu.classList.toggle('is-open');
  // 선택된 메뉴 아이콘 컬러 변경
  drawerMenu.classList.toggle('is-active');
}

// forEach를 사용하여 drawerMenuButtonList 배열의 각 요소에 대해 반복한다.
// 각 요소는 button 매개변수로 전달된다.
drawerMenuButtonList.forEach(function (button) {
  // 매개변수로 받은 각 button 요소에 click 이벤트 리스너 추가
  // 클릭 이벤트가 발생하면 toggleDrawerMenu 함수가 실행된다.
  // 사용자가 클릭한 버튼의 부모 요소인 drawer-menu의 활성화 상태가 토글된다.
  button.addEventListener('click', toggleDrawerMenu);
})
