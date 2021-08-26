import React, { useState, useEffect } from "react";
import "firebase/auth";
import { useCookies } from "react-cookie";
import { getFirebaseInstance } from "../services/firebase/firebase";

// start initializing the context - empty object
export const AuthContext = React.createContext({});

// to prep states before transfering to all componentns
export default function AuthProvider({ children }) {
  const AuthTokenCookieName = "auth_token";
  const firebase = getFirebaseInstance();

  const [cookies, setCookie, removeCookie] = useCookies(["auth_token"]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (cookies.auth_token) {
      setToken(cookies.auth_token);
    }
  }, [cookies]);

  const register = async (email, password) => {
    try {
      const registerResp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      const tokenResp = await registerResp.user.getIdToken();
      setToken(tokenResp);
      setCookie(AuthTokenCookieName, tokenResp, { path: "/", maxAge: 7200 });
      // setIsLoading(false);
    } catch (err) {
      setToken(null);
      removeCookie(AuthTokenCookieName);
      return false;
    }

    return true;
  };

  const login = async (email, password) => {
    try {
      const loginResp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const userToken = await loginResp.user.getIdToken();

      setToken(userToken);
      setAuthUser(loginResp.user.toJSON());

      return true;
    } catch (err) {
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    removeCookie(AuthTokenCookieName);
  };

  return (
    // specify the value to expose outside
    <AuthContext.Provider
      value={{ login, logout, register, isLoading, token, authUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
