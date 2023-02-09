import React from 'react'
import { Link } from "react-router-dom";

import {GlobalContext,UseContext} from '../components/GlobalContext' 
import { MenuItems } from '../Atoms/MenuItems'

import '../components/styles/MenuItems.scss'

function Menu() {
    const {user,
        setUser,} = UseContext();

  const signOut = () =>{
    setUser('')
  }  
  return (
    <div class="desktop-menu">
    <ul>
      <li>
        <MenuItems item="My orders"/>
      </li>

      <li>
        <MenuItems item="My account"/>
      </li>

      <li>
        <Link onClick={signOut} to="/" >Sign out</Link>
      </li>
    </ul>
  </div>
    
  )
}

export  {Menu}