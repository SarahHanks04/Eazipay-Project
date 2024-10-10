import React from "react";
import Filter from "../../assets/Filter.svg";

const FilterBar = ({ onFilter }) => {
  return (
    
    <div className="relative flex items-center w-[25%] lg:w-[10%] min-w-[50px] ml-2">
      <select
        className="border-[1px] border-[#B5B6B5] rounded-full p-2 text-[#8D8E8D] w-full pr-10"
        onChange={(e) => onFilter(e.target.value)}
      >
        <option value="">Filter</option>
        <option value="bonus">Bonus</option>
        <option value="salary">Salary</option>
        <option value="new_employee">New Employee</option>
      </select>
      <span className="absolute right-2 p-2 rounded-full">
        <img src={Filter} alt="Filter" className="w-4 h-4" />
      </span>
    </div>
  );
};

export default FilterBar;
