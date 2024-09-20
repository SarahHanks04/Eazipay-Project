// import React from "react";
// import MainSidebar from "../Sidebar/MainSidebar";
// import CompanyLogo from "../../../assets/CompanyLogo.svg";
// import Notification from "../../../assets/Notification.svg";
// import KaluAbasiama from "../../../assets/KaluAbasiama.svg";
// import MainDashboard from "../Dashboard/MainDashboard";

// const DashboardLayout = () => {
//   return (
//     <div className="flex justify-between">
//       <div className="fixed w-full">
//         <MainSidebar />
//       </div>
//       <div className="">
//       <nav className="  flex justify-between px-6 bg-white py-2 shadow-md">
//       {/*  fixed top-0 left-0 right-0 z-10 lg:px-[4rem] */}
//       {/* fixed top-0 left-[12%] right-[12%] z-10 */}
//           <div>
//             <img src={CompanyLogo} alt="Company Logo" />
//           </div>
//           <div className="flex gap-6 lg:gap-[4rem]">
//             <img src={Notification} alt="Notification" width={27} />
//             <div className="flex gap-3 items-center">
//               <img src={KaluAbasiama} alt="Kalu Abasiama" width={40} />
//               <div className="text-center">
//                 <h1 className="text-[#2B2B2B] text-sm lg:text-[16px] pt-3">
//                   Kalu Abasiama
//                 </h1>
//                 <p className="text-[#898989] text-xs lg:text-sm text-start">
//                   Admin
//                 </p>
//               </div>
//             </div>
//           </div>
//         </nav>
//         <MainDashboard />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


import React from "react";
import MainSidebar from "../Sidebar/MainSidebar";
import CompanyLogo from "../../../assets/CompanyLogo.svg";
import Notification from "../../../assets/Notification.svg";
import KaluAbasiama from "../../../assets/KaluAbasiama.svg";
import MainDashboard from "../Dashboard/MainDashboard";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="fixed min-h-screen bg-white">
        <MainSidebar />
      </div>

      {/* Main content: Navbar + Dashboard */}
      <div className="ml-1/6 w-5/6">
        {/* Navbar */}
        <nav className="fixed top-0 right-0 w-5/6 z-10 bg-white py-2 shadow-md flex justify-between px-6 lg:px-[4rem]">
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

        {/* Dashboard content (starts after navbar) */}
        <div className="pt-16 lg:pt-24 p-6 lg:p-16">
          <MainDashboard />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
