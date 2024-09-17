import React from "react";
import "aos/dist/aos.css";
import SubscriptionImage from "../../../assets/SubscriptionImage.svg";
import SubscriptionPage from "../../../assets/SubscriptionPage.svg";
import AppleLogo from "../../../assets/AppleLogo.svg";
import GoggleLogo from "../../../assets/GoggleLogo.svg";

const SubscribeToEasyLife = () => {
  return (
    <section className="subscription-container" data-aos="fade-up">
      <main className="relative bg-[#FFE9E7] flex flex-col md:flex-row items-center p-6 md:p-16 gap-6 mt-20">
        <img
          src={SubscriptionPage}
          alt="Subscription"
          className="absolute top-0 left-[80px] object-cover"
        />
        <div className="md:w-1/2 px-4 md:pl-8 text-center md:text-start">
          <h1 className="text-2xl md:text-4xl font-bold text-[#292A29] font-serif leading-tight tracking-normal">
            Free forever <br /> for your{" "}
            <span className="text-[#EA4E4B]">
              salary <br /> payment
            </span>
          </h1>

          <div className="mt-8 md:mt-16">
            <p className="text-[#292A29] text-lg md:text-[18px] font-medium">
              Subscribe to the Eazilife today
            </p>

            {/* App Store and Google Play Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-6 items-center justify-center md:justify-start">
              <div className="bg-white flex items-center p-3 rounded-md border shadow-sm w-full md:w-auto">
                <img src={AppleLogo} alt="Apple Logo" className="w-8 h-8" />
                <div className="ml-3 text-gray-600">
                  <p className="text-xs md:text-sm">Download on the</p>
                  <p className="font-bold text-sm md:text-base">App Store</p>
                </div>
              </div>

              <div className="bg-white flex items-center p-3 rounded-md border shadow-sm w-full md:w-auto">
                <img src={GoggleLogo} alt="Google Logo" className="w-8 h-8" />
                <div className="ml-3 text-gray-600">
                  <p className="text-xs md:text-sm">Get on</p>
                  <p className="font-bold text-sm md:text-base">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="image-container md:w-1/2 flex justify-center mt-6 md:mt-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={SubscriptionImage}
            alt="Hero Image"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] max-w-full h-auto"
          />
        </div>
      </main>
    </section>
  );
};

export default SubscribeToEasyLife;
