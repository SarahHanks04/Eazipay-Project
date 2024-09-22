import React from "react";
import "aos/dist/aos.css";
import AboutImage from "../../../assets/AboutImage.svg";
import "../../../Component/Landing Page/Aboutpage/AboutPage.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

          {/* <div className="about-cards grid grid-cols-1 md:grid-cols-3 gap-8 mt-[40px] mx-auto justify-center items-center">
          
          <div className="p-8 bg-[#11453B] text-white rounded-lg shadow-md scale-100">
            <h2 className="font-medium text-xl mb-5">
              Tamper-proof Payroll for Life
            </h2>
            <div>
              <p className="text-[12px] pb-4">
                Your staff payroll history is kept in one place forever.
              </p>
              <p className="text-[12px] pb-4">
                No more excel sheets or manual records.
              </p>
              <p className="text-[12px]">
                Download your payroll history anytime you need it.
              </p>
            </div>
          </div>

          <div className="p-8 bg-[#11453B] text-white rounded-lg shadow-lg scale-100">
            <h2 className="font-medium text-xl mb-5">
              All Payroll, Anytime Anywhere
            </h2>
            <div>
              <p className="text-[12px] pb-4">
                Wherever you are, Eazipay has got you covered on all your
                Payroll tasks.
              </p>
              <p className="text-[12px]">
                Whether it is Taxes, Pension insurances HMOs, trust funds,
                Eazipay handles all your compliances in one place and easily, in
                seconds!
              </p>
            </div>
          </div>

          <div className="p-8 bg-[#11453B] text-white rounded-lg shadow-lg scale-100">
            <h2 className="font-medium text-xl mb-5">Payroll in Seconds</h2>
            <div>
              <p className="text-[12px] pb-4">
                Never again will you spend more than 2 minutes on payroll.
              </p>
              <p className="text-[12px] pb-4">
                Just click on your staff and bulk-pay them at once.
              </p>
              <p className="text-[12px]">Payment is done permanently.</p>
            </div>
          </div>
        </div> */}
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
