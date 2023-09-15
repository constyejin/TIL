// ES6 문법은 아니지만, 리액트에서 많이 사용하는 삼항 연산자
let person = {
  name : 'yejin',
  age : 15
}

// 조건문
// person이라는게 존재 한다면 person.name, 없다면 '없다' (if ~ else)
if(person) {
  console.log(person.name)
} else {
  console.log('없다')
}

// 삼항 연산자
// 조건 ? 참일 때 실행할 코드 : 거짓일 때
console.log(person ? person.name : '없다')

// 1 (if~else & 삼항연산자)
// age가 18살 이상이라면 '성인 입니다' 아니라면, '미성년자 입니다'
// if~else
if(person.age >= 18) {
  console.log('성인 입니다.')
} else {
  console.log('미성년자 입니다.')
}
// 삼항 연산자
console.log(person.age >= 18 ? '성인 입니다.' : '미성년자 입니다.')

// 2
// 아무 배열이나 만들고, 그 배열의 길이가 5이상일 경우 '길다' 아니라면 '짧다'
let colors = ['red', 'blue', 'green', 'white']

if(colors.length >= 5) {
  result1 = '길다'
} else {
  result1 = '짧다'
}
console.log(result1)

let result2 = colors.length >= 5 ? '길다' : '짧다'
console.log(result2)

// 3
// age가 65세 이상일 경우 '노인 입니다', 18세 이상 '성인 입니다' 
// 그 이하일 경우 '미성년자 입니다'
// 삼항 연산자 다중 조건
if(person.age >= 65) {
  console.log('노인 입니다')
} else if(person.age >= 18) {
  console.log('성인 입니다')
} else {
  console.log('미성년자 입니다')
}

// 삼항 연산자로 다중 조건을 작성할 경우엔 조건을 소괄호로 묶어준다.
console.log((person.age >= 65) ? '노인 입니다' : (person.age >= 18) ? '성인 입니다' : '미성년자 입니다')

// 4
// 삼항 연산자 다중 조건
// num1 num2보다 큰 경우, 'num1 > num2'
// num2 num3보다 큰 경우, 'num2 > num3'
// num3이 제일 큰 경우, '숫자가 같거나 num3이 가장 크다.'
let num1 = 1;
let num2 = 2;
let num3 = 3;

let result3 = (num1 > num2) ? "num1 > num2" : (num2 > num3) ? "num2 > num3" : "숫자가 같거나 num3이 가장 크다."
console.log(result3)

// 삼항 연산자 논리 계산(true, false)
// person이 있다면 person.name /  없다면 '이름이 없다'
console.log(person.name ? "이름" + person.name : "이름이 없다")
console.log(person.name == ''? "이름이 없다" : "이름" + person.name)
