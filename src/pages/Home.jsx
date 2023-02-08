import React from 'react'

import { Card } from '../Molecules/Card'
import {Header} from '../Organisms/Header'
import { Search } from '../Molecules/Search'

import '../components/styles/Home.scss'

function Home() {
  return (
    <>
      <Header />
      <Search />
    <section class="main-container">
      <div class="cards-container">
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