// 문제 1
// constructor 문법을 사용해서 똑같은 object 3개 한번에 뽑기
// 학생1.sayHi()로 사용하면  "안녕 나는 Kim이야" 라는 글자가 나오도록 sayHi()함수 constructor 안에 추가
// function Student(name, age){
//   // this : Student {}
//   // console.log(this)
//   this.name = name; // 매개변수 name으로 전달받은 값 this.name(key) = name(value)
//   this.age = age;  // 매개변수 age로 전달받은 값 this.age(key) = age(value)
//   this.sayHi = function(){
//     console.log(`안녕하세요 ${this.name} 입니다.`)
//   }
// }

// // new Object()
// var 학생1 = new Student('Kim', 20); // name과 age 매개변수로 값 전달
// var 학생2 = new Student('Park', 21);
// var 학생3 = new Student('Lee', 30);

// 학생1.sayHi();
// 학생2.sayHi();
// 학생3.sayHi();


// 문제 2
// 다음 코드의 출력값은?
// function Parent(){
//   this.name = 'Kim';
// }

// var a = new Parent();

// // 부모 prototype에 {name : 'Park'}을 추가하라는 뜻
// a.__proto__.name = 'Park';
// // 내가 직접 가지고 있는 {name : 'Kim'} 우선 출력
// console.log(a.name)


// 문제 3
// 문제1 에서 생성한 이름 출력해주는 함수에 prototype을 추가 했는데 의도대로 동작하지 않는 이유는?
// function Student1(이름, 나이){
//   this.name = 이름;
//   this.age = 나이;
// }

// 문제 : Arrow funciton ()=> {} -> function(){}
// 함수 내부에 있는 this값을 사용해야 하는데 Arrow function은 this는 바깥에 있는 값을 그대로 사용한다.
// 함수 안에서 this값은 매번 재정의 된다. (object안 함수 안에 있는 this는 함수를 부른 object)
// 즉 Student라는 object안 sayHi 함수의 this => Student Object
// // sayHi() 함수를 prototype에 추가 Student1(parents), sayHi(children)
// Student1.prototype.sayHi = function(){
//   console.log(this)
//   console.log('안녕 나는 ' + this.name + '이야');
// }

// var 학생1 = new Student1('Kim', 20);
// 학생1.sayHi();


// 문제 4
// 모든 Array에 적용할 수 있는 함수 생성
// var arr = new Array(1,2,3); => [1,2,3]
// Array prototype에 remove3 함수 추가
Array.prototype.remove3 = function(num){
  // console.log(this);
  // for(var i = 0; i < this.length; i++) {
  //   if(this[i] == num) {
  //     this.splice(i, 1);
  //   }
  // }

  // forEach(배열 반복값, 배열 인덱스)
  this.forEach((element, index) => {
    // console.log(this)
    // 반복하고 있는 배열 값이 num이라는 매개변수 값과 같을 때
    if(element == num) {
      // function(){} 사용시 새로운 함수가 생성되면서 this가 window가 되므로
      // Arrow function을 사용해서 바깥 함수 this 값을 받는다.
      // 해당 아이템에 해당하는 인덱스를 하나 제거한다.
      this.splice(index, 1);
    }
  })
}

var arr = [1,2,3,4];
// var abc = ['a','b',3,4];

// Array라는 부모의 prototype에 있는 자식 함수를 자유롭게 사용 가능
arr.remove3(3);
console.log(arr);
