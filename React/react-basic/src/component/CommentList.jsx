import React from 'react';
import Comment from './Comment';
import {useState} from 'react';

const comments = [
  {
    name : "이예진1",
    comment : "안녕하세요. 이예진 입니다."
  },
  {
    name : "이예진2",
    comment : "리액트 재밌다~!"
  }, 
  {
    name : "이예진3",
    comment : "리액트 재미없어!!"
  }
]


function CommentList() {
  const [commentList, setCommentList] = useState(comments);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const deleteComment = (index) => {
    const newCommentList = [...commentList];
    // splice(배열 변경할 index, 제거할 요소의 수)
    newCommentList.splice(index, 1);
    setCommentList(newCommentList)
    console.log(index)
  }

  // 기존 list 추가 함수
  // const addComment = () => {
  //   // const add = {name: "히히ㅇㅎㅇㄶ히", comment : "아아아아아?~!!!"}
  //   // setCommentList([add,...commentList])

  //   const add = {name : name, comment: content}
  //   setCommentList([add,...commentList])
  // state변경 함수에 빈 문자열을 넣어서 input에 작성된 내용을 초기화
  //   setName('')
  //   setContent('')
  // }


  // 삼항 연산자로 value가 빈 값일 때 list 추가되지 않게 하는 기능 추가
  const addComment = () => {
    // name, content에 value값이 없을 때 (조건)
    // true일 때 alert('이름과 댓글을 입력하세요')
    name === '' || text === '' ? alert('이름과 댓글을 입력하세요') : (

      // IIFE (즉시 실행 함수)
      // false일 때(name, content에 value값이 있을 때) 아래 함수가 즉시 실행되게 한다.
      (()=>{
        // add라는 새로운 객체 생성
        const add = {name : name, comment: text}
        // 기존 commentList 앞에 add를 넣어서 add를 더한 새로운 객체를 생성한다.
        setCommentList([add,...commentList])
        // state변경 함수에 빈 문자열을 넣어서 input에 작성된 내용을 초기화
        // setName('')
        // setContent('')
      })()
    )
  };

  return (
    <div>
      {
        commentList.map((comment, i)=> {
          return (
            <Comment name={comment.name} comment={comment.comment} key={i} delete={()=> deleteComment(i)}/>
          )
        })
      }
      
      {/* onChange 이벤트는 input 요소에서 값이 변경될 때 발생 
          그 때 발생한 이벤트를 매개변수 e
      */}
      이름 : <input value={name} onChange={(e) => setName(e.target.value)}/>
      댓글 : <input value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={addComment}>글추가</button>
    </div>
  )
}

export default CommentList;
