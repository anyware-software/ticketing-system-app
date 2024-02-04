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
        if (loggedInUser) {
          let group: any = null;
          let faceBookID: any = null;
          if (
            loggedInUser.identities &&
            loggedInUser.identities.toString().includes("Facebook")
          ) {
            group = "Facebook";
            faceBookID = userId;
          } else {
            group = "Cognito";
          }
          let currentUser = await getGuest(loggedInUser.sub);
          let currentUserGender = loggedInUser.gender          
          if (!currentUser) {
            // console.log("case1");
            let newUser = await createGuest(loggedInUser, group, faceBookID ,currentUserGender);
            dispatch(setLogin({ user: newUser }));
          } else {
            // console.log("case2");
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
