import React from "react";
import MainSidebar from "../Sidebar/MainSidebar";
import MainDashboard from "../Dashboard/MainDashboard";

const DashboardLayout = () => {
  return (
    <div className="flex justify-between">
      <div className="fixed w-full">
        <MainSidebar />
      </div>
      <div className=" ml-[10rem]">
        <MainDashboard />
      </div>
    </div>
  );
};

export default DashboardLayout;
