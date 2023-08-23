let products = [
  { id : 0, title : '신발1', price : 50000},
  { id : 1, title : '신발2', price : 60000},
  { id : 2, title : '신발3', price : 70000}
]

// products.forEach(function(item){
//   let product = `
//     <div class="box-item">
//       <h3>${item.title}</h3>
//       <p>${item.price}</p>
//     </div>
//   `
//   document.querySelector('.box-list').insertAdjacentHTML('beforeend', product);
// })

// jQuery로 구현
products.forEach(function(item){
  let product = `
    <div class="box-item">
      <h3>${item.title}</h3>
      <p>${item.price}</p>
    </div>
  `
  $('.box-list').append(product);
})


// 더보기 버튼 클릭시 GET 요청해서 데이터 받아오기
// 받아온 데이터 수에 맞게 html 요소 생성
$('.more-btn').on('click', function(){
  $.get('https://codingapple1.github.io/js/more1.json').done(function(data){
    data.forEach(function(item){
      // console.log(data)
      let product = `
        <div class="box-item">
          <h3>${item.title}</h3>
          <p>${item.price}</p>
        </div>
      `
    $('.box-list').append(product);
    })
  })


  // more-btn 두 번 클리시 7,8,9 번째 상품 가져오기
  // 상품 가져온 다음 more-btn 안 보이게 
})

// 유사한 코드 function으로 축약하기
// 함수화 할 때 변수를 파라미터로 변경
