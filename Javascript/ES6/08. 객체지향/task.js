// 문제 1
// constructor 문법을 사용해서 똑같은 object 3개 한번에 뽑기
// 학생1.sayHi()로 사용하면  "안녕 나는 Kim이야" 라는 글자가 나오도록 sayHi()함수 constructor 안에 추가
function Student(name, age){
  // this : Student {}
  // console.log(this)
  this.name = name; // 매개변수 name으로 전달받은 값 this.name(key) = name(value)
  this.age = age;  // 매개변수 age로 전달받은 값 this.age(key) = age(value)
  this.sayHi = function(){
    console.log(`안녕하세요 ${this.name} 입니다.`)
  }
}

// new Object()
var 학생1 = new Student('Kim', 20); // name과 age 매개변수로 값 전달
var 학생2 = new Student('Park', 21);
var 학생3 = new Student('Lee', 30);

학생1.sayHi();
학생2.sayHi();
학생3.sayHi();


// 문제 2
// 다음 코드의 출력값은?
function Parent(){
  this.name = 'Kim';
}

var a = new Parent();

// 부모 prototype에 {name : 'Park'}을 추가하라는 뜻
a.__proto__.name = 'Park';
// 내가 직접 가지고 있는 {name : 'Kim'} 우선 출력
console.log(a.name)


// 문제 3
// 문제1 에서 생성한 이름 출력해주는 함수에 prototype을 추가 했는데 의도대로 동작하지 않는 이유는?
// function Student1(이름, 나이){
//   this.name = 이름;
//   this.age = 나이;
// }

// Student1.prototype.sayHi = () => {
//   // console.log(this)
//   console.log('안녕 나는 ' + this.name + '이야');
// }

// var 학생1 = new Student1('Kim', 20);

// 학생1.sayHi();


// 문제 4
// 모든 Array에 적용할 수 있는 함수 생성

// Array.prototype.remove3 = function(){
//   console.log(this)
//   for(var i = 0; i < this.length; i++) {
//     if(this[i] == 3) {
//       this.splice(i, 1);
//     }
//   }
// }

// var arr = [1,2,3,4];

// arr.remove3();
// console.log(arr);
