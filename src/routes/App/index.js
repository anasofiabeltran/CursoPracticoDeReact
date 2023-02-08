import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Layout } from '../../Organisms/Layout'
import { Login } from '../../pages/Login'
import Edit from '../../pages/Edit'
import {RecoveryPassword} from '../../Organisms/RecoveryPassword'
import { Home } from '../../pages/Home';
import { NotFount } from '../../pages/NotFound';


import '../../components/styles/global.css'

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
          
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/login-user' element={<Login />}/>
          <Route exact path='/Edit-user' element={<Edit />}/>
          <Route exact path='/recovery-password' element={<RecoveryPassword />}/>
          <Route element={<NotFount />}/>

      </Routes>
    </Layout>
    </BrowserRouter>
    
  )
}

export  {App}

