import React from "react";
import CompanyLogo from "../../../assets/CompanyLogo.svg";
import Bell from "../../../assets/Bell.svg";
import KaluAbasiama from "../../../assets/KaluAbasiama.svg";
import MainDashboard from "../Dashboard/MainDashboard";
import "../DashboardLayout/Layout.css";
import SidebarProvider from "../Sidebar/MainSidebar";
import { useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    // Clear tokens or user data from localStorage or context if any
    localStorage.removeItem("token"); // Example if token is stored in localStorage
    navigate("/login"); // Redirect to login page
  };
  return (
    <div className="dashboard-container flex bg-[#E7E8E7]">
      <SidebarProvider className="fixed top-0 left-0 z-10 bg-white w-[272px] h-[1024px]" />

      <div className="flex-1">
        <nav className="fixed top-0 left-1/6 w-[77%] z-10 bg-white py-2 shadow-md flex justify-between px-6 lg:px-[4rem]">
          <div>
            <img src={CompanyLogo} alt="Company Logo" />
          </div>
          <div className="flex gap-6 lg:gap-[4rem]">
            <img src={Bell} alt="Notification" width={27} />
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
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="mt-4 lg:mt-4 text-red-500 hover:bg-red-700 transition duration-300 text-[10px]"
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
      <MainDashboard className="pt-16" />
    </div>
  );
};

export default DashboardLayout;
