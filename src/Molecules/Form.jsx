import React from 'react'

import Input from '../Atoms/Input'

function Form({formName,tittle}) {
  return (
    <div className="login">
            <div className="form-container">
                <h1 className="title">{tittle}</h1>
                <form action="/" className="form">
                <div>
                    <Input id="Name" labelText="Name" textPlaceHolder="Camila Yokoa" />
                    <Input id="email" labelText="Email" textPlaceHolder="platzi@example.com" />
                    <Input id="password" labelText="Password" textPlaceHolder="*********" />
                </div>
                <input type="submit" defaultValue={formName} className="primary-button login-button" />
                </form>
            </div>
    </div>

  )
}

export default Form