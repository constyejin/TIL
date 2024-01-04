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

