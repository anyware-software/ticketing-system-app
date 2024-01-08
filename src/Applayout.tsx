import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser === "true" && location.pathname === "/") {
  //     navigate("/dashboard");
  //   }
  // }, [navigate, location]);

  useEffect(() => {
    const checkLocalStorage = async () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser === "true" && location.pathname === "/") {
        navigate("/dashboard");
      } 
      if(!storedUser) {
        await signOut();
      }
    };

    checkLocalStorage();
  }, [navigate, location]);

  return (
    <>
      <Outlet />
    </>
  );
};
export default AppLayout;
