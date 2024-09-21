import React from "react";
import { motion } from "framer-motion";

const QuickStatsComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="mx-auto py-8">
      <h1 className="text-[#515251] text-lg ml-4 mb-6">QUICK STATS</h1>

      <motion.div
        className="grid grid-cols-2 gap-4 px-0 text-[#515251]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="rounded-xl shadow-md py-6 pr-6 lg:p-6 bg-[#F2F1F1] w-full"
          variants={statVariants}
        >
          <p>Total Payroll</p>
          <h3 className="text-lg font-semibold pt-5">₦2,293,044,345.05</h3>
        </motion.div>

        <motion.div
          className="rounded-xl shadow-md p-6 bg-[#F2F1F1] w-full"
          variants={statVariants}
        >
          <p>Total Employees</p>
          <h3 className="text-lg font-semibold pt-5">10,000</h3>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default QuickStatsComponent;
