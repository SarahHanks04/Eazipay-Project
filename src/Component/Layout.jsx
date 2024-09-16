import React from "react";
import { Outlet } from "react-router-dom";
import MobileNavBar from "./Navigation Bar/MobileNavBar/MobileNavBar";
import DesktopNavbar from "./Navigation Bar/DestktopNavBar/DesktopNavbar";
// import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <MobileNavBar />
      <DesktopNavbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
