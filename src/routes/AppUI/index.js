import React from 'react'
import {GlobalContext,UseContext} from '../../components/GlobalContext' 
import {App} from "../App"

function AppUI() {
  return (
    <GlobalContext>
        <App />
    </GlobalContext>
  )
}

export  {AppUI}