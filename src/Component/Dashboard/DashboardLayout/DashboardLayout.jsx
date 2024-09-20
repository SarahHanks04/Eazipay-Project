import React from "react";
import MainSidebar from "../Sidebar/MainSidebar";
import CompanyLogo from "../../../assets/CompanyLogo.svg";
import Notification from "../../../assets/Notification.svg";
import KaluAbasiama from "../../../assets/KaluAbasiama.svg";
import MainDashboard from "../Dashboard/MainDashboard";
import "../DashboardLayout/Layout.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-container flex bg-[#E7E8E7]">
      <MainSidebar className="fixed top-0 left-0 z-10 bg-white w-[272px] h-[1024px]" />

      <div className="flex-1">
        <nav className="fixed top-0 left-1/6 w-[77%] z-10 bg-white py-2 shadow-md flex justify-between px-6 lg:px-[4rem]">
          <div>
            <img src={CompanyLogo} alt="Company Logo" />
          </div>
          <div className="flex gap-6 lg:gap-[4rem]">
            <img src={Notification} alt="Notification" width={27} />
            <div className="flex gap-3 items-center">
              <img src={KaluAbasiama} alt="Kalu Abasiama" width={40} />
              <div className="text-center">
                <h1 className="text-[#2B2B2B] text-sm lg:text-[16px] pt-3">
                  {" "}
                  Kalu Abasiama{" "}
                </h1>
                <p className="text-[#898989] text-xs lg:text-sm text-start">
                  {" "}
                  Admin{" "}
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <MainDashboard className="pt-16" />
    </div>
  );
};

export default DashboardLayout;
