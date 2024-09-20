import React from "react";
import CompanyLogo from "../../../assets/CompanyLogo.svg";
import Notification from "../../../assets/Notification.svg";
import KaluAbasiama from "../../../assets/KaluAbasiama.svg";
import WalletBalance from "./WalletBalance";
import Chart from "./Chart";

const Dashboard = () => {
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

        <WalletBalance />

        <Chart />
      </main>
    </section>
  );
};

export default Dashboard;
