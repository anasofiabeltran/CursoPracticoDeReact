import React from 'react'

function MyOrderContent({children}) {
  return (
    <section className='MyOrderContent'>
        {children}
        <a className='primary-button login-button button' href='/myOrder'> Checkout </a>
    </section>
  )
}

export  {MyOrderContent}