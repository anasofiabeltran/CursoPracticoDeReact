import React from 'react'

import '../components/styles/Login.scss'

function Input({id,labelText,textPlaceHolder}) {
  return (
    <>
        <label htmlFor={id} className="label">{labelText}</label>
        <input type="text" id={id} placeholder={textPlaceHolder} className="input input-name" />
    </>
    
  )
}

export default Input