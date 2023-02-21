import React from 'react'

import '../components/styles/Login.scss'

function Input({id,labelText,textPlaceHolder, nameInput}) {
  return (
    <>
        <label htmlFor={id} className="label">{labelText}</label>
        <input name={nameInput} type="text" id={id} placeholder={textPlaceHolder} className="input input-name" />
    </>
    
  )
}

export default Input