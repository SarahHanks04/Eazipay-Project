import React from "react";
import Wallet from "../../../assets/Wallet.svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const WalletSection = ({ toggle, openSections }) => {
  return (
    <main>
      <div className="mb-2 px-4 py-2 border-b-[1.2px]">
        <div
          className="flex justify-between items-center cursor-pointer text-[#515251]"
          onClick={() => toggle("wallet")}
        >
          <div className="flex justify-center gap-2">
            <img src={Wallet} alt="wallet" />
            <span className="text-sm">Wallet</span>
          </div>
          {openSections.wallet ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.wallet && (
          <div className="ml-4 mt-2">
            <NavLink to="/wallet" className="block py-2 text-[#515251]">
              Wallet Balance
            </NavLink>
          </div>
        )}
      </div>
    </main>
  );
};

export default WalletSection;
