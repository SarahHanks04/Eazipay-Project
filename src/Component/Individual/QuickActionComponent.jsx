import React from "react";
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

  return (
    <section className="mb-[4rem]">
      {/* Heading */}
      <h1 className="text-[#515251] text-lg ml-4 sm:ml-[2rem] md:ml-[4rem] py-8">
        QUICK ACTION
      </h1>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-white mx-4 sm:mx-10 md:mx-20 py-6 rounded-xl shadow-xl">
        {actions.map((action, index) => (
          <div key={index} className="text-center">
            <div className="p-4">
              {/* Icon with background color */}
              <div
                className={`mx-auto rounded-[12px] p-4 ${action.color}`}
              >
                <img
                  src={action.icon}
                  alt={action.name}
                  className="mx-auto"
                />
              </div>
              {/* Text */}
              <p className="mt-2 text-sm text-[#515251]">{action.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickActionsComponent;
// import React from "react";
// import PayColored from "../../assets/PayColored.svg";
// import UserColored from "../../assets/UserColored.svg";
// import SendPayslipColored from "../../assets/SendPayslipColored.svg";
// import EditColored from "../../assets/EditColored.svg";
// import QuickLoanColored from "../../assets/QuickLoanColored.svg";
// import SendColored from "../../assets/SendColored.svg";
// import AirtimeColored from "../../assets/AirtimeColored.svg";
// import DataColored from "../../assets/DataColored.svg";
// import ElectricityColored from "../../assets/ElectricityColored.svg";

// const QuickActionsComponent = () => {
//   const actions = [
//     { name: "Pay Salaries", icon: PayColored, color: "bg-[#F0F7EB]" },
//     { name: "Add Employee", icon: UserColored, color: "bg-[#FFEDEC]" },
//     { name: "Send Payslips", icon: SendPayslipColored, color: "bg-[#F0EEFF]" },
//     { name: "Edit Salaries", icon: EditColored, color: "bg-[#FFF2DB]" },
//     { name: "Get a Loan", icon: QuickLoanColored, color: "bg-[#E5F6FE]" },
//     { name: "Make a Transfer", icon: SendColored, color: "bg-[#E7FBEF]" },
//     { name: "Airtime", icon: AirtimeColored, color: "bg-[#E4F0F6]" },
//     { name: "Data", icon: DataColored, color: "bg-[#B548C61A]" },
//     { name: "Electricity", icon: ElectricityColored, color: "bg-[#FF87001A]" },
//   ];

//   return (
//     <section className="mb-[4rem]">
//       <h1 className="text-[#515251] text-lg ml-[4rem] pt-8">QUICK ACTION</h1>
//       <div className="grid grid-cols-4 gap-4 bg-white mx-20 py-6 rounded-xl shadow-lg">
//         {actions.map((action, index) => (
//           <div key={index} className="text-center">
//             <div className="p-4">
//               <img
//                 src={action.icon}
//                 alt={action.name}
//                 className={`mx-auto bg-[#F0F7EB] rounded-[12px] p-4 ${action.color}`}
//               />
//               <p className="mt-2 text-sm text-[#515251]">{action.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default QuickActionsComponent;
