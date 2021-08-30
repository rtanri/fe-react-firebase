import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const { token } = useContext(AuthContext);

  return (
    <Route
      {...otherProps}
      render={props =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
