import React from 'react'

import '../Organisms/MyOrderContent'
import '../Molecules/Cart'

import '../components/styles/shoppingCart.scss'
import { MyOrderContent } from '../Organisms/MyOrderContent'
import { Cart } from '../Molecules/Cart'
import {GlobalContext,UseContext} from '../components/GlobalContext' 

function ShoppingCart() {

const {
        setOpenCart,} = UseContext();
  return (
    <div className='UserShoppingCart'>
        <section className='UserShoppingCart-cart'>
            <aside className="product-detail">
                <div className="title-container">
                    <img src="./icons/flechita.svg" alt="arrow" />
                    <p className="title">My order</p>
                </div>
            </aside>
            <MyOrderContent>
                <Cart />
            </MyOrderContent>
        </section>
        
    </div>
    

  )
}

export  {ShoppingCart}