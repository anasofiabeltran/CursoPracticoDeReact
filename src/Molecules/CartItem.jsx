import React, { useEffect } from 'react'

import close from '../Assets/Icons/close.png'

import {UseContext} from '../components/GlobalContext' 

function CartItem(props) {

  const {totalMyOrder,
    setTotalMyOrder,
    removeFromCart} = UseContext();


  
  useEffect(()=>{
    setTotalMyOrder(totalMyOrder+props.price)
  },[])

  return (
    <>
    <figure>
        <img src={props.imag} alt="bike" />
    </figure>
    <p>{props.id}</p>
    <p>{props.price}</p>
    <button onClick={()=>removeFromCart(props.id)}>
      <img  src={close} alt="buy" />
    </button>
    </>
  )
}

export  {CartItem}