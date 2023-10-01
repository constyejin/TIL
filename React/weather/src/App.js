import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Weather from './component/Weather';
import Buttons from './component/Buttons';

// 1. 앱이 실행되면 현재위치 기반의 날씨가 보인다.
// 2. 날씨 정보에는 도시, 섭씨, 화씨 날씨 상태
// 3. 5개의 버튼 (현재위치, 나머지 4개 다른 도시 위치)
// 4. 도시버튼을 클릭하면 해당 도시 날씨를 보여준다.
// 5. 데이터가 나오는 동안 로딩 스피너

// 앱이 실행 되자마자 => 리액트 라이프 사이클 useEffect 사용
function App() {
  const [weather, setWeather] = useState(null);

  // 현재 내 위치 가져오기
  const getCurrentLocation = () => {
    // Geolocation API 검색
    // navigator 라는 자바스크립트 기본 객체 사용
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat, lon)
    })
  }

  const getWeather = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a0f26ad7c4499a0f6c1015b173b85237&units=metric`;
    let response = await fetch(url)
    let data = await response.json();
    // console.log(data)
    setWeather(data)
  }

  // useEffect =>  첫번째 UI 렌더 후에 작동
  useEffect(() => {
    getCurrentLocation()
  },[]);

  return (
    <div className='wrapper'>
      {/* weather 정보를 props로 보내준다 */}
      <Weather weather={weather}/>
      <Buttons/>
    </div>
  );
}

export default App;
