import React from "react";
import Mobile from "../../../assets/Mobile.svg";
import Steps from "../../../assets/Steps.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HowItWork = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="about-section"
    >
      <section
        className="bg-white w-full min-h-screen flex flex-col items-center mb-6"
        data-aos="fade-up"
      >
        <motion.div variants={itemVariants}>
          <header className="text-center mt-[5rem] mb-[2.5rem] mx-auto">
            <h1 className="text-[#11453B] text-2xl md:text-4xl font-bold font-serif">
              How Eazipay Works
            </h1>
            <p className="text-[#515251] text-lg md:text-xl mt-4">
              Get started in 3 simple steps.
            </p>
          </header>
        </motion.div>

        <main className="relative w-full flex flex-col md:flex-row items-center justify-center mt-10 mx-auto">
          <motion.div variants={itemVariants}>
            <div className="relative mt-12 md:mt-0">
              <div className="w-[280px] h-[280px] md:w-[577.15px] md:h-[577.15px] rounded-full bg-[#F0F7EB] flex justify-center items-center">
                <div className="w-[250px] h-[250px] md:w-[518.16px] md:h-[518.16px] rounded-full bg-[#D9EBCD] flex justify-center items-center">
                  <div className="w-[200px] h-[200px] md:w-[450.9px] md:h-[450.9px] rounded-full bg-[#11453B]"></div>
                </div>
              </div>

              <img
                src={Mobile}
                alt="Run Payroll Easily"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[350px]"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="mt-12 md:mt-0 md:ml-12">
              <img
                src={Steps}
                alt="How Eazipay Works"
                className="w-[300px] md:w-[421px] h-auto"
              />
            </div>
          </motion.div>
        </main>
      </section>
    </motion.div>
  );
};

export default HowItWork;
