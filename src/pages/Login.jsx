import React from 'react'

import Form from '../Molecules/Form'
import {Header} from '../Organisms/Header'
import Input from '../Atoms/Input'
import Button from '../Atoms/Button'
import { Link } from "react-router-dom";

import '../components/styles/Login.scss'

function Login() {
  return (
    <div>
      <Header />
      < Form formName="Login" tittle="My account" button="Log in"> 
        <Input id="email" labelText="Email address" textPlaceHolder="platzi@example.com" />
        <Input id="password" labelText="Password" textPlaceHolder="*********" />
        <Button button="Log in" navigateto="/"/>
        <Link to="/recovery">Forgot my password</Link>
        <Button button="Sign Up" navigateto="/Sign-in"/>
      </Form>
    </div>
  )
}

export  {Login}