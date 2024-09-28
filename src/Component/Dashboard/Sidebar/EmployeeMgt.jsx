import React from "react";
import User from "../../../assets/User.svg";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const EmployeeMgt = ({ toggle, isOpen }) => {
  return (
    <main>
      <div className="py-4 border-b-[1.2px] hover:bg-[#F0F7EB80]">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("employeeManagement")}
        >
          <div className="flex justify-center gap-2">
            <img src={User} alt="Users" />
            <span className="text-sm flex-shrink-0">Employee Management</span>
          </div>
          {isOpen.employeeManagement ? <FiChevronRight /> : <FiChevronDown /> }
        </div>
        {isOpen.employeeManagement && (
          <div className="ml-4 mt-2 text-[#515251] text-sm">
            <ul role="list" className="marker:text-[#11453B] list-disc">
              <li>
                <NavLink to="/add-employee" className="block py-2">
                  Add Employee
                </NavLink>
              </li>
              <li>
                <NavLink to="/view-employee" className="block py-2">
                  View Employee
                </NavLink>
              </li>
              <li>
                <NavLink to="/edit-employee" className="block py-2">
                  Edit Employee
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
};

export default EmployeeMgt;
