import React, { createContext, useState } from "react";

export const IndividualContext = createContext();

const IndividualProvider = ({ children }) => {
  const [balance, setBalance] = useState(false);

  const toggleBalance = () => {
    setBalance((prev) => !prev);
  };

  const values = {
    balance,
    setBalance,
    toggleBalance,
  };
  return (
    <IndividualContext.Provider value={values}>
      {children}
    </IndividualContext.Provider>
  );
};

export default IndividualProvider;
