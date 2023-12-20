import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  signInWithRedirect,
  getCurrentUser,
  fetchUserAttributes,
  signOut,
  fetchAuthSession,
} from "aws-amplify/auth";
import axios from "axios";
import {
  LoginSocialFacebook,
  IResolveParams,
} from "reactjs-social-login";

import {
  FacebookLoginButton,
} from 'react-social-login-buttons';

import { User } from './Components/User/user';

//-------------------------------------------------------------

const provider = {
  custom: "Facebook",
};

function handleSignInClick() {
  signInWithRedirect({ provider });
}

function App() {
  async function checkUser() {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);
    console.log("-----------------------------------");

    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    console.log(accessToken?.toString());
    console.log(idToken?.toString());
    console.log("-----------------------------------");

    const user2 = await fetchUserAttributes();
    console.log("user : ", user2);
    // const user5 = await fetchAuthSession()
    // console.log('user : ', user5);
  }

  function handleSignOutClick() {
    signOut();
    console.log("User is signed out");
  }

  // async function test(){
  //   const user = await fetchAuthSession()
  //   accessToken = user;
  //   console.log(accessToken.tokens?.accessToken.toString());
  // }
  // test()

  async function getFriends() {
    const user = await fetchAuthSession();
    // console.log(user.tokens?.accessToken.toString());
    const accessToken = user.tokens?.accessToken.toString();
    console.log(accessToken);
    //   axios.get(`https://graph.facebook.com/me/friends?access_token=${accessToken}`)
    // .then(response => {
    //   console.log(response.data);
    // })
    // .catch(error => {
    //   console.error(error);
    // });
    try {
      const response = await axios.get(
        `https://graph.facebook.com/me/friends?access_token=${accessToken}`
      );
      console.log("Facebook Friends:", response.data);
    } catch (error) {
      console.error("Error fetching Facebook friends:", error);
    }
  }
  //-------------------------------------------------------------------------------

  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();
  const onLoginStart = useCallback(() => {
    alert('login start')
  }, [])
  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    alert('logout success')
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div
          style={{
            marginBottom: "5vh",
          }}
        >
          <button onClick={() => handleSignInClick()}>
            Sign in with FaceBook
          </button>
          <button onClick={() => signInWithRedirect()}>sign in</button>
          <button onClick={checkUser}>Check User</button>
          <button onClick={() => handleSignOutClick()}>sign Out</button>
          <button onClick={() => getFriends()}>Get Friends</button>
        </div>
        <div>
        {provider && profile ? (
        <User provider={provider} profile={profile} onLogout={onLogoutSuccess} />
      ) : (
        <div className={`App ${provider && profile ? 'hide' : ''}`}>
          <h1 className='title'>ReactJS Social Login</h1>
          <LoginSocialFacebook
            isOnlyGetToken
            appId={process.env.REACT_APP_FB_APP_ID || ''}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }: IResolveParams) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
        </div>
      )}
        </div>
      </header>
    </div>
  );
}

export default App;
