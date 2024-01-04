// 변수 타입 지정 (string, number, boolean, null, undefined, bigint, [], {} ...etc)
// Union Type : 타입 2개 이상 합찬 새로운 타입
// (string | number | boolean)
let 이름 :string | number = 'Lee';
이름 = 123

// 타입을 변수에 담아서 쓸 수 있다
// 타입명을 작성할 때는 대문자로 작성한다.
type Mytype = string | number;

function 함수(x : number) :number {
  return x * 2
}
함수(10)

// array에 쓸 수 있는 tuple type
type Member = [number, boolean];
let john : Member = [123, true]

// object에 타입 지정해야 할 속성이 너무 많으면
// 글자로 된 모든 object 속성의 타입은 : string
type Member1 = {
  [key : string] : string
}
let samanda : Member1 = { name : 'Lee'}

// class 타입 지정
class User {
  name : string;
  constructor(name : string){
    this.name = name;
  }
}

// Pro tip : Typescript는 타입을 따로 지정하지 않아도 자동으로 된다.
let song : { singer : string, song : string } = { singer : '유재하', song : '내 마음에 비친 내 모습'}

let project : {
   member : string[], 
   days : number, 
   started : boolean
  } = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }

let 회원들 : (number | string)[] = [1,'2',3];
// let 회원들 :Array<string | number> = [1,'2',3];
let 오브젝트 :{a : number | string} = { a: '123' }

// any Type: 모든 자료형 허용
// 타입실드 해제문법으로 타입관련 버그가 나도 캐치하지 못한다.
let 아무거나 :any;
아무거나 = 123;;
아무거나 = '히히';

// unknown Type
// any랑 비슷하지만 더 안전한 타입
let 아무거나2 :unknown;
아무거나2 = 456;
아무거나2 = [1,2,3];

let 변수1 :string = 아무거나;

// Typescript는 간단한 수학연산도 타입이 맞아야한다.
// string Type + 1 (허용)
// number Type + 1 (허용)
// string | number Type + 1 (허용X) 

let user :string = 'Lee';
let age :number | undefined = undefined;
let married :boolean = false;
let 철수 :(string|number|undefined|boolean)[] = [user, age, married];

let 학교 :{
  score : (number | boolean)[],
  teacher : string,
  friend : string | string[]
} = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}

학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher];

// 함수는 parameter, return 값 지정 가능하다.

function 함수1(x :number) :number{
  return x * 2
}

// 함수에서 void Type 활용가능
// return 쓰기 싫은 함수에 사용한다. 실수로 return하는 것을 사전에 막아준다.
// parameter가 option일 경우 변수? : type
// ? 연산자는 값이 들어올 수도 있다 == undefined가 포함된 union Type
// :number | undefined
function 함수2(x? :number) :void {
  1 * 2
}

함수2()
// Javascript와 다른 점
// 1. 타입 지정된 파라미터 필수

function task1(name? :string) {
  if(name) {
    console.log('안녕하세요' + name);
  } else {
    console.log('이름이 없습니다.')
  }
}

// task1();
// task1('이예진');

function task2(num :number | string) {
  // 숫자를 문자로 바꾼 후 해당 문자열의 길이를 얻는다.
  console.log(num.toString().length)
}

// task2(123)
// task2('123456789')

function task3(income :number, home :boolean, charm :string) :string | void {
  let total :number = 0;

  if(income) {
    income = income / 10000;
    if(income >= 1) {
      total = income
    }
  }
  
  if(home == true) {
    total = total + 500;
  } 
  
  if(charm == '상') {
    total = total + 100;
  }
  
  if(total >= 600) {
    return '결혼 가능'
  }
}

console.log(task3(300000, true, '상'));
console.log(task3(3000, false, '하'));
// function 함수3(x :number | string) :void {
//   if() {
//     console.log(x + 3)
//   }
// }

