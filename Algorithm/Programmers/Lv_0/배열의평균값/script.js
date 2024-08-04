// 내 코드
const arr = [12, 5, 7, 32, 10];

function solution(numbers) {
  let answer = numbers.reduce((a, b) => a + b) / numbers.length;
  return answer;
}
console.log(solution(arr))


// *** .reduce() 

// const solution = (numners) => numners.reduce((acc, cur) => acc + cur) / numners.length;
// console.log(solution(arr))


// const solution = (numbers) =>
//   numbers.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0) / numbers.length

//   console.log(solution(arr))
  
  
// *** for문
// function solution(numbers) {
//   let answer = 0;

//   for(i of numbers) {
//     answer += i;
//   }
//   answer = answer / numbers.length;

//   return answer;
// }

// console.log(solution(arr))
