import React from 'react';

const styles = {
  wrapper : {
    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'center',
    margin: '8px',
    padding : '10px 20px',
    border : '1px solid #ccc',
    borderRadius : '16px',
  },

  image : {
    width : '50px',
    height: '50px',
    borderRadius : '50%',
  },

  contentContainer : {
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-between',
    flexGrow : 1,
    marginLeft : '12px',
  },
  
  marginZero : {
    margin : 0
  }
}

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div>
        <img style={styles.image} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user-img" />
      </div>

      <div style={styles.contentContainer}>
        <h3 style={styles.marginZero}>{props.name}</h3>
        <p style={styles.marginZero}>{props.comment}</p>
      </div>
      <button onClick={props.delete}>X</button>
    </div>
  )
}

export default Comment;
