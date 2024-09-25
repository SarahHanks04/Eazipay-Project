import React, { useState } from "react";
import SearchIcon from "../../../assets/Searchicon.svg";
import ArchivedICon from "../../../assets/ArchivedICon.svg";

const SearchBar = () => {
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const handleArchive = () => {
    if (selectedEmployees.length > 0) {
      dispatch(archiveEmployees(selectedEmployees));
    }
  };
  
  return (
    <div className="w-full flex items-center justify-between mb-4">
      <div className="relative w-full flex-1">
        <input
          type="text"
          placeholder="Search"
          className="w-full pr-10 pl-4 py-2 border-[0.3px] border-[#2C3E53] rounded-[12px] focus:outline-none focus:border-[#11453B]"
        />
        <span className="absolute inset-y-0 right-2 flex items-center">
          <img src={SearchIcon} alt="Search Icon" />
        </span>
      </div>

      <button
        onClick={handleArchive}
        className="ml-4 bg-[#F2F1F1] px-[14px] py-4 rounded-[8px] flex items-center justify-center"
      >
        <img src={ArchivedICon} alt="Archive Icon" />
      </button>
    </div>
  );
};

export default SearchBar;
