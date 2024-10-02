import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Landing Page/Footer/Footer";
import NavigationBar from "./Navigation Bar/Navigation Bar/NavigationBar";

const Layout = () => {
  return (
    <div>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
