import React from 'react'
import {GlobalContext,UseContext} from '../components/GlobalContext' 

import '../components/styles/product.scss'
import cart from '../Assets/Icons/bt_add_to_cart.png'
import close from '../Assets/Icons/close.png'

import {CartItem} from '../Molecules/CartItem'

function Product(props) {
  const {openProduct,
    setOpenProduct,
    addToCart,} = UseContext();
    console.log(props.product)

    const buy = (product) =>{
      addToCart(product)
    }

  return (
    <section className='Product'>
        <aside className="product-detail-product">
                <div className="product-detail-close">
                    <img onClick={()=>{setOpenProduct(!openProduct)}} src={close} alt="close" />
                </div>
                <img src={props.product.imag} alt="product image" />
                <div className="product-info-product">
                    <p>{props.product.price}</p>
                    <p>{props.product.id}</p>
                    <p>{props.product.description}</p>
                    <button className="primary-button add-to-cart-button" onClick={()=>{buy(<CartItem imag={props.product.imag} price={props.product.price}  id={props.product.id}/>)}}>
                    <img src={cart} alt="add to cart" />
                    Add to cart
                    </button>
                </div>
        </aside>
    </section>

    

  )
}

export  {Product}