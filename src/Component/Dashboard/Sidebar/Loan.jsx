import React from "react";
import Quickloan from "../../../assets/Quickloan.svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Loan = ({ toggle, openSections }) => {
  return (
    <main>
      <div className="mb-2 px-4 py-2 border-b-[1.2px]">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("quickLoan")}
        >
          <div className="flex justify-center gap-2">
            <img src={Quickloan} alt="QuickLoan" />
            <span className="text-sm">Quick Loan</span>
          </div>
          {openSections.quickLoan ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.quickLoan && (
          <div className="ml-4 mt-2 text-[#515251] text-sm">
            <NavLink to="/quick-loan" className="block py-2">
              Apply for Loan
            </NavLink>
          </div>
        )}
      </div>
    </main>
  );
};

export default Loan;
