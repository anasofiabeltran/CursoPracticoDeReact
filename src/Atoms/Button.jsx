import React from 'react'
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Button({button,navigateto,click}) {

  return (
    <Link to={navigateto} className="primary-button login-button" onClick={click}>{button}</Link>
  )
}

export default Button