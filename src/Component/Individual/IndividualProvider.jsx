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

  const login = async (username, password) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      setUser(response.data); // Set the user data returned by the API
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error("Login failed", err);
      setError("Invalid username or password");
    }
  };

  // const login = async (username, password) => {
  //   try {
  //     const response = await axios.post(
  //       "https://dummyjson.com/auth/login",
  //       {
  //         username: username,
  //         password: password,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log("Login successful:", response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Login failed", error);
  //     throw error;
  //   }
  // };

  // Logout function
  const logout = () => {
    setUser(""); // Clear the user state to simulate logout
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
