import React, { useEffect, useState } from 'react'

import '../components/styles/card.scss'




function Card({children}) {


  return (
    
    <div className="product-card">
      {children}
    </div>

  )
}

export  {Card}