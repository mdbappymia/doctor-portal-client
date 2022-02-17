import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useLocation, Navigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const PrivetRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <CircularProgress />;
  }

  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivetRoute;
