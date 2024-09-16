import React from "react";
import Mobile from "../../../assets/Mobile.svg";
import Steps from "../../../assets/Steps.svg";

const HowItWork = () => {
  return (
    <section className="homepage-container bg-white w-full min-h-screen">
      <header className="">
        <div>
          <h1 className="text-[#11453B] text-2xl">How Eazipay Works</h1>
          <p className="text-[#515251]">Get started in 3 simple steps.</p>
        </div>
      </header>

      <main className="image-container w-full flex justify-center mt-4 md:mt-0">
      <div className="flex justify-center items-center bg-gray-50">
      {/* Outer Circle */}
      <div className="w-[577.15px] h-[577.15px] rounded-full border-[0.19px] bg-[#F0F7EB] flex justify-center items-center">
        {/* Middle Circle */}
        <div className="w-[518.16px] h-[518.16px] rounded-full border-[0.19px] bg-[#D9EBCD] flex justify-center items-center">
          {/* Inner Circle */}
          <div className="w-[450.9px] h-[450.9px] rounded-full border-[0.19px] bg-[#11453B]"></div>
        </div>
      </div>
    </div>
        <div>
          <div>
            <img
              src={Mobile}
              alt="Run Payroll Easily"
              className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={Steps}
              alt="How Eazipay Works"
              className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default HowItWork;
