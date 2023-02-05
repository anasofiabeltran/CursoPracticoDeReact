import React from 'react'

import {Links} from '../Atoms/Links.jsx'

import '../components/styles/header.scss'

function Header() {
  return (
 <nav>
  <img src="./icons/icon_menu.svg" alt="menu" className="menu" />
  <div className="navbar-left">
    <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
    <ul>
      <li>
        <Links url="/">All</Links>
      </li>
      <li>
        <Links url="/">Clothes</Links>
      </li>
      <li>
        <Links url="/">Electronics</Links>
      </li>
      <li>
        <Links url="/">Furnitures</Links>
      </li>
      <li>
        <Links url="/">Toys</Links>
      </li>
      <li>
        <Links url="/">Others</Links>
      </li>
    </ul>
  </div>
  <div className="navbar-right">
    <ul>
      <li className="navbar-email">platzi@example.com</li>
      <li className="navbar-shopping-cart">
        <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
        <div>2</div>
      </li>
    </ul>
  </div>
</nav>

  )
}

export  {Header}