import React from "react";
import Magnifier from "../../assets/Magnifier.svg";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative flex items-center w-full max-w-md">
      <input
        type="text"
        placeholder="Search employee"
        className="border border-[#B5B6B5] rounded-[20px] px-4 py-2 w-full pr-10 placeholder:text-sm"
        onChange={(e) => onSearch(e.target.value)}
      />
      <span className="absolute right-[1.88px] bg-[#D9EBCD] py-[9.7px] px-10 rounded-tr-[20px] rounded-br-[20px]">
        <img src={Magnifier} alt="Magnifier" className="w-5 h-5" />
      </span>
    </div>
  );
};

export default SearchBar;
