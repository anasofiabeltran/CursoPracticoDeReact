import React from 'react'

import { MyOrderContent } from '../Organisms/MyOrderContent'
import { Cart } from '../Molecules/Cart'
import {Header} from '../Organisms/Header'

import {UseContext} from '../components/GlobalContext'
import sumTotal from '../hooks/useTotalCar.js'


import '../components/styles/MyOrder.scss'
function MyOrder() {

    const {state,} = UseContext()

  return (
    <>
    <Header />
    <section className='MyOrder'>
        <div class="my-order">
            <div class="my-order-container">
                <h1 class="title">My order</h1>

                <div class="my-order-content">
                        <div class="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>Total: {sumTotal(state)}</p>
                        </div>
                    </div>
            </div>
            <MyOrderContent>
                <Cart />
            </MyOrderContent>
        </div>
    </section>
    
    </>
    
  )
}

export  {MyOrder}