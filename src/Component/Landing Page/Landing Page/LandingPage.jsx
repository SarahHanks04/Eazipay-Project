import React from "react";
import AboutPage from "../Aboutpage/AboutPage";
import HowItWork from "../HowItWorks/HowItWork";
import SubscribeToEasyLife from "../SubscribeToEasyLife/SubscribeToEasyLife";
import EasypayDemo from "../EasyPayDemo/EasypayDemo";
import HeroPage from "../HeroPage/HeroPage";

const LandingPage = () => {
  return (
    <section>
      <HeroPage />
      <AboutPage />
      <HowItWork />
      <SubscribeToEasyLife />
      <EasypayDemo />
    </section>
  );
};

export default LandingPage;
