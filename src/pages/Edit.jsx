import React from 'react'


import Form from '../Molecules/Form'
import {Header} from '../Organisms/Header'
import Input from '../Atoms/Input'

function Edit() {
  return (
    <div>
      <Header />
      < Form formName="Edit" tittle="My account"> 
        <Input id="Name" labelText="Name" textPlaceHolder="Camila Yokoa" />
        <Input id="email" labelText="Email" textPlaceHolder="platzi@example.com" />
        <Input id="password" labelText="Password" textPlaceHolder="*********" />
        <Button button="Edit"/>
      </Form>
    </div>
  )
}

export default Edit