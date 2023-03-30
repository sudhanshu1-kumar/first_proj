import React, { useEffect } from 'react'
import firebase from 'firebase/compat/app'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import './phone-auth-container.css'

function PhoneAuth(props) {
    useEffect(()=>{
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth);
        ui.start(".phone-auth-container", {
            signInOptions: [
            firebase.auth.PhoneAuthProvider.PROVIDER_ID
          ],
          signInSuccessUrl: "https://www.facebook.com"
         
          
        })
    })
  return (
    <div className='phone-auth-container'>
        PhoneAuth</div>
  )
}

export default PhoneAuth