import React from "react";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import DesktopNavbar from "../DestktopNavBar/DesktopNavbar";

const NavigationBar = () => {
  return (
    <div>
      <MobileNavBar />
      <DesktopNavbar />
    </div>
  );
};

export default NavigationBar;
