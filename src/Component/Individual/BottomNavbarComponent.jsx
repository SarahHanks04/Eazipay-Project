import React from "react";
import { Link } from "react-router-dom";
import HomeColored from "../../assets/HomeColored.svg";
import User from "../../assets/User.svg";
import Payroll from "../../assets/Payroll.svg";
import Quickloan from "../../assets/Quickloan.svg";
import Group from "../../assets/Group.png";

const BottomNavbarComponent = () => {
  return (
    <nav className="bg-white fixed bottom-0 left-0 right-0 shadow-lg p-4 mt-[5rem]">
      <ul className="flex justify-around text-sm">
        <li>
          <Link to="/home" className="flex flex-col items-center">
            <span>
              <img src={HomeColored} alt="Home" />
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/employee" className="flex flex-col items-center">
            <span>
              <img src={User} alt="useer" />
            </span>
            Employee
          </Link>
        </li>
        <li>
          <Link to="/payroll" className="flex flex-col items-center">
            <span>
              <img src={Payroll} alt="Payroll" />
            </span>
            Payroll
          </Link>
        </li>
        <li>
          <Link to="/loans" className="flex flex-col items-center">
            <span>
              <img src={Quickloan} alt="Loand" />
            </span>
            Loans
          </Link>
        </li>
        <li>
          <Link to="/more" className="flex flex-col items-center">
            <span>
              <img src={Group} alt="More" />
            </span>
            More
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbarComponent;
