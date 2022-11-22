import React from 'react'
import './signIn.css';
import { useState,useEffect,useRef } from 'react';
import image from './images/Logo.png';
import { BsFillShieldLockFill, BsFillPenFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
function SignIn() {
    const [path, setPath] = useState("")
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const ref = useRef(null);
    useEffect(() => {
        setTimeout(() => {
          ref.current.click();
        }, 1000); //miliseconds
      }, []);
    
    const list = [
        { email: "selimsoyah86@gmail.com", password: "123" },
        { email: "adam@gmail.com", password: "123" }
    ]


    const check = () => {
        list.map((data)=>{
            if (data.email == email && data.password == pass)
            {
                return setPath("/mainPage")
            }
        })     
           
    }
    return (

        <div className='Body'>
            <div className='login-card'>
                <div className='login-card-logo'>
                    <img src={image} alt='logo' />
                </div>
                <div className='login-card-header'>

                    <h1>Sign In</h1>
                    <div>Please Enter your credentials to use platform</div>
                </div>
                <form className='login-card-form'>
                    <div className='form-item'>
                        <input type="text" placeholder="Enter mail" onChange={(e) => (
                            setEmail(e.target.value)
                        )} required autoFocus />
                        <div className='form-item-icon'>
                            <BsFillPenFill />
                        </div>
                    </div>
                    <div className="form-item">
                        <input type="text" placeholder="Enter Password"
                        onChange={(e)=>{
                            setPass(e.target.value)
                        }}
                        required />
                        <div className='form-item-icon-lock'>
                            <BsFillShieldLockFill />
                        </div>
                    </div>
                    <div className="form-item-other">
                        <div className="checkbox">
                            <input type="checkbox" id="FirstCheckBox" />
                            <label id="Remember">Remember me</label>
                        </div>
                        <a href="/PAssword-reset.html">I forgot my password!</a>
                    </div>
                      <Link to = {path}> <button ref={ref}  onClick={check} type="submit">Sign In</button></Link>
                    <div className="Sign-form">Don't have an account?<Link to="/logIn">Create one for free</Link></div>
                </form>

            </div>
        </div>
    );
}
export default SignIn;