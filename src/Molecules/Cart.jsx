import React from 'react'

import {GlobalContext,UseContext} from '../components/GlobalContext' 

function Cart() {
  const {openProduct,
    setOpenProduct,} = UseContext();

  return (
    <section className="shopping-cart">
        <figure>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img onClick={()=>{setOpenProduct(!openProduct)}} src="./icons/icon_close.png" alt="close" />
    </section>

  )
}

export  {Cart}