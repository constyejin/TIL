import React from 'react'
import logo from '../../applelogo.png'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  const menuItems = [
    { to: '/menu1', text: 'menu1' },
    { to: '/menu2', text: 'menu2' },
    { to: './menu3', text: 'menu3' }, 
  ];

  return (
    <header>
      <nav>
        <h1 className="logo">
          <a href="/">
            <img src={logo} alt="logo"/>
          </a>
        </h1>

        <h2 className="visually-hidden">메뉴</h2>
        <ul className="gnb-list">
          {
            menuItems.map((item, i) => {
              return(
                <li className="gnb-item" key={i}>
                  <a href="{item.to}">{item.text}</a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  ) 
}

export default Header
