import React from "react";
import Wasiu from "../../assets/Wasiu.svg";
import WalletComponent from "./WalletComponent";
import QuickStatsComponent from "./QuickStatsComponent";
import QuickActionsComponent from "./QuickActionComponent";
import BottomNavbarComponent from "./BottomNavbarComponent";

const MainIndividualComponent = () => {
  return (
    <div className="p-4">
      <div className="mb-10 mt-3 flex items-center text-[#515251]">
        <img src={Wasiu} alt="Wasiu"  className="mr-6" />
        <p className="text-lg">Hello Wasiu</p>
      </div>
      <WalletComponent />
      <QuickStatsComponent />
      <QuickActionsComponent />
      <BottomNavbarComponent />
    </div>
  );
};

export default MainIndividualComponent;
