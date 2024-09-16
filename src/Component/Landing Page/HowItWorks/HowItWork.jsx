import React from "react";
import Mobile from "../../../assets/Mobile.svg";
import Steps from "../../../assets/Steps.svg";

const HowItWork = () => {
  return (
    <section className="bg-white w-full min-h-screen md:flex-row md:justify-around">
      {/* Header */}
      <header className="text-center mt-[5rem] mb-[2.5rem] mx-auto">
        <h1 className="text-[#11453B] text-2xl md:text-4xl font-bold">
          How Eazipay Works
        </h1>
        <p className="text-[#515251] text-lg md:text-xl mt-2">
          Get started in 3 simple steps.
        </p>
      </header>

      {/* Main Content */}
      <main className="relative w-[984px] h-[682px] flex flex-col justify-around md:flex-row items-center md:mt-0 mx-auto">
        {/* Circle Background */}
        <div className="relative mt-36">
          <div className="w-[577.15px] h-[577.15px] rounded-full bg-[#F0F7EB] flex justify-center items-center">
            <div className="w-[518.16px] h-[518.16px] rounded-full bg-[#D9EBCD] flex justify-center items-center">
              <div className="w-[450.9px] h-[450.9px] rounded-full bg-[#11453B]"></div>
            </div>
          </div>

          {/* Mobile Image (overlapping the circles) */}
          <img
            src={Mobile}
            alt="Run Payroll Easily"
            width={347.61}
            height={682}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:w-96"
          />
        </div>

        {/* Steps Image */}
        <div className="mt-[12rem] md:mt-0 md:ml-12">
          <img
            src={Steps}
            alt="How Eazipay Works"
            width={421}
            height={608}
            className="h-auto max-w-xs md:max-w-md"
          />
        </div>
      </main>
    </section>
  );
};

export default HowItWork;
