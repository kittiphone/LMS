import { createContext, useState } from "react";

// Define the context for the login state and actions
export const LoginContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

// Define the LoginProvider component to wrap the app with the context provider
export const LoginProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Define the login function to set the authentication state
  const login = () => {
    setIsAuthenticated(true);
  };

  // Define the logout function to clear the authentication state
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  // Initialize the login state and actions in the context value
  const value = {
    isAuthenticated,
    login,
    logout,
  };

  // Render the children with the context provider
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
