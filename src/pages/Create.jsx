import React from 'react'

import Form from '../Molecules/Form'
import {Header} from '../Organisms/Header'
import Input from '../Atoms/Input'
import Button from '../Atoms/Button'

import '../components/styles/Login.scss'

function Create() {
  return (
    <div>
      <Header />
      < Form formName="Create" tittle="My account" button="Log in"> 
        <Input id="Name" labelText="Name" textPlaceHolder="Camila Yokoa" />
        <Input id="email" labelText="Email address" textPlaceHolder="platzi@example.com" />
        <Input id="password" labelText="Password" textPlaceHolder="*********" />
        <Button button="Create" navigateto="/"/>
      </Form>
    </div>
  )
}

export  {Create}