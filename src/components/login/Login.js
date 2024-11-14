import React, { useState } from 'react'
import './style.css'
import logo_login from '../../img/logo_login.jpg';
import email from '../../img/email.svg';
import password from '../../img/password.svg';
import { getOneUser } from '../../services/api';
function Login() {
   const[login_data, setData] = useState({
    email:'',
    password:''
   })
   const handlechange = (e)=>{
    setData((prevState)=>({...prevState, [e.target.name] : e.target.value}))
   }
   const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log("object")
    if(login_data.email && login_data.password){
        // console.log(login_data)
    const response =    await getOneUser(login_data);
    console.log(response)
    }
   }
  return (
    <div>
 <div className="background"></div>
        <div className="centering">
            <form className="my-form">
                <div className="login-welcome-row">
                    <img
                        className="login-welcome"
                        src={logo_login}
                        alt="Astronaut"
                    />
                    <h1>se connecter!</h1>
                </div>
                <div className="text-field">
                    <label for="email">Email:</label>
                    <input
                        aria-label="Email"
                        // type="email"
                        id="email"
                        name="email"
                        placeholder="Votre email"
                        onChange={(e)=>handlechange(e)}
                        required
                    />
                    <img
                        alt="Email Icon"
                        title="Email Icon"
                        src={email}
                    />
                </div>
                <div className="text-field">
                    <label for="password">mots de passe</label>
                    <input
                        id="password"
                        type="password"
                        aria-label="Password"
                        name="password"
                        onChange={(e)=>handlechange(e)}
                        placeholder="votre mots de passe"
                        // title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                        // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                        required
                    />
                    <img
                        alt="Password Icon"
                        title="Password Icon"
                        src={password}
                    />
                </div>
                {/* <input type="submit" className="my-form__button" value="Login" /> */}
                <button className="my-form__button" onClick={(e)=> handleSubmit(e)} >se connecter</button>
                <div className="my-form__actions">
                    <div className="my-form__row">
                        <span>mots de passe oublier?</span>
                        <a href="#" title="Reset Password">modifier mots de passe</a>
                    </div>
                    <div className="my-form__signup">
                        <a href="#" title="créer Account">créer Account</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
