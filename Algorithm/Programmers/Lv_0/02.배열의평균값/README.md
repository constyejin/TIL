.reduce()
- 
: 배열에 있는 모든 값을 합쳐서 새로운 값으로 반환하는 method

`
  Array.recuce((accumlator, currentValue) => {
    return accumlator + currentValue;
  }, initialValue);
`

- accumlator : 받은 값을 누산하여 반환한다. 초기값 미지정 시 배열의 첫 번째 요소가 기본값이 된다.
- currentValue : 현재 처리 할 요소. 초기값 미지정 시 배열의 두 번째 요소가 기본값이 된다.
- initialValue : 초기값 지정
