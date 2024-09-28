import React from "react";
import Quickloan from "../../../assets/Quickloan.svg";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Loan = ({ toggle, isOpen }) => {
  return (
    <main>
      <div className="px-4 py-3 border-b-[1.2px] hover:bg-[#F0F7EB80]">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("quickLoan")}
        >
          <div className="flex justify-center gap-2">
            <img src={Quickloan} alt="QuickLoan" />
            <span className="text-sm">Quick Loan</span>
          </div>
          {isOpen.quickLoan ? <FiChevronRight /> : <FiChevronDown />}
        </div>
        {isOpen.quickLoan && (
          <div className="ml-4 mt-2 text-[#515251] text-sm">
            <ul role="list" className="marker:text-[#11453B] list-disc">
              <li>
                <NavLink to="/quick-loan" className="block py-2">
                  Application
                </NavLink>
              </li>
              <li>
                <NavLink to="/quick-loan" className="block py-2">
                  Manage Loans
                </NavLink>
              </li>
              <li>
                <NavLink to="/quick-loan" className="block py-2">
                  Loan History
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
};

export default Loan;
