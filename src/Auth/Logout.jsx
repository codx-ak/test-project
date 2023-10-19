import React, { useContext, useEffect } from "react";
import { Authenticate } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  //auth function and page navigate to home page
  const { setAuth } = useContext(Authenticate);
  const navigate = useNavigate();
  useEffect(() => {
    setAuth(false);
    navigate("/");
  });
  return <></>;
};

export default Logout;
