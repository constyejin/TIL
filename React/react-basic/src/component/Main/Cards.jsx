import React from 'react'
import './Cards.css'

const Cards = (props) => {
  const data = [
    {title: 'Title1', content: 'Lorem ipsum dolor sit amet.'},
    {title: 'Title2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, modi!'},
    {title: 'Title3', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia magnam culpa quisquam voluptate ipsa perspiciatis eligendi corrupti aut nulla non?'},
  ]

  return (  
    <section className="post-box">
      {
        data.map((item, i)=>{
          return (
            <Card title={item.title} content={item.content} key={i}/>
          )
        })
      }
    </section>
  )
}

function Card(props){
  return (
    <div className="post-card">
      <h2>{props.title}</h2>
      <p className="post-card-txt">{props.content}</p>
    </div>
  )
}

export default Cards
