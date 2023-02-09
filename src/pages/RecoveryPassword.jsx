import React from 'react';
import { Link } from "react-router-dom";

import Button from '../Atoms/Button'
import {Header} from '../Organisms/Header'

import '../components/styles/RecoveryPassword.scss'

function RecoveryPassword() {
  return (
    <>
    <Header />
    <div className="login">
        <div className="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
            <h1 className="title">Email has been sent!</h1>
            <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
            <div className="email-image">
            <img src="./icons/email.svg" alt="email" />
            </div>
            <Button button="Login" navigateto="/login-user"/>
            <p className="resend">
            <span>Didn't receive the email?</span>
            <Link to="/recovery" >Resend</Link>
            </p>
        </div>
    </div>
    </>

  )
}

export  {RecoveryPassword}