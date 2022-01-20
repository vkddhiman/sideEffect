import React, { useState, useEffect } from "react";

const AuthContexts = React.createContext({
  isLoggedIn : false,
  onLogout : () => {},
  onLogin : (email, password) => {}
})

export const AuthContextsProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  }

  return (
    <AuthContexts.Provider
      value={{ 
        isLoggedIn : isLoggedIn,
        onLogout : logoutHandler,
        onLogin : loginHandler
      }}
    >
      {props.children}
    </AuthContexts.Provider>)
}

export default AuthContexts;