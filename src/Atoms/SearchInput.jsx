import React from 'react'

import lupa from '../Assets/Icons/lupa.png'

import '../components/styles/search.scss'

function SearchInput() {
  return (
    <fieldset className='SearchInput'>
        
        <label htmlFor='searchProduct'>
            <img src={lupa}/>
        </label>
        <input id='searchProduct' placeholder='Search product'/>
    </fieldset>
  )
}

export  {SearchInput}