import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";


const EmployeeList = ({ employees }) => {
  return (
    <div className="employee-list w-full">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
