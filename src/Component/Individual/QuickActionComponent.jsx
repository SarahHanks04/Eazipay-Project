import React from "react";
import { motion } from "framer-motion";
import PayColored from "../../assets/PayColored.svg";
import UserColored from "../../assets/UserColored.svg";
import SendPayslipColored from "../../assets/SendPayslipColored.svg";
import EditColored from "../../assets/EditColored.svg";
import QuickLoanColored from "../../assets/QuickLoanColored.svg";
import SendColored from "../../assets/SendColored.svg";
import AirtimeColored from "../../assets/AirtimeColored.svg";
import DataColored from "../../assets/DataColored.svg";
import ElectricityColored from "../../assets/ElectricityColored.svg";

const QuickActionsComponent = () => {
  const actions = [
    { name: "Pay Salaries", icon: PayColored, color: "bg-[#F0F7EB]" },
    { name: "Add Employee", icon: UserColored, color: "bg-[#FFEDEC]" },
    { name: "Send Payslips", icon: SendPayslipColored, color: "bg-[#F0EEFF]" },
    { name: "Edit Salaries", icon: EditColored, color: "bg-[#FFF2DB]" },
    { name: "Get a Loan", icon: QuickLoanColored, color: "bg-[#E5F6FE]" },
    { name: "Make a Transfer", icon: SendColored, color: "bg-[#E7FBEF]" },
    { name: "Airtime", icon: AirtimeColored, color: "bg-[#E4F0F6]" },
    { name: "Data", icon: DataColored, color: "bg-[#B548C61A]" },
    { name: "Electricity", icon: ElectricityColored, color: "bg-[#FF87001A]" },
  ];

  // Animation
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };


  return (
    <section className="mb-[4rem]">
      <h1 className="text-[#515251] text-lg ml-4 sm:ml-[2rem] md:ml-[4rem] py-8">
        QUICK ACTION
      </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="relative grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-white mx-4 sm:mx-4 md:mx-20 py-6 rounded-xl shadow-xl"
      >
        {actions.map((action, index) => (
          <motion.div
            key={index}
            className="text-center"
            variants={itemVariants}
          >
            <div className="p-4">
              <div className={`mx-auto rounded-[12px] p-4 ${action.color}`}>
                <img src={action.icon} alt={action.name} className="mx-auto" />
              </div>
              <p className="mt-2 text-sm text-[#515251]">{action.name}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default QuickActionsComponent;
