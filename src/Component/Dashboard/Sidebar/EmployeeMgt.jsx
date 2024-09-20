import React from "react";
import User from "../../../assets/User.svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const EmployeeMgt = ({ toggle, isOpen }) => {
  return (
    <main>
      <div className="mb-2 py-4 border-b-[1.2px]">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("employeeManagement")}
        >
          <div className="flex justify-center gap-2">
            <img src={User} alt="Users" />
            <span className="text-sm flex-shrink-0">Employee Management</span>
          </div>
          {isOpen.employeeManagement ? (
            <FiChevronUp />
          ) : (
            <FiChevronDown />
          )}
        </div>
        {isOpen.employeeManagement && (
          <div className="ml-4 mt-2 text-[#515251] text-sm">
            <NavLink to="/add-employee" className="block py-2">
              Add Employee
            </NavLink>
            <NavLink to="/employee-list" className="block py-2">
              Employee List
            </NavLink>
          </div>
        )}
      </div>
    </main>
  );
};

export default EmployeeMgt;
