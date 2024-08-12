// 내 코드
// function solution(num_list) {
//     let even = num_list.filter((num) => num % 2 === 0).length;
//     let odd = num_list.filter((num) => num % 2 !== 0).length;

//     return [even, odd]
// }


// for(let a of) 
// function solution(num_list){
//   let answer = [0, 0];

//   for(let a of num_list) {
//     answer[a % 2] += 1
//   }

//   return answer;
// }


// .reduce()
const solution = (num_list) => {
  return num_list.reduce(([even, odd], curr) => {
    return [
      curr % 2 === 0 ? even + 1 : even,
      curr % 2 === 1 ? odd + 1 : odd
    ]
  }, [0,0])
}

console.log(solution([1,2,3,4,5])) // [2, 3]
