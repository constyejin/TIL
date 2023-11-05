// Constructor 문법
// 비슷한 Object 여러개 만들 때 사용

// 예시 : 학생 출석부
// var stu1 = { 
//   name : 'Kim', 
//   age : 16,
//   sayHi : function(){
//     console.log('안녕하세요 ' + this.name + ' 입니다.')
//   }
// } ;
// stu1.sayHi();

// Constructor 생성시 관습적으로 앞글자 대문자로 작성 (일반함수와 차이를 두기 위해)
function Student(name, age){
  // Student : object 생성기계 (constructor, 생성자)
  // this : 새로 생성되는 object (instance)
  this.name = name;
  this.age = age;
  this.sayHi = function(){
    console.log('안녕하세요 ' + this.name + ' 입니다.')
  }
}

// 상속을 구현할 수 있는 또 하나의 문법 prototype
// prototype은 유전자(원형)
// constructor를 만들면 prototype이라는 공간이 자동으로 생긴다.
// prototype에 값을 추가하면 모든 자식들이 물려받기 가능

// prototype의 동작원리
// stu1.gender을 출력 했을 때, stu1이 직접 gender라는 값을 가지고 있는지 검색
// 없다면 stu1의 부모(Student.prototype) 유전자가 gender를 가지고 있는지 검색

// 내장함수는 어떻게 동작하는가? 
// 부모(Student.prototype)에 없으면 계속 부모를 타고 가면서 찾는다. 

// 컴퓨터가 array를 만드는 방식 
// var arr = [1,2,3]
// var arr = new Array(1,2,3);

console.log(Array.prototype)

// 컴퓨터가 object를 만드는 방식
// var obj = {name : 'yejin'}
// var obj = new Object();
Student.prototype.gender = '남';


var stu1 = new Student('Yejin', 16);
var stu2 = new Student('Sol', 16);
// stu1.sayHi();
// stu2.sayHi();

stu1.toString();
console.log(stu1.gender);


// prototype은 함수에만 생성된다.
// 부모 prototype을 검사하고 싶다면 __proto__
console.log(stu1.__proto__);


// __proto__ 를 이용해 부모 강제 등록하기
var parents = {name : 'Kim'};
var children = {};
children.__proto__ = parents;
console.log(children.name)
