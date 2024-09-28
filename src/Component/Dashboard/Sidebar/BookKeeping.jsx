import React from "react";
import Openbook from "../../../assets/Openbook.svg";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const BookKeeping = ({ isOpen, toggle }) => {
  return (
    <main>
      <div className="mb-2 px-4 py-2 border-b-[1.2px]">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("bookKeeping")}
        >
          <div className="flex justify-center gap-2">
            <img src={Openbook} alt="Openbook" />
            <span className="text-sm">Book Keeping</span>
          </div>
          {isOpen.bookKeeping ? <FiChevronRight /> : <FiChevronDown />}
        </div>
        {isOpen.bookKeeping && (
          <div className="ml-4 mt-2 text-[#515251] text-sm">
            <ul role="list" className="marker:text-black list-disc">
              <li>
                <NavLink to="/inventory" className="block py-2">
                  Inventory
                </NavLink>
              </li>
              <li>
                <NavLink to="/invoice" className="block py-2">
                  Invoice
                </NavLink>
              </li>
              <li>
                <NavLink to="/receipt" className="block py-2">
                  Receipt
                </NavLink>
              </li>
              <li>
                <NavLink to="/client" className="block py-2">
                  Client
                </NavLink>
              </li>
              <li>
                <NavLink to="/book-keeping" className="block py-2">
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
};

export default BookKeeping;
