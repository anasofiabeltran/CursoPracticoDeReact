import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {GlobalContext,UseContext} from '../components/GlobalContext' 

function Validate({userValidate,click}) {

    const {user,
        setUser,} = UseContext();

    const [redirect, setRedirect] = useState(<Link to="/" className="primary-button login-button" onClick={click}>Log in</Link>)

    useEffect(()=>{
        setUser('camilayokoo@gmail.com')
    },[])
  return (
    <>
    {redirect}
    </>
  )
}

export  {Validate}