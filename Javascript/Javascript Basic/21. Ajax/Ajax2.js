let products = [
  { id : 0, title : '신발1', price : 50000},
  { id : 1, title : '신발2', price : 60000},
  { id : 2, title : '신발3', price : 70000}
]

products.forEach(function(item){
  let product = `
    <div class="box-item">
      <h3>${item.title}</h3>
      <p>${item.price}</p>
    </div>
  `
  document.querySelector('.box-list').insertAdjacentHTML('beforeend', product);
})
