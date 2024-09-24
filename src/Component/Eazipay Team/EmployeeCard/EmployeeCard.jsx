import React from "react";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card flex justify-between items-center border-b p-4">
      <div className="flex items-center">
        <div className="flex">
          <img
            src={employee.image}
            alt={employee.name}
            className="rounded-full w-10 h-10"
          />
          <h4 className="font-bold">{employee.name}</h4>
        </div>
        <p>{employee.department}</p>
        <div className="ml-4">
          <p>
            {employee.sex} | {employee.type}
          </p>
          <div>
            <p className="text-[#11453B] text-[24px] font-bold">{employee.salary}</p>
          </div>
        </div>
      </div>

      <div>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default EmployeeCard;
