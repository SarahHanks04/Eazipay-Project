import React from "react";
import Bars3 from "../../assets/Bars3.svg";
import Notification from "../../assets/Notification.svg";
import BusinessProfile from "./BusinessProfile";
import Form from "./Form";

const MainSettings = () => {
  return (
    <main className="bg-[#E7E8E7]">
      <nav className="settings-navbar flex items-center justify-between bg-white p-4 shadow-md px-8">
        <img src={Bars3} alt="Hambudger" className="w-10 h-10 cursor-pointer" />
        <span className="navbar-brand text-xl font-semibold text-[#515251]">
          Settings
        </span>
        <div className="notification-icon">
          <img src={Notification} alt="Notification" />
        </div>
      </nav>
      <div className="max-w-6xl mx-auto">
        <BusinessProfile />
        <Form />
      </div>
    </main>
  );
};

export default MainSettings;
