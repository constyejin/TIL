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

