// 문제 1
// constructor 문법을 사용해서 똑같은 object 3개 한번에 뽑기
// 학생1.sayHi()로 사용하면  "안녕 나는 Kim이야" 라는 글자가 나오도록 sayHi()함수 constructor 안에 추가

function Student(name, age){
  this.name = name;
  this.age = age;
  this.sayHi = function(){
    console.log(`안녕하세요 ${this.name} 입니다.`)
  }
}

var 학생1 = new Student('Kim', 20);
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
console.log(a.name)


// 문제 3
// 문제1 에서 생성한 이름 출력해주는 함수에 prototype을 추가 했는데 의도대로 동작하지 않는 이유는?
function Student1(이름, 나이){
  this.name = 이름;
  this.age = 나이;
}

Student1.prototype.sayHi = () => {
  // console.log(this)
  console.log('안녕 나는 ' + this.name + '이야');
}

var 학생1 = new Student1('Kim', 20);

학생1.sayHi();
