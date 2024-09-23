import React from "react";

const FloatingButton = () => {
  const handleAddClick = () => {
    console.log("Add new employee");
  };

  return (
    <button
      className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg"
      onClick={handleAddClick}
    >
      +
    </button>
  );
};

export default FloatingButton;
