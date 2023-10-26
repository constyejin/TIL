$('.buy').click(function(e){
  let title = $(e.target).siblings('h3').html();
  
  // 만약 로컬 스토리지에 이미 cart라는 값이 있다면 
  if(localStorage.getItem('cart') != null) {
    // localStorage에 있는 array 꺼내서 자료 추가하고 다시 넣기.
    let getCart = JSON.parse(localStorage.cart);
    getCart.push(title);
    localStorage.setItem('cart', JSON.stringify(getCart))
  } else {
    localStorage.setItem('cart', JSON.stringify([title]));
  }
})



