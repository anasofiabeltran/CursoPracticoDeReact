import React, { useEffect, useState } from 'react'

import { Card } from '../Molecules/Card'
import {Header} from '../Organisms/Header'
import { Search } from '../Molecules/Search'
import { Product } from '../Molecules/Product'
import {GlobalContext,UseContext} from '../components/GlobalContext' 
import cart from '../Assets/Icons/bt_add_to_cart.png'
import { useGetProducts } from '../hooks/useGetProducs'


import '../components/styles/Home.scss'

function Home() {

  const {openProduct,
    setOpenProduct,} = UseContext();


  const [productSelected,setProductSelected] = useState([])
  const selectAProduct = (product) => {
    setOpenProduct(!openProduct)
    setProductSelected(product)
  }

  

  const products = useGetProducts('https://api.escuelajs.co/api/v1/products?limit=100&offset=1')
  
  return (
    <>
      <Header />
      <Search />
    <section className="main-container">
      <div className="cards-container">
        {products.map((p,index)=>
          (<button key={p.id} className='button-background' onClick={(p)=>{selectAProduct(p)}}>
            
            <Card >
              <img src={p.images[0]}/>
              <div className="product-info">
              <div>
                <p>{p.price} $</p>
                <p>{p.description}</p>
                </div>
                <figure>
                <img src={cart} alt="cart" />
                </figure>
              </div>
            </Card>
        </button>)
        )}
        


        {openProduct && (<Product product={productSelected}/>)}
        
      </div>
    </section>
    </>
    
  )
}

export  {Home}