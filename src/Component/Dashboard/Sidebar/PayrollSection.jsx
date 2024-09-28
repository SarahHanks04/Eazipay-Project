import React from "react";
import Payroll from "../../../assets/Payroll.svg";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const PayrollSection = ({ toggle, isOpen }) => {
  return (
    <main>
      <div className="px-4 py-3 border-b-[1.2px] hover:bg-[#F0F7EB80]">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("payroll")}
        >
          <div className="flex justify-center gap-2">
            <img src={Payroll} alt="Payroll" />
            <span className="text-sm">Payroll</span>
          </div>
          {isOpen.payroll ? <FiChevronRight /> : <FiChevronDown />}
        </div>
        {isOpen.payroll && (
          <div className="ml-4 mt-2 text-[#515251] text-sm">
            <ul role="list" className="marker:text-[#11453B] list-disc">
              <li>
                <NavLink to="/add-salary" className="block py-2">
                  Add Salary
                </NavLink>
              </li>
              <li>
                <NavLink to="/view-salary" className="block py-2">
                  View Salary
                </NavLink>
              </li>
              <li>
                <NavLink to="/edit-salary" className="block py-2">
                  Edit Salary
                </NavLink>
              </li>
              <li>
                <NavLink to="/run-payroll" className="block py-2">
                  Run Payroll
                </NavLink>
              </li>
              <li>
                <NavLink to="/report" className="block py-2">
                  Report
                </NavLink>
              </li>
              <li>
                <NavLink to="/payroll-history" className="block py-2">
                  Payroll History
                </NavLink>
              </li>
              <li>
                <NavLink to="/Analysis" className="block py-2">
                  Analysis
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
};

export default PayrollSection;
