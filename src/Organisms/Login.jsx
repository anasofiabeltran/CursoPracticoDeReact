import React from 'react'

import Form from '../Molecules/Form'
import {Header} from './Header'

import '../components/styles/Login.scss'

function Login() {
  return (
    <div>
      <Header />
      < Form formName="Create" tittle="My account"/>
    </div>
  )
}

export  {Login}