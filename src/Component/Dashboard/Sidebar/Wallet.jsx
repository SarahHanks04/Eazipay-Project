import React from "react";
import Wallet from "../../../assets/Wallet.svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const WalletSection = ({ toggle, isOpen }) => {
  return (
    <main>
      <div className="px-4 py-3 border-b-[1.2px] hover:bg-[#F0F7EB80]">
        <div
          className="flex justify-between items-center cursor-pointer text-[#515251]"
          onClick={() => toggle("wallet")}
        >
          <div className="flex justify-center gap-2">
            <img src={Wallet} alt="wallet" />
            <span className="text-sm">Wallet</span>
          </div>
          {isOpen.wallet ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {isOpen.wallet && (
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
