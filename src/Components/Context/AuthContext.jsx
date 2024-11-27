import React, { createContext, useContext, useState } from "react";

// Create AuthContext
export const AuthContext = createContext(); // Make sure this is exported

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuth: false,
    username: null,
    role: null,
  });

  const login = (username, password) => {
    if (username === "admin@kingsmen.com" && password === "admin@123") {
      setAuthState({ isAuth: true, username, role: "admin" });
      return { success: true, role: "admin" };
    } else if (username === "user@kingsmen.com" && password === "user@123") {
      setAuthState({ isAuth: true, username, role: "user" });
      return { success: true, role: "user" };
    } else {
      return { success: false, message: "Invalid credentials. Please try again." };
    }
  };

  const logout = () => {
    setAuthState({ isAuth: false, username: null, role: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
