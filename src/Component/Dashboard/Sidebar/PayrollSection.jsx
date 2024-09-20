import React from "react";
import Payroll from "../../../assets/Payroll.svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const PayrollSection = ({ toggle, openSections }) => {
  return (
    <main>
      <div className="mb-2 px-4 py-2 border-b-[1.2px]">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("payroll")}
        >
          <div className="flex justify-center gap-2">
            <img src={Payroll} alt="Payroll" />
            <span className="text-sm">Payroll</span>
          </div>
          {openSections.payroll ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.payroll && (
          <div className="ml-4 mt-2 text-[#515251] text-sm">
            <NavLink to="/payroll" className="block py-2">
              Payroll Details
            </NavLink>
          </div>
        )}
      </div>
    </main>
  );
};

export default PayrollSection;
