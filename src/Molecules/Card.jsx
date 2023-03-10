import React from 'react'

import '../components/styles/card.scss'
import cart from '../Assets/Icons/bt_add_to_cart.png'

function Card() {
  return (
    <div className="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <div className="product-info">
            <div>
            <p>$120,00</p>
            <p>Bike</p>
            </div>
            <figure>
            <img src={cart} alt="" />
            </figure>
        </div>
       
    </div>

  )
}

export  {Card}