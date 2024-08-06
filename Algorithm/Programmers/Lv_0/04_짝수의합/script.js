// 내 코드
// function solution(n) {
//     var answer = 0;

//     for(let i = 2; i <= n; i += 2) {
//         answer += i
//     }

//     return answer;
// }


// for & if
// const solution = (n) => {
//   let answer = 0;

//   for(let i = 1; i <= n; i++) {
//     if(i % 2 === 0) {
//       answer += i;
//     }
//   }
//   return answer
// }


// Math.floor() / 수열 공식
const solution = (n) => {
  let half = Math.floor(n / 2);
  // 'n * (n + 1) / 2'의 변형
  return half * (half + 1);
}

// n = 10인 경우:
// half = Math.floor(10 / 2) = 5
// 5 * (5 + 1) = 5 * 6 = 30

console.log(solution(10)) // 30
console.log(solution(30)) // 240
