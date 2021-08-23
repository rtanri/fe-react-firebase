import React, { useState } from 'react'

export const AuthContext = React.createContext({})

export default function AuthProvider({ children }) {
  
  const [isLoading, setIsLoading] = useState(true)
  const [token, setToken] = useState(null)
  const [authUser, setAuthUser] = useState(null)
  
  const login = async (email, password) => {
  }
  
  const logout = () => {
  }
  
  return (
    <AuthContext.Provider value={{ login, logout, isLoading, token, authUser }}>
      {children}
    </AuthContext.Provider>
  )
}
