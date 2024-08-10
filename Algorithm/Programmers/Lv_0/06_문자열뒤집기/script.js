// function solution(my_string) {
//   let txt = my_string.split('');
//   let reverseTxt = txt.reverse();
//   return reverseTxt.join('')
// }


// Spread [...] 
const solution = (my_string) => {
  let answer = [...my_string].reverse().join('');
  return answer;
}

console.log(solution('hello world!'))
