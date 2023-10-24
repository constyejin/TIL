let products = [
  {id : 0, price : 70000, title : 'Clossom Dress'},
  {id : 1, price : 50000, title : 'Springfield Shirt'},
  {id : 2, price : 60000, title : 'Black Monastery'}
]

let boxList = document.querySelector('.box-list');

products.forEach(function(a, i){
  let product = `
  <div class="box-item">
    <h3>${products[i].title}</h3>
    <p>${products[i].price}</p>
  </div>
  `;

  let boxList = document.querySelector('.box-list');
  boxList.insertAdjacentHTML('beforeend', product);
})

let priceBtn = document.getElementById('price-btn');

priceBtn.addEventListener('click', function(){
  products.sort((a, b) => {
    return a.price - b.price;
  })
  console.log(products);

  boxList.innerHTML = '';

  products.forEach(function(a){
    let product = `
    <div class="box-item">
      <h3>${a.title}</h3>
      <p>${a.price}</p>
    </div>
    `;

    boxList.insertAdjacentHTML('beforeend', product);
  })
})


let array = [3, 4, 6, 1, 10, 59];
// 문자 정렬 => array.sort()
array.sort();
console.log(array)

// 숫자 오름차순 정렬
// 동작 원리
// 1. a,b는 array안의 자료
// 2. return 오른쪽이 양수면 a를 오른쪽으로
// 3. return 오른쪽이 음수면 b를 오른쪽으로
array.sort(function(a, b,) {
  return a - b
})
console.log(array)

// 숫자 내림차순 정렬
array.sort(function(a, b,) {
  return b - a
})
console.log(array)

// 문자 오름차순, 내림차순 정렬
let array2 = ['d', 'a', 'b', 'c'];

console.log(array2.sort())

array2.sort(function(a,b) {
  if(a < b) return 1; 
  if(a > b) return -1;
  if(a === b) return 0;
})

console.log(array2)


// .filter()
// .filter() 결과는 변수에 저장해서 써야한다.
// .sort()는 원본 변형 O / .filter()는 원본 변형 X
let newArray = array.filter(function(a) {
  return a > 4
})

console.log(newArray);


// .map() => array 자료 전부 변형
// 달러표시 상품 가격인데 전부 원화로 변경할 때 등 활용
let mapArray = array.map(function(a) {
  return a * 4;
})
console.log(mapArray)


// 1. 상품명 다나가순 정렬 버튼과 기능
let titleBtn = document.getElementById('title-btn');

titleBtn.addEventListener('click', function() {
  products.sort((a,b) => {
    if(a.title < b.title) return 1;
    if(a.title > b.title) return -1;
    if(a.title === b.title) return 0;
  })

  document.querySelector('.box-list').innerHTML = '';

  products.forEach(function(a){
    let product = `
    <div class="box-item">
      <h3>${a.title}</h3>
      <p>${a.price}</p>
    </div>
    `;

    boxList.insertAdjacentHTML('beforeend', product);
  })
})

// 2. 6만원 이하 상품만 보기 버튼과 기능
let belowBtn = document.getElementById('below-btn');

belowBtn.addEventListener('click', function() {
  let belowSort = products.filter(function(a) {
    return a.price <= 60000
  })

  boxList.innerHTML = '';

  belowSort.forEach(function(a) {
    let product = `
      <div class="box-item">
        <h3>${a.title}</h3>
        <p>${a.price}</p>
      </div>
      `;

    boxList.insertAdjacentHTML('beforeend', product);
  })
})
