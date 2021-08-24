import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const { isLoading, token } = useContext(AuthContext);

  // if (isLoading) {
  //   return (<p>Loading</p>)
  // }

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
