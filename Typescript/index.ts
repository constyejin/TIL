// 변수 타입 지정 (string, number, boolean, null, undefined, bigint, [], {} ...etc)
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
