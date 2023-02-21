import React from 'react'

import '../Organisms/MyOrderContent'
import '../Molecules/Cart'

import '../components/styles/shoppingCart.scss'
import { MyOrderContent } from '../Organisms/MyOrderContent'
import { Cart } from '../Molecules/Cart'
import {GlobalContext,UseContext} from '../components/GlobalContext' 
import arrow from '../Assets/Icons/arrow.png'

function ShoppingCart() {

const {
        setOpenCart,state} = UseContext();
  return (
    <div className='UserShoppingCart'>
        <section className='UserShoppingCart-cart'>
            <aside className="product-detail">
                <div className="title-container">
                    <img src={arrow} alt="arrow" />
                    <p className="title">My order</p>
                </div>
            </aside>
            <MyOrderContent>
                <Cart>
                    {state.cart.map(p=>(p))}
                </Cart>
            </MyOrderContent>
        </section>
        
    </div>
    

  )
}

export  {ShoppingCart}