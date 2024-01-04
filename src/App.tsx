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
import AppLayout from "./Applayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./state/store";
import { setLogin } from "./state";
import createGuest from "./services/createGuest";
import getGuest from "./services/getGuest";
import Dashboard from "./Components/Dashboard/Dashboard";
import ContentLoader from "./Components/ContentLoader/ContentLoder";
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
      { path: "/dashboard", element: <Dashboard /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  // async function checkUser() {
  //   const { username, userId, signInDetails } = await getCurrentUser();
  //   console.log(`The username: ${username}`);
  //   console.log(`The userId: ${userId}`);
  //   console.log(`The signInDetails: ${signInDetails}`);
  //   console.log("-----------------------------------");

  //   // const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
  //   // console.log(accessToken?.toString());
  //   // console.log(idToken?.toString());
  //   // console.log("-----------------------------------");

  //   const user2 = await fetchUserAttributes();
  //   console.log("user : ", user2);
  //   const user5 = await fetchAuthSession();
  //   console.log("user : ", user5);
  // }

  // const [profilePicUrl, setProfilePicUrl] = useState("");

  // useEffect(() => {
  //   const getProfileData = async () => {
  //     try {
  //       const user = await fetchUserAttributes();
  //       const accessToken = user.profile;
  //       const profilePicResponse = await axios.get(
  //         `https://graph.facebook.com/me?fields=picture&redirect=false&access_token=${accessToken}`
  //       );
  //       const picUrl = profilePicResponse.data.picture.data.url;
  //       console.log(picUrl);
  //       setProfilePicUrl(picUrl);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getProfileData();
  // }, []);
  // function handleSignOutClick() {
  //   signOut();
  //   console.log("User is signed out");
  // }

  // async function getFriends() {
  //   const user = await fetchUserAttributes();
  //   const name = user.name;
  //   console.log("Name : " + name);
  //   const email = user.email;
  //   console.log("Email : " + email);
  //   const phoneNumber = user.phone_number;
  //   console.log("PhoneNumber : " + phoneNumber);
  //   const gender = user.gender;
  //   console.log("Gender : " + gender);

  //   const accessToken = user.profile;
  //   axios
  //     .get(`https://graph.facebook.com/me/friends?access_token=${accessToken}`)
  //     .then((response) => {
  //       console.log("User Friends : ");
  //       console.log(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  //   axios
  //     .get(
  //       `https://graph.facebook.com/me?fields=picture&access_token=${accessToken}`
  //     )
  //     .then((response) => {
  //       console.log("User Profile Pic : ");
  //       console.log(response.data.picture.data.url);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  //   axios
  //     .get(
  //       `https://graph.facebook.com/me?fields=gender&access_token=${accessToken}`
  //     )
  //     .then((response) => {
  //       console.log("User Gender : ");
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
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
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.app.user);
  const mode = useSelector((state: any) => state.app.mode);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    if (!user) {
      try {
        let loggedInUser: any = await fetchUserAttributes();
        // console.log(loggedInUser.identities);
        const identitiesString = loggedInUser.identities;
        const identitiesArray = JSON.parse(identitiesString);
        const userId = identitiesArray[0].userId;

        console.log(userId);
        if (loggedInUser) {
          let group: any = null;
          let faceBookID : any = null;
          if (
            loggedInUser.identities &&
            loggedInUser.identities.toString().includes("Facebook")
          ) {
            group = "Facebook";
            faceBookID =  userId;
          } else {
            group = "Cognito";
          }
          // console.log(group);
          // console.log(loggedInUser.sub);
          let currentUser = await getGuest(loggedInUser.sub);
          console.log(currentUser);
          if (!currentUser) {
            console.log("case1");
            let newUser = await createGuest(loggedInUser, group , faceBookID);
            dispatch(setLogin({ user: newUser }));
          } else {
            console.log("case2");
            dispatch(setLogin({ user: currentUser }));
          }
        }

      } catch (e: any) {
        console.log(e);
        console.log("not logged in");
        localStorage.removeItem("user");
        dispatch(setLogin({ user: null }));
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [user]);

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
