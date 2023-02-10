import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Layout } from '../../Organisms/Layout'
import { Login } from '../../pages/Login'
import Edit from '../../pages/Edit'
import { Recover } from '../../pages/Recover';
import {RecoveryPassword} from '../../pages/RecoveryPassword'
import { Home } from '../../pages/Home';
import { NotFount } from '../../pages/NotFound';
import { Create } from '../../pages/Create';
import { MyOrder } from '../../pages/MyOrder';

import '../../components/styles/global.css'

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
          
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/login-user' element={<Login />}/>
          <Route exact path='/Edit-user' element={<Edit />}/>
          <Route exact path='/Sign-in' element={<Create />}/>
          <Route exact path='/recovery' element={<Recover />}/>
          <Route exact path='/recovery-password' element={<RecoveryPassword />}/>
          <Route exact path='/myOrder' element={<MyOrder />}/>
          <Route element={<NotFount />}/>

      </Routes>
    </Layout>
    </BrowserRouter>
    
  )
}

export  {App}

