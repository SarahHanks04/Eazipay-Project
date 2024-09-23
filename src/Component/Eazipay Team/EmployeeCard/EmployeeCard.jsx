import React from "react";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card flex justify-between items-center border-b p-4">
      <div className="flex items-center">
        <img
          src={employee.image}
          alt={employee.name}
          className="rounded-full w-10 h-10"
        />
        <div className="ml-4">
          <h4 className="font-bold">{employee.name}</h4>
          <p>
            {employee.department} | {employee.sex}
          </p>
        </div>
      </div>
      <div>
        <p className="text-green-600 font-bold">{employee.salary}</p>
      </div>
      <div>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default EmployeeCard;
