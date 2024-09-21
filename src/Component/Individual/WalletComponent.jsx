import { useContext } from "react";
import { IndividualContext } from "./IndividualProvider";
import Eye from "../../assets/Eye.svg";
import EyeColored from "../../assets/EyeColored.svg";

const WalletComponent = () => {
  const { balance, toggleBalance } = useContext(IndividualContext);

  return (
    <section className="bg-[#11453B] rounded-[18px] text-white mx-auto p-8">
      <main>
        <p className="text-[20px] font-sans text-[#DAE9D0]">Wallet Balance</p>
        <div className="flex flex-col lg:flex-row justify-between pt-4 items-start lg:items-center">
          <div className="flex gap-[10rem] sm:gap-4 items-center">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold">
              {balance ? "₦15,067,789.00" : "**********"}
            </h2>
            <span onClick={toggleBalance} className="cursor-pointer">
              <img
                src={balance ? Eye : EyeColored}
                alt={balance ? "Hide Balance" : "Show Balance"}
                width={20}
                className="lg:w-[30px]"
              />
            </span>
          </div>
          <button className="mt-4 lg:mt-0 bg-[#D9EAD3] text-[#11453B] w-full lg:w-auto text-center px-4 sm:px-6 py-2 rounded-full transition-all hover:bg-[#c8e4bf] text-xs sm:text-sm lg:text-base">
            Fund Wallet
          </button>
        </div>
      </main>
    </section>
  );
};

export default WalletComponent;
// import { useContext } from "react";
// import { IndividualContext } from "./IndividualProvider";
// import Eye from "../../assets/Eye.svg";
// import EyeColored from "../../assets/EyeColored.svg";

// const WalletComponent = () => {
//   const { setBalance, toggleBalance } = useContext(IndividualContext);

//   return (
//     <section className="bg-[#11453B] text-white mx-auto p-8">
//       <main>
//         <p className="text-lg">Wallet Balance</p>
//         <div className="flex flex-col lg:flex-row justify-between pt-4 items-start lg:items-center">
//           <div className="flex gap-2 sm:gap-4 align-middle">
//             <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold">
//               {setBalance ? "₦15,067,789.00" : "**********"}
//             </h2>
//             <span onClick={toggleBalance} className="cursor-pointer">
//               <img
//                 src={setBalance ? Eye : EyeColored}
//                 alt={setBalance ? "Hide Balance" : "Show Balance"}
//                 width={20}
//                 className="lg:w-[30px]"
//               />
//             </span>
//           </div>
//           <button className="mt-4 lg:mt-0 bg-[#D9EAD3] text-[#11453B] text-center px-4 sm:px-6 py-2 rounded-full transition-all hover:bg-[#c8e4bf] text-xs sm:text-sm lg:text-base">
//             Fund Wallet
//           </button>
//         </div>
//       </main>
//     </section>
//   );
// };

// export default WalletComponent;
