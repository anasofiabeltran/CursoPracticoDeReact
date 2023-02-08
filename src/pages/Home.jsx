import React, { useEffect, useState } from 'react'

import { Card } from '../Molecules/Card'
import {Header} from '../Organisms/Header'
import { Search } from '../Molecules/Search'

import {GlobalContext,UseContext} from '../components/GlobalContext' 

import '../components/styles/Home.scss'

function Home() {
  
  return (
    <>
      <Header />
      <Search />
    <section className="main-container">
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
    </>
    
  )
}

export  {Home}