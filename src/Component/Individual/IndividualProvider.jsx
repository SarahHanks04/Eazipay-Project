import axios from "axios";
import React, { createContext, useState } from "react";

export const IndividualContext = createContext();

const IndividualProvider = ({ children }) => {
  const [balance, setBalance] = useState(false);
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(null);

  // Toggle Balance Visibility
  const toggleBalance = () => {
    setBalance((prev) => !prev);
  };

  // Login function
  const login = async (username, password) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const user = response.data.find((user) => user.username === username);

      if (user) {
        setUser(user);
        setError(null);
      } else {
        throw new Error("Invalid username");
      }
    } catch (err) {
      console.error("Login failed", err);
      setError("Invalid username or password");
    }
  };

  // Register function
  const register = async (username, email, password) => {
    try {
      // API Endpoint For Registration
      const response = await axios.post("https://reqres.in/api/register", {
        // username,
        email,
        password,
      });

      // Return User Data or Success Message
      setRegistrationSuccess("Registration successful!");
      setError(null);
    } catch (err) {
      setError("Registration failed, please try again.");
      setRegistrationSuccess(null);
      console.error(err);
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
    register,
    registrationSuccess,
  };

  return (
    <IndividualContext.Provider value={values}>
      {children}
    </IndividualContext.Provider>
  );
};

export default IndividualProvider;
