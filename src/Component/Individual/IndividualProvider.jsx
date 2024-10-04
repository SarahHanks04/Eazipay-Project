import axios from "axios";
import React, { createContext, useState } from "react";

export const IndividualContext = createContext();

const IndividualProvider = ({ children }) => {
  const [balance, setBalance] = useState(false);
  const [user, setUser] = useState("");
  const [error, setError] = useState(null); // Error state

  // Toggle Balance Visibility
  const toggleBalance = () => {
    setBalance((prev) => !prev);
  };

  // const login = async (username, password) => {
  //   try {
  //     const response = await axios.get("https://jsonplaceholder.typicode.com/users", {
  //       username,
  //       password,
  //     });
  //     setUser(response.data); // Set the user data returned by the API
  //     setError(null); // Clear any previous errors
  //   } catch (err) {
  //     console.error("Login failed", err);
  //     setError("Invalid username or password");
  //   }
  // };

  const login = async (username, password) => {
    try {
      // Send a GET request to get all users
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      
      // Simulate login by checking if username exists
      const user = response.data.find((user) => user.username === username);
  
      if (user) {
        setUser(user); // Set user data if the username matches
        setError(null); // Clear any previous errors
      } else {
        throw new Error("Invalid username");
      }
    } catch (err) {
      console.error("Login failed", err);
      setError("Invalid username or password");
    }
  };

  // Logout function
  const logout = () => {
    setUser("");
  };

  const values = {
    balance,
    setBalance,
    toggleBalance,
    user,
    login,
    logout,
    error,
  };
  return (
    <IndividualContext.Provider value={values}>
      {children}
    </IndividualContext.Provider>
  );
};

export default IndividualProvider;
