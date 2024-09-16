import React from "react";
import "aos/dist/aos.css";
import Button from "../Buttons/Buttons";
import Hero1 from "../../../assets/Hero1.svg";
import AppleLogo from "../../../assets/AppleLogo.svg";
import GoggleLogo from "../../../assets/GoggleLogo.svg";
import "../HeroPage/HeroPage.css";

const HeroPage = () => {
  return (
    <main className="homepage-container flex flex-col md:flex-row items-center p-8 bg-gradient-to-r from-[#e6f0e5] to-[#fdf2f7] gap-8 md:gap-4">
      <div className="md:w-1/2 pl-4 md:pl-8 text-start" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-[#292A29] font-poppins leading-tight tracking-normal">
          Run your <span className="text-[#11453B]">payroll</span>
        </h1>
        <h1 className="text-4xl font-bold text-green text-[#B4A572]">
          easily <span className="text-[#292A29]">in</span>{" "}
          <span className="text-[#EA4E4B]">seconds</span>
        </h1>
        <p className="mt-4 text-lg text-[#515251] font-[400] text-[20px]">
          We’ve built an all-inclusive simple solution for <br /> individual and
          businesses to manage staff, pay <br /> salaries, bills, and relevant
          taxes all at once.
        </p>
        <div
          className="mt-10 flex space-x-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Button
            text="Start Using Free, Forever"
            className="button bg-[#11453B] text-white px-[36px] font-[500] py-[16px] rounded-[32px]"
          />
        </div>
        <p className="text-[#000000] text-[18px] font-[500] mt-16">
          Download the Eazipay App
        </p>

        <div className="flex md:flex-col lg:flex-row gap-4 mt-4">
          <div className="bg-white flex items-center p-2 rounded-md border shadow-sm">
            <img src={AppleLogo} alt="Apple Logo" />
            <div className="ml-3 text-gray-600">
              <p className="text-xs">Download on the</p>
              <p className="font-bold">Appstore</p>
            </div>
          </div>
          <div className="bg-white flex items-center p-2 rounded-md border shadow-sm">
            <img src={GoggleLogo} alt="Google Logo" />
            <div className="ml-3 text-gray-600">
              <p className="text-xs">Get on</p>
              <p className="font-bold">Google Play</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="image-container md:w-1/2 flex justify-center md:ml-0 mt-4 md:mt-0"
        data-aos="fade-up "
        data-aos-delay="200"
      >
        <img
          src={Hero1}
          alt="Hero Image"
          className="w-[600px] md:w-[700px] lg:w-[800px] max-w-full h-auto"
        />
      </div>
    </main>
  );
};

export default HeroPage;
