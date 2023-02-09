import React from 'react'
import { Link } from "react-router-dom";

function MenuItems({item}) {
  return (
    <Link to="/" class="title menuItem">{item}</Link>
  )
}

export  {MenuItems}