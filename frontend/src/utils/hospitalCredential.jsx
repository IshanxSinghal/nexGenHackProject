// src/contexts/AuthContext.jsx
import { createContext, useState } from "react";

// 1. Create the context
export const HospitalAuthContext = createContext();

// 2. Create the provider
export const HospitalAuthProvider = ({ children }) => {
  const [hospitalId, setHospitalId] = useState(1234); // initially empty
  const [password, setPassword] = useState(""); // initially empty

  // Function to login (update global values)
  const login = (id, pass) => {
    setHospitalId(id);
    setPassword(pass);
  };

  // Function to logout (clear values)
  const logout = () => {
    setHospitalId("");
    setPassword("");
  };

  return (
    <HospitalAuthContext.Provider
      value={{ hospitalId, password, login, logout }}
    >
      {children}
    </HospitalAuthContext.Provider>
  );
};
