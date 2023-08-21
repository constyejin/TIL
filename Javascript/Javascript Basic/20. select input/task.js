// Q1. array에서 이름을 찾아주는 함수 만들기
// 함수 안에 파라미터로 이름을 넣었을 때 그 이름이 출석부에 있는지 여부

let names = ['예진', '수정', '지혜', '빛나', '세아', '동건'];


function findName(para){
  names.forEach(function(name){
    if(para == name) {
      return console.log('있어요');
    } 
  })

  // for(let i = 0; i < names.length; i++) {
  //   if(para == names[i]) {
  //     return console.log('있어요');
  //   } 
  // }
}

findName('빛나');
