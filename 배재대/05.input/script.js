let joinForm = document.getElementById('join-form');
let submitBtn = document.getElementById('submit-btn');

let idInput = document.getElementById('id');
let idBox = document.getElementById('id-box');
let idWarn = document.getElementById('id-warn');

let pwInput = document.getElementById('pw');
let pwWarn = document.getElementById('pw-warn');

let pwChkInput = document.getElementById('pwchk');
let pwChkWarn = document.getElementById('pwchk-warn');

// 복합 대입 연산자
let idVeri = pwVeri = pwChkVeri = false;

// keyup : 키보드 눌렀다 놓을 때 발생
// focusout 
idInput.addEventListener('focusout', function() {
    if(idInput.value.length <= 8) {
      idWarn.innerHTML = `<span class="txt-red">아이디를 8글자 이상 입력하세요.</span>`;
    } else {
      idWarn.innerHTML = `<span class="txt-green">멋진 아이디네요!</span>`;
      idVeri = true;
    }
})

pwInput.addEventListener('focusout', function() {
  let pwExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  // test => 문자열과 정규 표현식 일치 여부를 Boolean으로 반환하는 메서드 (false(0), true(1))
  if(!pwExp.test(pwInput.value)) {
    pwWarn.innerHTML = `<span class="txt-red">8~16자 영문 대 소문자, 숫자를 사용하세요.</span>`;
  } else {
     pwWarn.innerHTML = '';
     pwVeri = true;
  }
})

pwChkInput.addEventListener('focusout', function() {
  if(pwInput.value == pwChkInput.value) {
    pwChkWarn.innerHTML = '';
    pwChkVeri = true;
  } else {
    pwChkWarn.innerHTML = `<span class="txt-red">비밀번호가 일치하지 않습니다.</span>`;
  }
})


// 한국 표준시 (Korea Standard Time)
let kst = new Date();
let getYear = kst.getFullYear(); // 년
// Date 객체에서 getMonth() 메서드를 호출하면 반환되는 값은 0부터 시작한다. 
// 즉, 1월은 0, 2월은 1, 실제 month를 얻으려면 getMonth()의 반환값에 1을 더해야 한다.
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

// 요소의 값을 변경할 때 발생
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function() {
    let checkedCount = document.querySelectorAll('input[type="checkbox"][name="hobby"]:checked').length;

    if (checkedCount > maxChecked) {
      checkbox.checked = false; // 현재 체크박스를 체크 해제
      alert('최대 5개까지만 선택할 수 있습니다.');
    }
  });
});


joinForm.addEventListener('click', function(e) {
  if(idVeri && pwVeri && pwChkVeri) {
    joinForm.submit();
  } else {
    // 기본 동작인 폼 제출 방지
    e.preventDefault();
    alert('빈 칸을 입력하세요.');

    // //  focusout 이벤트 강제 발생
    // document.querySelectorAll('input').forEach(function(input){
    //   input.dispatchEvent(new Event("focusout"));
    // })
  }
})
