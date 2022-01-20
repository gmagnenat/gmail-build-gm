import React from 'react';
import './Login.css';
import {Button} from '@mui/material';

function Login() {

    const signIn = () => {
        console.log("hello");
    }
  return <div className="login">
      <div className="login__container">
          <img src="gmail_logo.png" alt="" />
      <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
      </div>

  </div>;
}

export default Login;
