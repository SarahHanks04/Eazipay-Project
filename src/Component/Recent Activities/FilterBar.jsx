import React from "react";

const FilterBar = ({ onFilter }) => {
  return (
    <select
      className="border rounded px-4 py-2"
      onChange={(e) => onFilter(e.target.value)}
    >
      <option value="">All Activities</option>
      <option value="bonus">Bonus</option>
      <option value="salary">Salary</option>
      <option value="new_employee">New Employee</option>
    </select>
  );
};

export default FilterBar;
