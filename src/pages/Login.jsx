import React, { useRef } from 'react'

import Form from '../Molecules/Form'
import {Header} from '../Organisms/Header'
import Input from '../Atoms/Input'
import Button from '../Atoms/Button'
import { Link } from "react-router-dom";
import { Validate } from '../Atoms/Validate'

import '../components/styles/Login.scss'

function Login() {
  const form= useRef(null);

  const handleSubmit = ()=>{
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data)
  }

  return (
    <div>
      <Header />
      < Form formName="Login" tittle="My account" button="Log in" formRef={form}> 
        <Input nameInput="email" labelText="Email address" textPlaceHolder="platzi@example.com" />
        <Input nameInput="password" labelText="Password" textPlaceHolder="*********" />
        <Validate click={handleSubmit} />
        <Link to="/recovery">Forgot my password</Link>
        {/*<input type="button" placeholder='Sing up' onClick={handleSubmit}/> */}
        <Button button="Sign Up" navigateto="/Sign-in" />
      </Form>
    </div>
  )
}

export  {Login}