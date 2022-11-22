import React, { useState } from 'react';
import './logIn.css'
import Logo from "./images/Logo.png";
import { BsFillShieldLockFill, BsFillPenFill } from "react-icons/bs";
function LogIn() {
    return (

        <div className='body'>
        <div className='login-card'>
            <div className='login-card-logo'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='login-card-header'>

                <h1>Sign up</h1>
              
            </div>
            <form className='login-card-form'>
            <div className='form-item'>
                    <input type="text" placeholder="First Name" required autoFocus />
                    <div className='form-item-icon'>
                        <BsFillPenFill />
                    </div>
                </div>
                <div className='form-item'>
                    <input type="text" placeholder="Last Name" required autoFocus />
                    <div className='form-item-icon'>
                        <BsFillPenFill />
                    </div>
                </div>
                <div className='form-item'>
                    <input type="text" placeholder="Enter mail" required autoFocus />
                    <div className='form-item-icon'>
                        <BsFillPenFill />
                    </div>
                </div>
                <div className="form-item">
                    <input type="text" placeholder="Enter Password"required />
                    <div className='form-item-icon-lock'>
                        <BsFillShieldLockFill />
                    </div>
                </div>
                 <div className="form-item">
                    <input type="text" placeholder="Enter Password Again" required />
                    <div className='form-item-icon-lock'>
                        <BsFillShieldLockFill />
                    </div>
                </div> 
               
                 <button className='lebutton' type="submit">Sign Up</button>
              
            </form>

        </div>
    </div>
    )

}
export default LogIn;