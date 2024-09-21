import React from "react";
import WalletComponent from "./WalletComponent";
import QuickStatsComponent from "./QuickStatsComponent";
import QuickActionsComponent from "./QuickActionComponent";
import BottomNavbarComponent from "./BottomNavbarComponent";

const MainIndividualComponent = () => {
  return (
    <div className="">
      <WalletComponent />
      <QuickStatsComponent />
      <QuickActionsComponent />
      <BottomNavbarComponent />
    </div>
  );
};

export default MainIndividualComponent;
