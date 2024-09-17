import React from "react";
import EasypayDot from "../../../assets/EasypayDot.svg";
import EasypayBg from "../../../assets/EasypayBg.svg";

const EasypayDemo = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-between p-6 md:p-16 gap-8 md:gap-12 mt-0 h-auto bg-white">
      {/* Background Dots */}
      <img
        src={EasypayDot}
        alt="Background Dots"
        className="absolute top-[5rem] left-0 md:left-16 w-12 md:w-24 animate-pulse"
      />
      {/* Background Design */}
      <img
        src={EasypayBg}
        alt="Background Design"
        className="absolute top-0 right-0 w-32 md:w-60 object-cover animate-fadeIn"
      />

      {/* Left Section - Heading */}
      <div className="md:w-1/2 px-4 mt-[13rem] text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold text-[#11453B] font-serif leading-snug">
          Get an Exclusive <br /> Demo of Eazipay
        </h1>
        <p className="mt-4 text-[#515251] text-base md:text-lg font-medium">
          Our greatest priority is to put you and <br /> your business first.
          Let’s show you how <br /> we can help.
        </p>
      </div>

      {/* Right Section - Form */}
      <div className="md:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-lg h-auto transition-transform transform hover:scale-105">
        <form className="space-y-4 text-center">
          {/* Centered Title and Description */}
          <div>
            <h2 className="text-xl font-semibold text-[#292A29] pb-4">
              First things first
            </h2>
            <p className="text-[#444444] text-sm pt-2">
              We want to serve you better. Tell us <br />a bit about yourself or
              company.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between w-full p-2 border-gray-200 border-[0.80px] rounded-xl text-[14px] text-center">
            <button className="bg-[#11453B] text-white py-2 px-6 md:px-8 rounded-full transition duration-300 hover:bg-[#0d3d32]">
              Individual
            </button>
            <button className="bg-gray-200 text-[#515251] py-2 px-6 md:px-8 rounded-full transition duration-300 hover:bg-gray-300">
              Company
            </button>
          </div>

          {/* Form Inputs */}
          <div className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11453B] placeholder:text-sm"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11453B] placeholder:text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11453B] placeholder:text-sm"
            />
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11453B] placeholder:text-sm"
            />
            <input
              type="text"
              name="companySize"
              placeholder="Company Size"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11453B] placeholder:text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-[#11453B] text-white rounded-lg transition duration-300 hover:bg-[#0d3d32]"
          >
            Request Demo
          </button>
        </form>
      </div>
    </section>
  );
};

export default EasypayDemo;
