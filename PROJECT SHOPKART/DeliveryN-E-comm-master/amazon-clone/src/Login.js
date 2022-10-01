import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const signIn = e => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then( (auth) => {
          history.push('/')
        })
        .catch(error => alert(error.message))

    // firebase stuff happens here
  }
  
  const register = e => {
    e.preventDefault();
     auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
          // it succesfully created a new user with email and password
          console.log(auth);
          if(auth){
            history.push('/')
          }
        })
        .catch(error => alert(error.message))



    // firebase stuff happens here
  }

   {/* the input lines will track our lofin email && password*/}
  return (
    <div className='login'>
      <Link to='/'>
        <img className="login__logo" src="https://pngimg.com/uploads/amazon/small/amazon_PNG24.png" alt="#" />

      </Link>
     <div className="login__container">
         <h1>Sign-in</h1>
         <form>
           <h5>E-mail</h5>
         
           <input type="text" value={email} onChange=
           {e => setEmail(e.target.value)} />

           <h5>Password</h5>
           <input type="password" value={password} onChange=
           {e => setPassword(e.target.value)} />

           <button type='submit' onClick={signIn}
            className="login__signInButton">Sign in</button>
         </form>
         <p>
           By signing-in you agree to Aamzon's
           conditions of the Use & sale, please see our
           Privacy Notice, our Cookies Notice
           and our Interest-Based Ads Notice.
         </p>
         
         <button onClick={register}
          className="login__registerButton">Create your Aamzon Account</button>
     </div>

    </div>
  )
}

export default Login
