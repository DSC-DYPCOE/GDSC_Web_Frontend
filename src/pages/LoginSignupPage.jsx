import React, { useEffect } from "react";
import Login from "../components/Login/Login";

const LoginSignupPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return <Login/>;
};

export default LoginSignupPage;
