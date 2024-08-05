// Arrow Function return값이 하나일 경우 중괄호랑 같이 생략 가능.
const solution = (num1, num2) => Math.trunc((num1 / num2) * 1000);

console.log(solution(3, 2)) // 1500
console.log(solution(7, 3)) // 2333
console.log(solution(1, 16)) // 62

// Math.floor()는 소수점을 내림하므로 음수인 경우를 생각해서 소수점 이하를 없애고 싶을 때는 Math.trunc()를 사용하는 게 좋다.
