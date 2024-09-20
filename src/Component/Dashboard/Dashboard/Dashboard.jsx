import React, { useState, useEffect } from "react";
import CompanyLogo from "../../../assets/CompanyLogo.svg";
import Notification from "../../../assets/Notification.svg";
import KaluAbasiama from "../../../assets/KaluAbasiama.svg";
import LineChart from "../../../assets/LineChart.svg";
import Eye from "../../../assets/Eye.svg";
import UserColored from "../../../assets/UserColored.svg";
import PayColored from "../../../assets/PayColored.svg";
import SendColored from "../../../assets/SendColored.svg";
import QuickLoanColored from "../../../assets/QuickLoanColored.svg";
import DownArrow from "../../../assets/DownArrow.svg";
import UpArrow from "../../../assets/UpArrow.png";
import Calendar from "../../../assets/Calendar.svg";

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [currentYear, setCurrentYear] = useState("");

  // State to control chart visibility
  const [isChartVisible, setIsChartVisible] = useState(false);

  // Toggle chart visibility
  const toggleChart = () => {
    setIsChartVisible((prev) => !prev);
  };

  useEffect(() => {
    const date = new Date();
    setCurrentDate(
      date.toLocaleDateString("en-GB", {
        weekday: "long",
      })
    );
    setFormattedDate(
      date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      })
    );
    setCurrentYear(date.getFullYear());
  }, []);

  return (
    <section className="bg-[#F2F1F1] min-h-screen mx-auto">
      <nav className=" fixed top-0 left-0 right-0 z-10 flex justify-between px-6 lg:px-[4rem] bg-white py-2 shadow-md">
        <div>
          <img src={CompanyLogo} alt="Company Logo" />
        </div>
        <div className="flex gap-6 lg:gap-[4rem]">
          <img src={Notification} alt="Notification" width={27} />
          <div className="flex gap-3 items-center">
            <img src={KaluAbasiama} alt="Kalu Abasiama" width={40} />
            <div className="text-center">
              <h1 className="text-[#2B2B2B] text-sm lg:text-[16px] pt-3">
                Kalu Abasiama
              </h1>
              <p className="text-[#898989] text-xs lg:text-sm text-start">
                Admin
              </p>
            </div>
          </div>
        </div>
      </nav>
      {/* Welcome Section */}
      <main className="pt-20 lg:pt-28 p-6 lg:p-16">
        <div className="text-center lg:text-left pb-6 lg:pb-10">
          <h1 className="text-xl text-[#292A29] font-sans lg:text-2xl font-bold">
            Welcome Abasiama
          </h1>
          <p className="text-[#292A29] pt-4 text-xs lg:text-sm">
            Pay and manage your employee in minutes
          </p>
        </div>

        {/* Wallet and Payroll Section using Grid */}
        <div className="grid grid-rows-2 grid-flow-col gap-4 sm:grid-cols-1 lg:grid-cols-2">
          {/* Wallet Balance Section */}
          <div className="bg-[#11453B] text-white p-4 sm:p-6 rounded-xl w-full row-span-1 col-span-2">
            <p className="text-[#D9EBCD] text-sm sm:text-base">
              Wallet Balance
            </p>
            <div className="flex flex-col lg:flex-row justify-between pt-4 items-start lg:items-center">
              <div className="flex gap-2 sm:gap-4 align-middle">
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold">
                  ₦12,560,078.00
                </h2>
                <span>
                  <img src={Eye} alt="eye" width={20} className="lg:w-[30px]" />
                </span>
              </div>
              <button className="mt-4 lg:mt-0 bg-[#D9EAD3] text-[#11453B] text-center px-4 sm:px-6 py-2 rounded-full transition-all hover:bg-[#c8e4bf] text-xs sm:text-sm lg:text-base">
                Fund Wallet
              </button>
            </div>
          </div>

          {/* Action Buttons Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 col-span-2">
            {/* Add Employee */}
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center transition-all hover:shadow-md">
              <img
                src={UserColored}
                alt="Add Employee"
                className="bg-[#FFEDEC] p-2 sm:p-3 rounded-xl m-auto"
              />
              <p className="text-[#515251] mt-2 text-xs sm:text-base">
                Add Employee
              </p>
            </div>

            {/* Pay Salaries */}
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center transition-all hover:shadow-md">
              <img
                src={PayColored}
                alt="Pay Salaries"
                className="bg-[#F0F7EB] p-2 sm:p-3 rounded-xl m-auto"
              />
              <p className="text-[#515251] mt-2 text-xs sm:text-base">
                Pay Salaries
              </p>
            </div>

            {/* Pay Compliances */}
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center transition-all hover:shadow-md">
              <img
                src={SendColored}
                alt="Pay Compliances"
                className="bg-[#E0F8EA] p-2 sm:p-3 rounded-xl m-auto"
              />
              <p className="text-[#515251] mt-2 text-xs sm:text-base">
                Pay Compliances
              </p>
            </div>

            {/* Quick Loan */}
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center transition-all hover:shadow-md">
              <img
                src={QuickLoanColored}
                alt="Quick Loan"
                className="bg-[#EDF5FF] p-2 sm:p-3 rounded-xl m-auto"
              />
              <p className="text-[#515251] mt-2 text-xs sm:text-base">
                Quick Loan
              </p>
            </div>
          </div>

          {/* Next Payroll Section */}
          <div className="rounded-xl shadow-md row-span-3">
            <p className="text-[#515251] bg-[#D9EBCD] text-center px-10 py-2 sm:py-3 rounded-tr-[1.2rem] rounded-tl-[1.2rem]">
              Next Payroll
            </p>
            <div>
              <div className="mt-4 text-center pb-6 sm:pb-8 border-b-[1.6px] border-[#E7E8E7]">
                <div className="flex items-center justify-center gap-2">
                  <img src={Calendar} alt="Calendar" width={20} sm:width={25} />
                  <span className="text-xs sm:text-sm text-[#515251]">
                    {currentDate}
                  </span>
                </div>
                <p className="text-[#515251] text-xs sm:text-sm">
                  {formattedDate}
                </p>
              </div>

              <div className="px-6">
                <div className="text-[#515251]">
                  <p className="mt-4 text-base sm:text-lg font-medium">
                    Total Employee
                  </p>
                  <p className="font-bold text-[#292A29] text-sm sm:text-base">
                    64
                  </p>
                </div>

                {/* Single Progress Bar with Two Colors */}
                <div className="mt-4">
                  <div className="w-full bg-gray-300 rounded-full h-[8px] mb-4 relative">
                    <div className="bg-[#11453B] h-[8px] w-[50%] absolute left-0 transition-all duration-500"></div>
                    <div className="bg-[#EA4E4B] h-[8px] w-[50%] absolute right-0 transition-all duration-500"></div>
                  </div>

                  <div className="flex justify-between text-xs sm:text-sm text-[#8D8E8D]">
                    <div>
                      <span className="block">Male</span>
                      <span className="font-medium">32</span>
                    </div>
                    <div>
                      <span className="block">Female</span>
                      <span className="font-medium">32</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Inflow Outflow Numbers */}
        <div className="mt-6">
          <div className="bg-white p-6 rounded-xl mt-4">
            <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-[3rem]">
              <div>
                <p className="text-[#515251]">Inflow</p>
                <h3 className="text-[#219653] font-bold">₦1,567,552</h3>
              </div>
              <div className="mr-8">
                <p className="text-[#515251]">Outflow</p>
                <h3 className="text-[#EF4444] font-bold">₦1,567,552</h3>
              </div>
              <div
                className="flex gap-2 align-middle cursor-pointer"
                onClick={toggleChart}
              >
                <p className="text-[#11453B]">Inflow/Outflow</p>
                <span>
                  {/* Ternary operator to show the arrow up/down */}
                  <img
                    src={isChartVisible ? UpArrow : DownArrow}
                    alt={isChartVisible ? "Arrow Up" : "Arrow Down"}
                  />
                </span>
              </div>
            </div>

            {/* Line Chart */}
            {isChartVisible && (
              <div className="relative mt-4 overflow-hidden">
                <img
                  src={LineChart}
                  alt="Inflow/Outflow chart"
                  className="w-full h-auto"
                />
                <div className="absolute top-[130%] right-[24%] lg:top-[85%] lg:right-[4%]">
                  <p className="bg-[#11453B] text-white px-3 py-1 rounded text-xs lg:text-sm">
                    {currentYear}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
