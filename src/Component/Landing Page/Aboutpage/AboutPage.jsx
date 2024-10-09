import React from "react";
import "aos/dist/aos.css";
import AboutImage from "../../../assets/AboutImage.svg";
import "../../../Component/Landing Page/Aboutpage/AboutPage.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EaziWaze from "../../../assets/EaziWaze.png";

const AboutPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="about-section"
    >
      <section className="about-container bg-[#F0F7EB] w-full min-h-screen flex justify-center items-center">
        <div className="p-10 w-full">
          <div className="about-title text-center">
            <h1 className="text-[#11453B] text-[34px] font-bold font-sans">
              For Individuals and Businesses
            </h1>
            <p className="text-[#292A29] font-normal pt-3">
              Join 200+ businesses using Eazipay's easy solution.
            </p>
          </div>

          <div className="about-image mt-10">
            <div className="mx-auto text-center">
              <img src={AboutImage} alt="About Page" />
            </div>
          </div>

          <div className="mt-5 text-center">
            <p className="text-[14px] pb-8">
              We are happy to answer your queries. Please, reach us at <br />
              <span className="text-[#EA4E4B]">hello@myeazipay.com</span> and
              expect our response shortly after.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
