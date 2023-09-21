import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <main>
      <Ipsum layout='background' name='front-txt'/>
      <Ipsum layout='top' name='second-txt'/>
    </main>
  )
}

function Ipsum(props) {
  // 조건부 랜더링
  const showBtn = props.name === 'front-txt' ? true : false;

  return (
    <>
      <section className={props.layout}>
        <div className={props.name}>
          <h2>Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sint aperiam tempora ratione sunt beatae alias nulla<br/>
            unde expedita suscipit quisquam natus dolores aliquam, placeat ea iusto, nesciunt, incidunt minima.
          </p>
          {
            // html 조건부로 보여줄 때
            // showBtn이 true일 때만 button을 렌더링
            // 둘 다 true일 경우에만 버튼을 렌더링하고
            // 좌항이 false일 경우 바로 false를 반환한다

            // 이벤트 핸들러에 함수가 아닌 표현식이나 값을 바로 전달할 경우
            // 컴포넌트가 재렌더링 될 때 마다 해당 값이 실행된다.
            // 온 클릭 했을 때 실행되게 하려면 이벤트 핸들러에 값을 함수로 전달

            showBtn && <button className="front-btn" type='button' onClick={() => alert('안녕하세요!')}>버튼</button>
          }
        </div>
      </section>
    </>
  )
}

export default Main
