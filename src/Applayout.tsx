import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AppLayout = () => {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser === "true" && location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [navigate, location]);
  
  return (
    <>
      <Outlet />
    </>
  );
};
export default AppLayout;
