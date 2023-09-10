// XMLHttpRequest 객체 생성
var xhr = new XMLHttpRequest();

// API URL 설정
var url = 'http://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureSidoLIst';

// API 요청 파라미터 설정
var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'rOGI%2BIvn6bqhwghISJpom2Dz1zr0tbNdR%2Blm8fl5xrLwUFt9EGQHinJBCAQhO4c3yub9o5bhWPy9AxyTKTen%2BQ%3D%3D'; // URL 인코딩된 Service Key
queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); // 응답 데이터 타입 설정
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); // 한 페이지에 표시할 항목 개수 설정
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); // 페이지 번호 설정
queryParams += '&' + encodeURIComponent('sidoName') + '=' + encodeURIComponent('경북'); // 조회할 시도 이름 설정
queryParams += '&' + encodeURIComponent('searchCondition') + '=' + encodeURIComponent('DAILY'); // 데이터 기간 하루

// API 호출 및 응답 데이터 처리
xhr.open('GET', url + queryParams);

// xhr.onreadystatechange = function () {
//   if (this.readyState == 4) { // 서버 응답 완료 상태 확인
//     if (this.status === 200) { // HTTP 상태 코드가 200 (성공)인 경우
//       // 서버로부터 받은 JSON 형식의 문자열 데이터를 Javascript 객체로 변환
//       // responseText : 객체가 서버로부터 응답 받은 문자열 데이터가 담긴 변수
//       let responseData = JSON.parse(this.responseText);
//       console.log(responseData)
        
//       // 응답 데이터 구조 확인
//       // 서버에서 반환한 데이터가 이대로 잘 구성 되어 있다면 조건이 참
//       if (responseData.response.body.items) {
//         var items = responseData.response.body.items;
//         console.log(items)

//         var dataDisplay = document.getElementById('data-display');

//         // responseData에서 필요한 데이터를 추출해서 표시 
//         for (let i = 0; i < items.length; i++) {
//           var item = items[i];

//           if(item.cityName  == '대덕구') {
//             // 데이터를 HTML에 추가
//             var dataItem = document.createElement('div');
//             dataItem.innerHTML = item.sidoName + item.cityName + ', 미세먼지 농도: ' + item.pm10Value;
//             dataDisplay.appendChild(dataItem);
//           }
//         }
//       } else {
//         console.log('데이터 구조 다시 확인해라');
//       }
//     } else {
//       // HTTP 요청 실패 했을 때
//       console.log('HTTP 요청 실패: ' + this.status);
//     }
//   }
// };

// xhr.send('');
  

// 1시간 마다 데이터를 업데이트하고 HTML에 표시 해주는 함수
function updateData() {
  // API 호출 및 응답 데이터 처리
  xhr.open('GET', url + queryParams);

  xhr.onreadystatechange = function () {
    if (this.readyState == 4) { // 서버 응답 완료 상태 확인
      if (this.status === 200) { // HTTP 상태 코드가 200 (성공)인 경우
        let responseData = JSON.parse(this.responseText); // 서버 응답 데이터를 JSON으로 파싱

        // 응답 데이터 구조 확인
        // 서버에서 반환한 데이터가 이대로 잘 구성 되어 있다면 조건이 참
        if (responseData.response.body.items) {
          let items = responseData.response.body.items;
          console.log(items)

          // 가장 최근 데이터를를 저장할 변수 선언 후 
          // 의도적으로 해당 변수에 아무런 데이터가 할당되지 않음을 나타내기 위해 null로 초기값 설정
          let latestData = null;
          // 데이터를 담을 html 요소(div)
          let dataDisplay = document.getElementById('data-display');
          for (let i = 0; i < items.length; i++) {
            // items 배열을 순회한 값을 item 이라는 변수에 할당
              let item = items[i];

            if (item.cityName == '경주시') { 
              // 1. latestData에 값이 비어있을 경우 = 참  
              // 2. 현재 item.dataTiem 보다 최신 데이터라면 latestData 변수에 그 값을 저장한다.
              if (!latestData || item.dataTime > latestData.dataTime) {
                 // latestData에 더 큰 item 값을 넣어서 latestData에 제일 최근 데이터를 담는다.
                latestData = item;
                let newDataItem = `
                  <div class="dust-item">
                    <div>${latestData.sidoName}</div>
                    <div>${latestData.cityName}</div>
                    <div>${latestData.pm10Value}</div>
                  </div>
                `;
                dataDisplay.insertAdjacentHTML('beforeend', newDataItem);

                
               let dustItem = document.querySelector('.dust-item');
               if(item.pm10Value >= 20) {
                dustItem.classList.add('not-good');
               } else {
                dustItem.classList.add('good');
               }
              }
            }
          }
        } else {
          console.error('데이터 구조가 예상과 다릅니다.');
        }
      } else {
        // HTTP 요청이 실패한 경우 처리
        console.error('HTTP 요청 실패: ' + this.status);
      }
    }
  };

  xhr.send(''); // 서버에 요청을 보냄
}

// 최초 한 번 실행
updateData();

// 1시간 마다 주기적으로 업데이트 함수 호출
setInterval(updateData, 3600000); // 1시간마다
