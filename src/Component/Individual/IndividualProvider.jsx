// import axios from "axios";
// import React, { createContext, useState } from "react";

// export const IndividualContext = createContext();

// const IndividualProvider = ({ children }) => {
//   const [balance, setBalance] = useState(false);
//   const [user, setUser] = useState("");
//   const [error, setError] = useState(null); // Error state

//   // Toggle Balance Visibility
//   const toggleBalance = () => {
//     setBalance((prev) => !prev);
//   };

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

//

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
      // In a real application, you would have a different API endpoint for registration
      const response = await axios.post("https://reqres.in/api/register", {
        // username,
        email,
        password,
      });

      // Assuming a successful registration will return user data or a success message
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
