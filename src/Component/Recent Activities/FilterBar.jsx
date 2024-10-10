import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Filter from "../../assets/Filter.svg";

const FilterBar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="relative flex items-center ml-2">
      {/* Filter button with image and text */}
      <button
        onClick={toggleDropdown}
        className="flex items-center border-[1px] border-[#B5B6B5] bg-white rounded-full text-[#8D8E8D] px-[12px] py-[6px] md:px-[16px] md:py-[8px] w-full max-w-[150px] justify-between"
      >
        <img src={Filter} alt="Filter" className="w-4 h-4 mr-2" />
        <span className="text-sm md:text-base">Filter</span>
      </button>

      {/* Dropdown menu */}
      {dropdown && (
        <div className="absolute top-10 left-0 bg-white border rounded-lg shadow-lg py-2 w-[150px] md:w-[200px]">
          <NavLink
            to="/filter/bonus"
            className="block px-4 py-2 hover:bg-gray-200 text-[#4caf50] text-sm md:text-base"
            activeClassName="font-bold"
            onClick={() => setDropdown(false)}
          >
            Bonus
          </NavLink>
          <NavLink
            to="/filter/salary"
            className="block px-4 py-2 hover:bg-gray-200 text-[#4caf50] text-sm md:text-base"
            activeClassName="font-bold"
            onClick={() => setDropdown(false)}
          >
            Salary
          </NavLink>
          <NavLink
            to="/filter/new_employee"
            className="block px-4 py-2 hover:bg-gray-200 text-[#4caf50] text-sm md:text-base"
            activeClassName="font-bold"
            onClick={() => setDropdown(false)}
          >
            New Employee
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
