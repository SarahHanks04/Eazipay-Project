import React, { useState, useEffect } from "react";
import LineChart from "../../../assets/LineChart.svg";
import Eye from "../../../assets/Eye.svg";
import UserColored from "../../../assets/UserColored.svg";
import PayColored from "../../../assets/PayColored.svg";
import SendColored from "../../../assets/SendColored.svg";
import QuickLoanColored from "../../../assets/QuickLoanColored.svg";
import DownArrow from "../../../assets/DownArrow.svg";
import Calendar from "../../../assets/Calendar.svg";

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [currentYear, setCurrentYear] = useState("");

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
    <div className="bg-[#F2F1F1] min-h-screen p-4">
      {/* Welcome Section */}
      <div className="text-center lg:text-left">
        <h1 className="text-xl lg:text-2xl font-bold">Welcome Abasiama</h1>
        <p className="text-gray-600 text-xs lg:text-sm">
          Pay and manage your employee in minutes
        </p>
      </div>

      {/* Wallet and Payroll Section using Grid */}
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        {/* grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 */}
        {/* Wallet Balance Card */}
        <div className="bg-[#0B604F] text-white p-6 rounded-xl w-full row-span-1 col-span-2">
          {/* col-span-2 */}
          <p>Wallet Balance</p>
          <div className="flex flex-col lg:flex-row justify-between pt-4 items-start lg:items-center">
            <div className="flex gap-4 align-middle">
              <h2 className="text-2xl lg:text-3xl font-bold">₦12,560,078.00</h2>
              <span>
                <img src={Eye} alt="eye" width={30} />
              </span>
            </div>
            <button className="mt-4 lg:mt-0 bg-[#D9EAD3] text-[#11453B] text-center px-6 py-2 rounded-full transition-all hover:bg-[#c8e4bf] text-sm lg:text-base">
              Fund Wallet
            </button>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 col-span-2">
          <div className="bg-white rounded-lg p-6 text-center transition-all hover:shadow-md">
            <img src={UserColored} alt="Add Employee" className="bg-[#FFEDEC] p-3 rounded-full m-auto" />
            <p className="mt-2 text-xs lg:text-base">Add Employee</p>
          </div>

          {/* Pay Salaries Button */}
          <div className="bg-white rounded-xl p-6 text-center transition-all hover:shadow-md">
            <img src={PayColored} alt="Pay Salaries" className="bg-[#F0F7EB] p-3 rounded-full m-auto" />
            <p className="mt-2 text-xs lg:text-base">Pay Salaries</p>
          </div>

          {/* Pay Compliances Button */}
          <div className="bg-white rounded-lg p-6 text-center transition-all hover:shadow-md">
            <img src={SendColored} alt="Pay Compliances" className="bg-[#E0F8EA] p-3 rounded-full m-auto" />
            <p className="mt-2 text-xs lg:text-base">Pay Compliances</p>
          </div>

          {/* Quick Loan Button */}
          <div className="bg-white rounded-lg p-6 text-center transition-all hover:shadow-md">
            <img src={QuickLoanColored} alt="Quick Loan" className="bg-[#FFEDEC] p-3 rounded-full m-auto" />
            <p className="mt-2 text-xs lg:text-base">Quick Loan</p>
          </div>
        </div>

        {/* Next Payroll */}
        <div className="rounded-xl shadow-md p-6 row-span-3">
          {/* flex flex-col justify-between */}
          <div>
            <p className="text-[#515251] bg-[#D9EBCD] text-center py-3 rounded-tr-[1.2rem] rounded-tl-[1.2rem]">
              Next Payroll
            </p>
            <div className="mt-4 text-center pb-8 border-b-[1.6px] border-[#E7E8E7]">
              <div className="flex items-center justify-center gap-2">
                <img src={Calendar} alt="Calendar" width={25} />
                <span className="text-sm">{currentDate}</span>
              </div>
              <p className="text-gray-600">{formattedDate}</p>
            </div>

            <div>
              <div>
                <p className="mt-4 text-lg font-medium">Total Employee</p>
                <p className="font-bold">64</p>
              </div>

              {/* Single Progress Bar with Two Colors */}
              <div className="mt-4">
                <div className="w-full bg-gray-300 rounded-full h-4 mb-4 relative">
                  <div
                    className="bg-green-500 h-4 absolute left-0 rounded-l-full transition-all duration-500"
                    style={{ width: `50%` }} // Male percentage
                  ></div>
                  <div
                    className="bg-red-500 h-4 absolute right-0 rounded-r-full transition-all duration-500"
                    style={{ width: `50%` }} // Female percentage
                  ></div>
                </div>

                <div className="flex justify-between text-sm">
                  <div>
                    <span className="block text-green-500">Male</span>
                    <span className="font-bold">32</span>
                  </div>
                  <div>
                    <span className="block text-red-500">Female</span>
                    <span className="font-bold">32</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons Section */}
      {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6"> */}
      {/* Add Employee Button */}
      {/* </div> */}

      {/* Inflow/Outflow Section */}
      <div className="mt-6">
        <div className="bg-white p-6 rounded-xl mt-4">
          {/* Inflow Outflow Numbers */}
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-[3rem]">
            <div>
              <p className="text-[#11453B]">Inflow</p>
              <h3 className="text-green-500 font-bold">₦1,567,552</h3>
            </div>
            <div className="mr-8">
              <p className="text-[#11453B]">Outflow</p>
              <h3 className="text-red-500 font-bold">₦1,567,552</h3>
            </div>
            <div className="flex gap-2 align-middle">
              <p className="text-[#11453B]">Inflow/Outflow</p>
              <span>
                <img src={DownArrow} alt="Arrow Down" />
              </span>
            </div>
          </div>

          {/* Dummy Line Chart */}
          <div className="relative mt-4 overflow-hidden">
            <img
              src={LineChart}
              alt="Inflow/Outflow chart"
              className="w-full h-auto"
            />
            <div className="absolute top-[130%] right-[24%] lg:top-[80%] lg:right-[15%]">
              <p className="bg-[#11453B] text-white px-3 py-1 rounded text-xs lg:text-sm">
                {currentYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// import React from "react";
// import { useState, useEffect } from "react";
// import LineChart from "../../../assets/LineChart.svg";
// import Eye from "../../../assets/Eye.svg";
// import UserColored from "../../../assets/UserColored.svg";
// import PayColored from "../../../assets/PayColored.svg";
// import SendColored from "../../../assets/SendColored.svg";
// import QuickLoanColored from "../../../assets/QuickLoanColored.svg";
// import DownArrow from "../../../assets/DownArrow.svg";

// const Dashboard = () => {
//   const [currentDate, setCurrentDate] = useState("");
//   const [currentYear, setCurrentYear] = useState("");

//   useEffect(() => {
//     const date = new Date();
//     setCurrentDate(
//       date.toLocaleDateString("en-GB", {
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//         year: "numeric",
//       })
//     );
//     setCurrentYear(date.getFullYear());
//   }, []);

//   return (
//     <div className="bg-[#F2F2F2] min-h-screen p-4">
//       {/* Welcome Section */}
//       <div className="text-center lg:text-left">
//         <h1 className="text-2xl font-bold">Welcome Abasiama</h1>
//         <p className="text-gray-600 text-sm">
//           Pay and manage your employee in minutes
//         </p>
//       </div>

//       {/* Wallet and Payroll Info Section */}
//       <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
//         {/* Wallet Balance Card */}
//         <div className="bg-[#0B604F] text-white p-4 rounded-xl w-full lg:w-[65%]">
//           <p>Wallet Balance</p>
//           <div className="flex justify-between pt-4">
//             <div className="flex gap-4 align-middle">
//               <h2 className="text-3xl font-bold">₦12,560,078.00</h2>
//               <span>
//                 <img src={Eye} alt="eye" width={30} />
//               </span>
//             </div>
//             <div>
//               <button className="bg-[#D9EAD3] text-[#11453B] text-center px-8 py-2 rounded-full mb-4">
//                 Fund Wallet
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Next Payroll */}
//         <div className="bg-[#E8F5E9] p-4 rounded-xl text-center">
//           <p className="text-[#11453B]">Next Payroll</p>
//           <div className="mt-4">
//             <p className="font-bold">{currentDate}</p>
//             <p>Total Employee</p>
//             <h2 className="text-3xl font-bold">64</h2>
//             <div className="flex justify-between items-center mt-2">
//               <div className="text-sm">
//                 <span className="block">Male</span>
//                 <span>32</span>
//               </div>
//               <div className="bg-red-400 h-1 w-12 rounded-lg"></div>
//               <div className="text-sm">
//                 <span className="block">Female</span>
//                 <span>32</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons Section */}
//       <div className="flex gap-8 mt-6">
//         {/* Add Employee Button */}
//         <div className="bg-white rounded-lg p-6 text-center">
//           <img src={UserColored} alt="Add Employee" />
//           <p className="mt-2">Add Employee</p>
//         </div>

//         {/* Pay Salaries Button */}
//         <div className="bg-white rounded-lg p-6 text-center">
//           <img src={PayColored} alt="Pay Salaries" />
//           <p className="mt-2">Pay Salaries</p>
//         </div>

//         {/* Pay Compliances Button */}
//         <div className="bg-white rounded-lg p-6 text-center">
//           <img src={SendColored} alt="Pay Compliances" />
//           <p className="mt-2">Pay Compliances</p>
//         </div>

//         {/* Quick Loan Button */}
//         <div className="bg-white rounded-lg p-6 text-center">
//           <img src={QuickLoanColored} alt="Quick Loan" />
//           <p className="mt-2">Quick Loan</p>
//         </div>
//       </div>

//       {/* Inflow/Outflow Section */}
//       <div className="mt-6">
//         <div className="bg-white p-6 rounded-xl mt-4">
//           {/* Inflow Outflow Numbers */}
//           <div className="flex justify-between gap-[3rem]">
//             <div className="">
//               <p className="text-[#11453B]">Inflow</p>
//               <h3 className="text-green-500 font-bold">₦1,567,552</h3>
//             </div>
//             <div className="mr-8">
//               <p className="text-[#11453B]">Outflow</p>
//               <h3 className="text-red-500 font-bold">₦1,567,552</h3>
//             </div>
//             <div className="flex gap-2 align-middle">
//               <p className="text-[#11453B]">Inflow/Outflow</p>
//               <span><img src={DownArrow} alt="Arrow Down" /></span>
//             </div>
//           </div>

//           {/* Dummy Line Chart */}
//           <div className="mt-4">
//             <div className="relative">
//               <img src={LineChart} alt="Inflow/Outflow chart" />
//             </div>
//             <div className="absolute top-[130%] right-[24%]">
//               <p className="bg-[#11453B] text-white px-3 py-1 rounded">
//                 {currentYear}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
