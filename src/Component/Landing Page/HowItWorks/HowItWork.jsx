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
        <div>
          <div>
            <img
              src={Mobile}
              alt="Friendly Laundromat"
              className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={Steps}
              alt="Friendly Laundromat"
              className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default HowItWork;
