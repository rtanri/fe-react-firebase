import React, { useState } from 'react'

// start initializing the context - empty object
export const AuthContext = React.createContext({})

// to prep states before transfering to all componentns
export default function AuthProvider({ children }) {

  const [isLoading, setIsLoading] = useState(true)
  const [token, setToken] = useState(null)
  const [authUser, setAuthUser] = useState(null)
  
  const login = async (email, password) => {
    
  }
  
  const logout = () => {
    setIsLoading(false)
  }
  
  return (
    // specify the value to expose outside
    <AuthContext.Provider value={{ login, logout, isLoading, token, authUser }}>
      {children}
    </AuthContext.Provider>
  )
}
