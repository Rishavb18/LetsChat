import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";

import { auth } from '../firebase';
import firebase from 'firebase/app';


const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <div id="heading">Welcome to WeChat!</div>
                <br/>
                {/* <div className="login-button google" onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined /> Sign in with Google
                </div> */}
                <div>
                    <button className="login-button google" onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                        <GoogleOutlined /> Sign in with Google
                    </button>
                </div>
                {/* <div className="login-button facebook" onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                    <FacebookOutlined /> Sign in with Facebook
                </div> */}
            </div>
        </div>

    );

}

export default Login;
