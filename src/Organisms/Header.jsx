import React, { useEffect, useState } from 'react'

import {Links} from '../Atoms/Links.jsx'
import { Link } from "react-router-dom";

import logo from '../Assets/Icons/logo_yard_sale.png'
import icon_shopping_cart from '../Assets/Icons/icon_shopping_cart_notification.png'
import '../components/styles/header.scss'
import {GlobalContext,UseContext} from '../components/GlobalContext' 
import { Menu } from '../Molecules/Menu.jsx';

import path from '../Assets/Icons/Path.png'

function Header() {
  
  const[infoUser, setInfoUser]= useState(<button><Link to="/Sign-in">Sign in</Link></button>)
  const[login, setLogin] = useState(<button><Link to="/login-user">login</Link></button>)
  
  const {user,
    setUser,
    openMenuUser,
    setOpenMenuUser,} = UseContext();

  const OpenMenuUser = () =>{
    setOpenMenuUser(!openMenuUser)
  }
  useEffect(()=>{
    if(!(user=='')){
      setLogin('')
      setInfoUser(<button className={`UserMenu ${openMenuUser && `UserMenuOpen`}`} ><button onClick={OpenMenuUser}> <div> {user} <img src={path}/> </div></button> {openMenuUser && (<Menu />)}</button>)
    }
  },[openMenuUser])
  return (
 <nav>
  <img src="./icons/icon_menu.svg" alt="menu" className="menu" />
  <div className="navbar-left">
    <img src={logo} alt="logo" className="logo" />
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
      <li className="navbar-email">{login}</li>
      <li className="navbar-email">{infoUser}</li>
      <li className="navbar-shopping-cart">
        <img src={icon_shopping_cart} alt="shopping cart" />
        <div>2</div>
      </li>
    </ul>
  </div>
</nav>

  )
}

export  {Header}