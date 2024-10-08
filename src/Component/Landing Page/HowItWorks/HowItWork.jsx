import React from "react";
import Steps from "../../../assets/Steps.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HowItWork = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const leftToRightVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.2 },
    },
  };

  const rightToLeftVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.2 },
    },
  };

  const textFadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="about-section"
    >
      <section className="bg-white w-full min-h-screen flex flex-col items-center mb-6">
        <motion.div variants={textFadeUpVariants}>
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
          {/* Mobile Gif */}
          <motion.div variants={leftToRightVariants}>
            <div className="relative mt-12 md:mt-0">
              <div className="w-[280px] h-[280px] md:w-[577.15px] md:h-[577.15px] rounded-full bg-[#F0F7EB] flex justify-center items-center">
                <div className="w-[250px] h-[250px] md:w-[518.16px] md:h-[518.16px] rounded-full bg-[#D9EBCD] flex justify-center items-center">
                  <div className="w-[200px] h-[200px] md:w-[450.9px] md:h-[450.9px] rounded-full bg-[#11453B]"></div>
                </div>
              </div>

              <img
                src="https://s3-alpha-sig.figma.com/img/afa0/c1e6/561787658c7d935e98021ba603c76f08?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPPRwWaYy4E-KvxruRUnEPre0X6c2LcrdcjQ0LJhPS5rLrc9HquPQsIe~1mMf4E8Oej4-2mZ9koYZpCHqgKN1wniOCwCIiLeCSwEjGvAP-FKMU9lp~QmeRs5k~Pm4NZtY7kYLCczDIGQ1SwAoL~eEVC7o7qJJvIePyOKtHXEIYzUOsC0KegLcukzjw64GAvzbl8pPRzPCgsx5q2GFSgxaH2mw6bLQQPd0TmqneP0vcXPjsUVc0l~Nu7piQEfbC5Ii4DuwivlWBbzxzsprcTHJMV7~VEd8YqUhsesF60TlaLM5pkwEb0GNCYmZ4mxeX8F3XrQISgsYp2O1ZGV6vM4NQ__" 
                alt="Run Payroll Easily"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[350px] rounded-[40px] md:rounded-[63px]"
              />
            </div>
          </motion.div>

          {/* Steps image */}
          <motion.div variants={rightToLeftVariants}>
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
