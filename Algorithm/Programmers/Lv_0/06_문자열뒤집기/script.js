// function solution(my_string) {
//   let txt = my_string.split('');
//   let reverseTxt = txt.reverse();
//   return reverseTxt.join('')
// }


// Spread [...] 
// .split() => String 객체를 지정한 구분자를 이용해 여러개의 문자열로 나눈다.
// .reverse() => 배열 순서 반전
// .join() => 배열의 모든 요소를 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환한다.
const solution = (my_string) => {
  let answer = [...my_string].reverse().join('');
  return answer;
}

console.log(solution('hello world!'))
