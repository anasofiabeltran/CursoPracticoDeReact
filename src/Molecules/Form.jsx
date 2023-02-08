import React from 'react'


function Form({formName,tittle,children}) {
  return (
    <div className="login">
            <div className="form-container">
                <h1 className="title">{tittle}</h1>
                <form action="/" className="form">
                <div>
                    {children}
                    
                </div>
                <input type="submit" defaultValue={formName} className="primary-button login-button" />
                </form>
            </div>
    </div>

  )
}

export default Form