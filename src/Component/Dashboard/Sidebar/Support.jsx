import React from "react";
import Call from "../../../assets/Call.svg";

const Support = () => {
  return (
    <main>
      <div className="px-4 py-3 border-b-[1.2px] hover:bg-[#F0F7EB80]">
        <div className="text-[#515251] flex justify-between items-center cursor-pointer">
          <div className="flex justify-center gap-2">
            <img src={Call} alt="Settings" />
            <span className="text-sm">Support</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Support;
