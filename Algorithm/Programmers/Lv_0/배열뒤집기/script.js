// 내 코드
// function solution(num_list) {
//   var answer = [...num_list].reverse();
//   return answer;
// }


// reverse() | 원본 배열 변형
// const solution = (num_list) => {
//   return num_list.reverse();
// }


// for문
// const solution = (num_list) => {
//   const reverse = [];

//   for(let i = num_list.length - 1; i >= 0; i--) {
//     reverse.push(num_list[i])
//   }

//   return reverse;
// }


// .sort()
// .sort() 함수는 기본적으로 문자열로 정렬한다. 숫자는 비교 함수를 인자로 받는다.
const solution = (num_list) => {
  return num_list.sort((a, b) => -1)
}

console.log(solution([1,2,3,4,5]))
console.log(solution([10,8,6,4,2]))
console.log(solution(['C', 'B', 'A']))
