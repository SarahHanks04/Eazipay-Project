import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavbarComponent from "./Individual/BottomNavbarComponent";
import MainIndividualComponent from "./Individual/MainIndividualComponent";
import TeamContainer from "./Eazipay Team/TeamContainer/TeamContainer";

const IndividualLayout = () => {
  return (
    <div>
      <MainIndividualComponent />
      <TeamContainer />
      <main>
        <Outlet />
      </main>
      <BottomNavbarComponent />
    </div>
  );
};

export default IndividualLayout;
