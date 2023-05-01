import React, { useContext } from "react";
import { myContext } from "../Providers/Providers";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  // const location = useLocation();

  // console.log(location);
  const { user, loading } = useContext(myContext);
  if (loading) {
    return (
      <progress
        className="progress progress-secondary w-56"
        value="100"
        max="100"></progress>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
