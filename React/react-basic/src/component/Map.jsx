import React from 'react';

// map()함수
// 코드를 간결하고 가독성 있게 유지하는데 유용하다.
// 모든 Array(배열) 뒤에는 map() 함수를 사용할 수 있다.
const Map = () => {
  let nums = [1, 2, 3, 4, 5];
  let arrPlus = nums.map((num) => num + 1)
  // console.log(nums)
  // console.log(arrPlus)
  // map()함수는 각 원소에 대해 callback 함수 실행한 결과를 새로운 배열로 반환한다.

  // 02. 배열 값 제곱근 구하기
  let newArr = nums.map((num) => {
    // 제곱 구하는 함수 
    return Math.pow(num, 2);
  })
  console.log(newArr) // [1, 4, 9, 16, 25]


  return (
    <>
      {
        // map(para1, para2)
        // para1 : 배열 반복한 값
        // para2 : 배열 인덱스 번호
        [1,2,3].map((item, index) => {
          return (
            <div key={index}>
              <div>배열 안 값 {item}</div>
              <div>배열 인덱스 {index}</div>
            </div>
          )
        })
      }

      {
        // React StrictMode 때문에 console.log 두 번
        [1,2,3,4].map((num) => {
          // console.log(1)
          // console.log(num)
        })
      }

      {
        // 03. 문자열 대문자로 변경
        ["yejin", "lee", "jin"].map((str, i) => {
          return <div key={i}>{str.toUpperCase()}</div>
        })
      }

      {
        // 04. 객체 속성값 추출
        [
          { name: "yejin1", age: 100 },
          { name: "yejin2", age: 101 },
          { name: "yejin3", age: 102 }
        ].map((obj, i) => {
          return <div key={i}>이름 : {obj.name}, 나이 :{obj.age}</div>
        })
      }

      {
        // 05. 배열의 각 요소에 인덱스 값 더하기
        [1,2,3,4,5].map((num, index) => {
          return num + index
        })
      }
    </>
  )
};

export default Map;
