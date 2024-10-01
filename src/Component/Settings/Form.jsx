// import React, { useState } from "react";
// import CompanyName from "./CompanyName";
// import CompanyAddress from "./CompanyAddress";
// import CompanySize from "./CompanySize";
// import CompanyInfo from "./CompanyInfo";
// import { FiChevronDown, FiChevronLeft } from "react-icons/fi";
// import SettingButtons from "./SettingButtons";

// const Form = () => {
//   const [open, setOpen] = useState({ editCompanyInfo: false });

//   const toggle = (section) => {
//     setOpen((prevState) => ({
//       ...prevState,
//       [section]: !prevState[section],
//     }));
//   };

//   // Clear File Input
//   // const clearFileInput = () => {
//   //   setProofOfAddressFile(null); // Reset the local state
//   //   document.getElementById("uploadProofOfAddress").value = ""; // Reset the file input field
//   // };

//   return (
//     <form className="main-form bg-white my-6 py-5 rounded-[16px]">
//       <div>
//         <div
//           className="text-[#515251] font-medium text-[18px] p-4"
//           onClick={() => toggle("editCompanyInfo")}
//         >
//           <div className="flex gap-6">
//             {open.editCompanyInfo ? (
//               <FiChevronLeft className="flex justify-center items-center mt-1" />
//             ) : (
//               <FiChevronDown className="flex justify-center items-center mt-1" />
//             )}
//             <h1>Edit Company Information</h1>
//           </div>
//           <div className="w-full h-[1px] bg-[#E7E8E7] my-6"></div>
//         </div>
//         {open.editCompanyInfo && (
//           <div>
//             <CompanyInfo />
//             <CompanyName />
//             <CompanyAddress />
//             <CompanySize />
//             <SettingButtons />
//           </div>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Form;

import React, { useState, useRef, useEffect } from "react";
import CompanyName from "./CompanyName";
import CompanyAddress from "./CompanyAddress";
import CompanySize from "./CompanySize";
import CompanyInfo from "./CompanyInfo";
import { FiChevronDown, FiChevronLeft } from "react-icons/fi";
import SettingButtons from "./SettingButtons";
import { gsap } from "gsap";

const Form = () => {
  const [open, setOpen] = useState({ editCompanyInfo: false }); // Changed "false" to boolean
  const toggle = (section) => {
    setOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Refs for animation
  const editCompanyInfoRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (open.editCompanyInfo) {
      gsap.to(editCompanyInfoRef.current, {
        duration: 0.5,
        height: "auto",
        opacity: 1,
        ease: "power5.out",
        padding: "20px", // Adjust based on your design
      });
    } else {
      gsap.to(editCompanyInfoRef.current, {
        duration: 0.5,
        height: 0,
        opacity: 0,
        ease: "power5.in",
        padding: "0px",
      });
    }
  }, [open.editCompanyInfo]);

  return (
    <form className="main-form bg-white my-6 py-5 rounded-[16px]" ref={formRef}>
      <div>
        <div
          className="text-[#515251] font-medium text-[18px] p-4 cursor-pointer"
          onClick={() => toggle("editCompanyInfo")}
        >
          <div className="flex gap-6 items-center">
            {open.editCompanyInfo ? (
              <FiChevronLeft className="flex justify-center items-center mt-1" />
            ) : (
              <FiChevronDown className="flex justify-center items-center mt-1" />
            )}
            <h1>Edit Company Information</h1>
          </div>
          <div className="w-full h-[1px] bg-[#E7E8E7] my-6"></div>
        </div>
        {/* Animated Section */}
        <div
          ref={editCompanyInfoRef}
          style={{ height: 0, opacity: 0, overflow: "hidden", padding: 0 }}
        >
          {open.editCompanyInfo && (
            <div className="space-y-6">
              <CompanyInfo />
              <CompanyName />
              <CompanyAddress />
              <CompanySize />
              <SettingButtons />
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
