import React from 'react'
import { Link } from "react-router-dom";

import {Header} from '../Organisms/Header'
import Form from '../Molecules/Form'
import Button from '../Atoms/Button'
import Input from '../Atoms/Input'

function Recover() {
  return (
    <div>
      <Header />
      
      < Form formName="Recover" tittle="" button="Log in"> 
      <h1 className="title">Email has been sent!</h1>
      <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <Input id="email" labelText="Email address" textPlaceHolder="platzi@example.com" />
        <Button button="Submit" navigateto="/recovery-password"/>
        <Link to="/login-user">Back to log in</Link>
      </Form>
    </div>
  )
}

export  {Recover}