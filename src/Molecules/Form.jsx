import React from 'react'


function Form({formName,tittle,button,children,formRef}) {
  return (
    <div className="login">
            <div className="form-container">
                <h1 className="title">{tittle}</h1>
                <form action="/" className="form" ref={formRef}>
                <div>
                    {children}
                </div>
                
                </form>
            </div>
    </div>

  )
}

export default Form