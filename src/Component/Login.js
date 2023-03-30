import './Login.css'
import React, { useEffect, useState } from 'react'
import firebase from "firebase/compat/app"

import PhoneAuth from './PhoneAuth';
import {onAuthStateChanged} from "firebase/auth"

function Login() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyA9urdfXiGk3Af2bl7FNY0A1sIS0OQhmyY",
    authDomain: "mob-otp-964f3.firebaseapp.com",
    projectId: "mob-otp-964f3",
    storageBucket: "mob-otp-964f3.appspot.com",
    messagingSenderId: "1060996151968",
    appId: "1:1060996151968:web:06e2a39bbbcee9a832a7c5"
  };
  


  firebase.initializeApp(firebaseConfig);

  const[user, setUser]= useState(null);
  useEffect(()=>{
    const unRegistered = onAuthStateChanged(firebase.auth(), (currentUser)=>{
      console.log(currentUser);
      setUser(currentUser);
    })
    return ()=>unRegistered();
  })
  return (
    
    <div>
      <div className='lmg'>
        <div className='bulr'>
            <PhoneAuth auth={firebase.auth()}/>
        </div>
      </div>
    </div>
  )
}

export default Login