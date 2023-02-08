import React from 'react'

import Form from '../Molecules/Form'
import {Header} from '../Organisms/Header'
import Input from '../Atoms/Input'

import '../components/styles/Login.scss'

function Login() {
  return (
    <div>
      <Header />
      < Form formName="Create" tittle="My account"> 
        <Input id="Name" labelText="Name" textPlaceHolder="Camila Yokoa" />
        <Input id="email" labelText="Email" textPlaceHolder="platzi@example.com" />
        <Input id="password" labelText="Password" textPlaceHolder="*********" />
      </Form>
    </div>
  )
}

export  {Login}