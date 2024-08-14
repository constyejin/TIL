// 내 코드
function solution(my_string, n) {
    let answer = [...my_string].map(txt => txt.repeat(n)).join('');
    return answer;
}

// function solution(my_string, n) {
//   let answer = [...my_string].forEach(txt => txt.repeat(n)).join('');
//   return answer;
// }


// map과 forEach의 차이
// 처음에 forEach로 시도 했으나 => 'TypeError: Cannot read properties of undefined (reading 'join')' 
// map : 배열의 각 요소를 새로운 배열로 반환한다. 그렇기 때문에 join() method를 사용할 수 있다.
// forEach : 배열의 각 요소에 대해 수행은 하지만 새로운 배열을 반환하지 않는다. 그렇기 때문에 join() method 사용 X.

// map result
// ['hhh', 'eee', 'lll', 'lll', 'ooo', 'www']
// 이런식으로 나오기 때문에 join('')을 사용하면 ['hhheeellllllooowww'] 가 된다.

const solution1 = (my_string, n) => {
  let result = [];
  [...my_string].forEach(txt => {
    result.push(txt.repeat(n));
  })
  let answer1 = result.join('');
  return answer1;
}

console.log(solution1('hello', 3))
