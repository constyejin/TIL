
let products = [
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/856b44ab-0c1f-4001-9f89-f95e699470d0/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%EB%A0%88%ED%8A%B8%EB%A1%9C-se-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-uKAFYXN0.png",
    title: "나이키 에어포스 1'07",
    price: "139,000 원",
    size: ["230", "235", "240", "245"]
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/%EB%8D%A9%ED%81%AC-%ED%95%98%EC%9D%B4-%EB%A0%88%ED%8A%B8%EB%A1%9C-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-I6zTsA39.png",
    title: "나이키 덩크 하이 레트로",
    price: "111,200 원",
    size: ["240", "245", "250", "255", "260"]
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a7afed0-26c4-415c-b0f4-12ca39dc0e80/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-se-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-VgWtJv2o.png",
    title: "나이키 덩크 로우 SE",
    price: "139,000 원",
    size: ["220", "225", "230", "235", "240"]
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0566793f-2863-4983-b548-ad0013058b2c/%ED%8F%B0%ED%83%84%EC%B9%B4-%EC%99%80%ED%94%8C-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-HAwnuJaa.png",
    title: "나이키 폰탄카 와플",
    price: "107,100 원",
    size: ["230", "235", "240", "245", "250", "255"]
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c6173290-549a-447d-becb-055304588276/acg-gore-tex-%EB%A7%88%EC%9A%B4%ED%8B%B4-%ED%94%8C%EB%9D%BC%EC%9D%B4-%EC%8B%A0%EB%B0%9C-pFDBKAPB.png",
    title: "나이키 ACG GORE-TEX '마운틴 플라이'",
    price: "259,000 원",
    size: ["250", "255", "260", "265", "270", "275", "280"]
  },
  {
    img :
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2c4fa3b6-e3a2-46e5-ad25-a110bc16f050/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-oGARb7T8.png",
    title : "나이키 에어 포스 1 '07 LV8",
    price : "149,000 원",
    size : ["240", "245", "250", "255", "260", "265", "270"]
  },
]

// 박스 하나 생성
// document.querySelector('.sho-img').src = products[0].img;
// document.querySelector('.sho-title').innerHTML = products[0].title;
// document.querySelector('.sho-price').innerHTML = products[0].price;
// document.querySelector('.sho-size').innerHTML = products[0].size;


// forEach로 생성
// let boxItems = document.querySelectorAll('.box-item');
// // console.log(boxItems)

// boxItems.forEach(function(item, index){
//   item.querySelector('img').src = products[index].img;
//   item.querySelector('h2').innerHTML = products[index].title;
//   item.querySelectorAll('p')[0].innerHTML = products[index].price;
//   item.querySelectorAll('p')[1].innerHTML = products[index].size;
// })


// products length 만큼 html 요소 생성
// let boxList = document.querySelector(".box-list");

// products.forEach(function (item) {
//   let boxItem = document.createElement("div");
//   boxItem.classList.add("box-item");

//   boxList.appendChild(boxItem);

//   let boxImg = document.createElement("img");
//   boxImg.src = item.img;
//   boxImg.alt = item.title;
//   boxItem.appendChild(boxImg);

//   let shoInfo = document.createElement('div');
//   shoInfo.classList.add('sho-info');
//   boxItem.appendChild(shoInfo);

//   let boxTitle = document.createElement("h2");
//   boxTitle.innerHTML = item.title;
//   shoInfo.appendChild(boxTitle);

//   let boxPrice = document.createElement("p");
//   boxPrice.innerHTML = item.price;
//   shoInfo.appendChild(boxPrice);

//   let boxSize = document.createElement("p");
//   boxSize.textContent = item.size;
//   shoInfo.appendChild(boxSize);
// });


// products.forEach(function(item){
//   let boxItem = '<div class="box-item"></div>';
//   document.querySelector('.box-list').insertAdjacentHTML('beforeend', boxItem);

//   let boxImg = `<img src="${item.img}" alt="${item.title}">`;
//   document.querySelector('.box-item').insertAdjacentHTML('beforeend', boxImg);
// })


products.forEach(function(item, index) {
  let boxItem = '<div class="box-item"></div>';
  document.querySelector('.box-list').insertAdjacentHTML('beforeend', boxItem);

  let boxImg = `<img src="${item.img}" alt="${item.title}">`;
  document.querySelectorAll('.box-item')[index].insertAdjacentHTML('beforeend', boxImg);

  let boxInfo = `<div class="sho-info"></div>`;
  document.querySelectorAll('.box-item')[index].insertAdjacentHTML('beforeend', boxInfo);

  let boxTitle = `<h2>${item.title}</h2>`;
  document.querySelectorAll('.sho-info')[index].insertAdjacentHTML('beforeend', boxTitle);

  let boxPrice = `<p>${item.price}</p>`;
  document.querySelectorAll('.sho-info')[index].insertAdjacentHTML('beforeend', boxPrice);

  let boxSize = `<p>${item.size}</p>`;
  document.querySelectorAll('.sho-info')[index].insertAdjacentHTML('beforeend', boxSize);
});
