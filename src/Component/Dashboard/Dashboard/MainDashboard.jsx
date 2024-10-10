import React from "react";
import "../DashboardLayout/Layout.css";
import WalletBalance from "./WalletBalance";
import Chart from "./Chart";
import RecentActivities from "../../Recent Activities/RecentActivities";

const MainDashboard = () => {
  return (
    <section className="dashboard bg-[#F2F1F1] min-h-screen w-full">
      <main className="px-8">
        <div className="text-center lg:text-left pb-6 lg:pb-10">
          <h1 className="text-xl text-[#292A29] font-sans lg:text-2xl font-bold">
            Welcome Abasiama
          </h1>
          <p className="text-[#292A29] pt-4 text-xs lg:text-sm">
            Pay and manage your employee in minutes
          </p>
        </div>

        <WalletBalance />

        <Chart />
        <RecentActivities />
      </main>
    </section>
  );
};

export default MainDashboard;