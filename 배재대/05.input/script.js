let submitBtn = document.getElementById('submit-btn');
let joinForm = document.getElementById('join-form');
let idInput = document.getElementById('id');
let idAlert = document.querySelector('.id-alert');

submitBtn.addEventListener('click', function(e) {
  // keyup : 키를 떼었을 때 이벤트가 발생 | 자바스크립트 이벤트 종류
  if(idInput.value.length <= 8) {
    e.preventDefault();
    // alert('아이디를 8글자 이상 입력하세요.');
    idAlert.classList.add('active');
  } else {
    joinForm.submit();
  }
})


// 한국 표준시 (Korea Standard Time)
let kst = new Date();
let getYear = kst.getFullYear(); // 년
let getMonth = kst.getMonth() + 1; // 월
let getDate = kst.getDate(); // 일

let year = document.getElementById('year');
let month = document.getElementById('month');
let date = document.getElementById('date');

for(let i = 1900; i <= getYear; i++){
  // let option = document.createElement('option');
  // option.innerHTML = i;
  // document.getElementById('year').appendChild(option);

  let options = `<option>${i}</option>`;
  // beforebegin, afterbegin, beforeend, afterend
  // 추가하고싶은곳.insertAdjacentHTML('위치', 추가할요소);
  year.insertAdjacentHTML('beforeend', options);

  // $("#year").append("<option>"+i+"</option>");
}

for(let i = 1; i <= 12; i++){
  let option = document.createElement('option');
  option.innerHTML = i;
  month.appendChild(option);

  // $("#month").append("<option>"+i+"</option>");
}

for(let i = 1; i <= 31; i++){
  let option = document.createElement('option');
  option.innerHTML = i;
  date.appendChild(option);

  // $("#date").append("<option>"+i+"</option>");
}


let checkboxes = document.querySelectorAll('input[type="checkbox"][name="hobby"]');
let maxChecked = 5;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function() {
    let checkedCount = document.querySelectorAll('input[type="checkbox"][name="hobby"]:checked').length;

    if (checkedCount > maxChecked) {
      checkbox.checked = false; // 현재 체크박스를 체크 해제
      alert('최대 5개까지만 선택할 수 있습니다.');
    }
  });
});
