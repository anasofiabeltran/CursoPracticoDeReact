import React from 'react'
import {GlobalContext,UseContext} from '../components/GlobalContext' 

import '../components/styles/product.scss'
import cart from '../Assets/Icons/bt_add_to_cart.png'
import close from '../Assets/Icons/close.png'

function Product() {
  const {openProduct,
    setOpenProduct,} = UseContext();
  return (
 
    <section className='Product'>
        <aside className="product-detail-product">
                <div className="product-detail-close">
                    <img onClick={()=>{setOpenProduct(!openProduct)}} src={close} alt="close" />
                </div>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                <div className="product-info-product">
                    <p>$35,00</p>
                    <p>Bike</p>
                    <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                    <button className="primary-button add-to-cart-button">
                    <img src={cart} alt="add to cart" />
                    Add to cart
                    </button>
                </div>
        </aside>
    </section>

    

  )
}

export  {Product}