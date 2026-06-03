import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const UserProtectWrapper = ({ children }) => {
  const { isUserLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, [isUserLoggedIn, navigate]);

  return <>{children}</>;
};

export default UserProtectWrapper;
