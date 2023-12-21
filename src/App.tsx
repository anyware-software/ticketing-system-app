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
import { LoginSocialFacebook, IResolveParams } from "reactjs-social-login";

import { FacebookLoginButton } from "react-social-login-buttons";

import { User } from "./Components/User/user";
import AppLayout from "./Applayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";

//-------------------------------------------------------------

const provider = {
  custom: "Facebook",
};

function handleSignInClick() {
  signInWithRedirect({ provider });
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      { index: true, element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  async function checkUser() {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);
    console.log("-----------------------------------");

    // const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    // console.log(accessToken?.toString());
    // console.log(idToken?.toString());
    // console.log("-----------------------------------");

    const user2 = await fetchUserAttributes();
    console.log("user : ", user2);
    const user5 = await fetchAuthSession();
    console.log("user : ", user5);
  }

  const [profilePicUrl, setProfilePicUrl] = useState("");

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const user = await fetchUserAttributes();
        const accessToken = user.profile;
        const profilePicResponse = await axios.get(
          `https://graph.facebook.com/me?fields=picture&redirect=false&access_token=${accessToken}`
        );
        const picUrl = profilePicResponse.data.picture.data.url;
        console.log(picUrl);
        setProfilePicUrl(picUrl);
      } catch (error) {
        console.error(error);
      }
    };

    getProfileData();
  }, []);
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
    const user = await fetchUserAttributes();
    const name = user.name;
    console.log("Name : " + name);
    const email = user.email;
    console.log("Email : " + email);
    const phoneNumber = user.phone_number;
    console.log("PhoneNumber : " + phoneNumber);
    const gender = user.gender;
    console.log("Gender : " + gender);

    const accessToken = user.profile;
    axios
      .get(`https://graph.facebook.com/me/friends?access_token=${accessToken}`)
      .then((response) => {
        console.log("User Friends : ");
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(
        `https://graph.facebook.com/me?fields=picture&access_token=${accessToken}`
      )
      .then((response) => {
        console.log("User Profile Pic : ");
        console.log(response.data.picture.data.url);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(
        `https://graph.facebook.com/me?fields=gender&access_token=${accessToken}`
      )
      .then((response) => {
        console.log("User Gender : ");
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //-------------------------------------------------------------------------------

  // const [provider, setProvider] = useState("");
  // const [profile, setProfile] = useState<any>();
  // const onLoginStart = useCallback(() => {
  //   alert("login start");
  // }, []);
  // const onLogoutSuccess = useCallback(() => {
  //   setProfile(null);
  //   setProvider("");
  //   alert("logout success");
  // }, []);

  return (
    <>
    {/* <div className="App">
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
          <h2>User Profile</h2>
          <img src={profilePicUrl} alt="User Profile" />
        </div>
      </header>
    </div> */}
    <RouterProvider router={router} />
    </>
  );
}

export default App;
