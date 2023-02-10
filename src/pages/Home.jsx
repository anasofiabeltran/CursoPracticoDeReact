import React, { useEffect, useState } from 'react'

import { Card } from '../Molecules/Card'
import {Header} from '../Organisms/Header'
import { Search } from '../Molecules/Search'
import { Product } from '../Molecules/Product'
import {GlobalContext,UseContext} from '../components/GlobalContext' 


import '../components/styles/Home.scss'

function Home() {

  const {openProduct,
    setOpenProduct,} = UseContext();
  
  return (
    <>
      <Header />
      <Search />
    <section className="main-container">
      <div className="cards-container">
        <button onClick={()=>{setOpenProduct(!openProduct)}}>
          <Card />
        </button>
        <button onClick={()=>{setOpenProduct(!openProduct)}}>
          <Card />
        </button>
        <button onClick={()=>{setOpenProduct(!openProduct)}}>
          <Card />
        </button>
        <button onClick={()=>{setOpenProduct(!openProduct)}}>
          <Card />
        </button>
        <button onClick={()=>{setOpenProduct(!openProduct)}}>
          <Card />
        </button>
        <button onClick={()=>{setOpenProduct(!openProduct)}}>
          <Card />
        </button>
        <button onClick={()=>{setOpenProduct(!openProduct)}}>
          <Card />
        </button>
        <button onClick={()=>{setOpenProduct(!openProduct)}}>
          <Card />
        </button>
        <button onClick={()=>{setOpenProduct(!openProduct)}}>
          <Card />
        </button>
        <button onClick={()=>{setOpenProduct(!openProduct)}}>
          <Card />
        </button>

        {openProduct && (<Product />)}
        
      </div>
    </section>
    </>
    
  )
}

export  {Home}