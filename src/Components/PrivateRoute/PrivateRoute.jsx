import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const state = {
    from:location
  }
  if (loading) {
    return <div>Loading</div>;
  }
  if (!user?.uid) {
    return (
      <Navigate to={"/login"} state={ {from: location} } replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
