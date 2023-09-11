import React from 'react'

import {UseContext} from '../components/GlobalContext'
import sumTotal from '../hooks/useTotalCar.js'

function Cart({children}) {

  const {state,} = UseContext()
  return (
    <section className="shopping-cart">
      {children}
      <p>Total: {sumTotal(state)}</p>
    </section>

  )
}

export  {Cart}