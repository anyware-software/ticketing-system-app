import React, { useEffect } from 'react';
import logo from "./logo.svg";
import "./App.css";
import { signInWithRedirect , GetCurrentUserOutput, getCurrentUser } from 'aws-amplify/auth';
const provider = {
  custom: 'Facebook',
}

function handleSignInClick() {
  signInWithRedirect({ provider })
}

function App() {
  async function checkUser(){
    const user =await getCurrentUser();
    console.log('user : ', user);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => handleSignInClick()}>
          Sign in with FaceBook
        </button>
        <button onClick={() => signInWithRedirect()}>
          sign in
        </button>
        <button onClick={checkUser}>
          Check User
        </button>
      </header>
    </div>
  );
}

export default App;
