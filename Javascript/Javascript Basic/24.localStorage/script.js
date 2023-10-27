let boxList = document.querySelector('.box-list');
let products = [
  {id : 0, price : 70000, title : 'Clossom Dress'},
  {id : 1, price : 50000, title : 'Springfield Shirt'},
  {id : 2, price : 60000, title : 'Black Monastery'}
]

products.forEach(function(a) {
  let product = `
    <div class="box-item">
      <h3>${a.title}</h3>
      <p>${a.price}</p>
      <button class="buy">구매</button>
    </div>`;

  boxList.insertAdjacentHTML('beforeend', product);
})

// 브라우저 안에 몰래 데이터 저장가능
// localStorage, seccionStorate => key : value 형태로 저장 (용량은 5B 문자, 숫자만 가능)
// localStorage => 사이트 재접속해도 유지(반영구적)
// seccionStorate => 사이트 나가면 자동 삭제(휘발성)

// indexedDB => 구조화된 대용량 데이터 저장
// Cookies => 유저 인증 정보, 보통 로그인 정보 저장
// Chche Storage => html, css, js파일 저장


// 구매버튼 누르면 localStorage에 데이터를 저장해보자.
// 저장 => localStorate.setItem('이름', 값)
// 출력 => localStorate.getItem('이름', 값)
// 삭제 => localStorate.removeITem('이름', 값)

localStorage.setItem('name', 'YEJIN');

// localStorage에 array/object 저장하려면 => JSON으로 바꾸면 저장가능
let arr = [1,2,3,4,5];
let newArr = JSON.stringify(arr);

localStorage.setItem('num', newArr);
let getItme = localStorage.getItem('num');

console.log(JSON.parse(getItme)[0]);

// array/object -> JSON : JSON.stringfy()
// JSON -> array/object : JOSN.parse()


// *** localStorate 데이터 수정 방법
// 1. 자료 꺼냄
// 2. 꺼낸거 수정
// 3. 다시 setItem으로 값 저장

// 1. 구매버튼 클릭하면 누른 상품명 localStorage에 저장하기.
// Tip1. sibling(형제요소) 찾는 방법
// Tip2. localStorage가 비어있을 때 / 뭐가 있을 때 저장방식
// 구매 버튼 클릭 했을 때
// - cart 항목 없으면 array 추가
// - cart 항목 있으면 array 수정
let buyBtn = document.querySelectorAll('.buy');

buyBtn.forEach(function(item) {
  item.addEventListener('click', function() {
    let title = item.previousElementSibling.previousElementSibling.innerHTML;
    
    if(localStorage.getItem('title') === null) {
      localStorage.setItem('title', JSON.stringify([title]));
    } else {
      let getTItle = JSON.parse(localStorage.title);
      getTItle.push(title);
      localStorage.setItem('title', JSON.stringify(getTItle))
    }
  })
})

// localStorage.removeItem('title');

// 2. cart.html 방문시 localStorage에 저장된 상품명들 다 보여주기


// (응용1) array 안 중복제거
// (응용2) 상품 수량 저장 [{상품명 : 'title', 수량 : 1}, {}...]
