import React from "react";
import Bars3 from "../../assets/Bars3.svg";
import Notification from "../../assets/Notification.svg";

const MainSettings = () => {
  return (
    <main>
      <nav className="navbar">
        <img src={Bars3} alt="Hambudger" />
        <span className="navbar-brand">Settings</span>
        <div className="notification-icon">
          <img src={Notification} alt="Notification" />
        </div>
      </nav>
    </main>
  );
};

export default MainSettings;
