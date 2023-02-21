import React from 'react'

import cart from '../Assets/Icons/bt_add_to_cart.png'

function CartItem(props) {
  return (
    <>
    <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
    </figure>
    <p>Bike</p>
    <p>$30,00</p>
    <img  src={cart} alt="buy" />
    </>
  )
}

export  {CartItem}