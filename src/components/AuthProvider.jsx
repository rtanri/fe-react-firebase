import React, { useState } from "react";
import "firebase/auth";
import { getFirebaseInstance } from "../services/firebase/firebase";

// start initializing the context - empty object
export const AuthContext = React.createContext({});

// to prep states before transfering to all componentns
export default function AuthProvider({ children }) {
  const firebase = getFirebaseInstance();

  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [authUser, setAuthUser] = useState(null);

  const register = async (email, password) => {
    try {
      const registerResp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      const tokenResp = await registerResp.user.getIdToken();
      setToken(tokenResp);
    } catch (err) {
      setToken(null);
      return false;
    }

    return true;
  };

  const login = async (email, password) => {};

  const logout = () => {
    setIsLoading(false);
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
