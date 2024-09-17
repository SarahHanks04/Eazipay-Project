import React from "react";
import "aos/dist/aos.css";
import SubscriptionImage from "../../../assets/SubscriptionImage.svg";
import AppleLogo from "../../../assets/AppleLogo.svg";
import GoggleLogo from "../../../assets/GoggleLogo.svg";

const SubscribeToEasyLife = () => {
  return (
    <main className="subscription-container bg-[#FFE9E7] flex flex-col md:flex-row items-center p-16 gap-8 md:gap-4 mt-20">
      <div className="md:w-1/2 pl-4 md:pl-8 text-start" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-[#292A29] font-poppins leading-tight tracking-normal">
          Free forever <br /> for your{" "}
          <span className="text-[#EA4E4B]">
            salary <br /> payment
          </span>
        </h1>

        <div
          className="space-x-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-[#292A29] text-[18px] font-[500] mt-16">
            Subscribe to the Eazilife today
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
      </div>
      <div
        className="image-container md:w-1/2 flex justify-center md:ml-0 mt-4 md:mt-0"
        data-aos="fade-up "
        data-aos-delay="200"
      >
        <img
          src={SubscriptionImage}
          alt="Hero Image"
          className="w-[600px] md:w-[700px] lg:w-[800px] max-w-full h-auto"
        />
      </div>
    </main>
  );
};

export default SubscribeToEasyLife;
