// 1: 예각 : 0 < angle < 90
// 2: 직각 : angle = 90
// 3: 둔각 : 90 < angle < 180
// 4: 평각 : angle = 180

// 내 코드
// function solution(angle) {
//   if(0 < angle && angle < 90) return 1;
//   if(angle == 90) return 2;
//   if(90 < angle && angle < 180) return 3;
//   if(180 == angle) return 4;
// }


// else-if
// function solution(angle) {
//   let answer = 0;

//   if(angle < 90) {
//     answer = 1;
//   } else if(angle === 90) {
//     answer = 2;
//   } else if(angle < 180) {
//     answer = 3;
//   } else if(angle === 180) {
//     answer = 4;
//   }
//   return answer;
// }


// 삼항연산자
// const solution = (angle) => angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;

// function solution(angle) {
//   return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4; 
// }


// switch
// function solution(angle) {
//   switch(angle) {
//     case 90: return 2;
//     case 180: return 4;
//     default:
//       return angle > 0 && angle < 90 ? 1 : 3;
//   }
// }


// .filter()
function solution(angle) {
  // 배열 리터럴 
  // 비교할 기준이 되는 네 개의 숫자
  // .filter() : 주어진 주곤(angle >= x)을 만족하는 요소들로 새로운 배열 생성
  // 배열의 각 요소 'x'에 대해 angle이 'x'보다 크거나 같으면 그 요소를 배열에 담는다.
  // .filter() 결과 배열의 길이를 반환 => 즉 조건을 만족하는 요소의 개수
  return [0, 90, 91, 180].filter(x => angle >= x).length;

  // 만약 angle이 70이라면 0이 angle보다 작거나 같으므로 조건을 만족하는 요소는 한 개가 된다. filter method는 [0]이라는 배열의 생성하고, 이 배열의 length인 1을 반환한다.
}

console.log(solution(70)) // 1
console.log(solution(91)) // 3
console.log(solution(180)) // 4




