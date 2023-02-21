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
                <img src={props.product.target.src} alt="product image" />
                <div className="product-info-product">
                    <p>$35,00</p>
                    <p>Bike</p>
                    <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                    <button className="primary-button add-to-cart-button" onClick={()=>{buy(<CartItem />)}}>
                    <img src={cart} alt="add to cart" />
                    Add to cart
                    </button>
                </div>
        </aside>
    </section>

    

  )
}

export  {Product}