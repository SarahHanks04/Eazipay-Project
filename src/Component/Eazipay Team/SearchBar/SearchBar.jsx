// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { searchEmployee } from "../Slice/Slice";
// import SearchIcon from "../../../assets/Searchicon.svg";
// import ArchivedICon from "../../../assets/ArchivedICon.svg";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");
//   const dispatch = useDispatch();

//   const handleSearch = (e) => {
//     setQuery(e.target.value);
//     dispatch(searchEmployee(e.target.value));
//   };

//   return (
//     <div className="search-bar flex gap-10">
//       <div className="search">
//         <input
//           type="text"
//           value={query}
//           onChange={handleSearch}
//           placeholder="Search"
//           className="search-input border-[0.4px] px-[10px] py-[4px] w-full border-[#2C3E53] rounded-[12.3px] focus:ring-1 focus: outline-[#11453B]"
//         />
//         <img src={SearchIcon} alt="Search Icon" />
//       </div>
//       <img src={ArchivedICon} alt="Archived ICon" className="border border-[#F2F1F1] bg-[#F2F1F1] px-[14px] rounded-[8px]" />
//     </div>
//   );
// };

// export default SearchBar;
import React from "react";
import SearchIcon from "../../../assets/Searchicon.svg";
import ArchivedICon from "../../../assets/ArchivedICon.svg";

const SearchBar = () => {
  return (
    <div className="w-full flex items-center justify-between mb-4">
      <div className="relative w-full flex-1">
        <input
          type="text"
          placeholder="Search"
          className="w-full pr-10 pl-4 py-2 border-[0.3px] border-[#2C3E53] rounded-[12px] focus:outline-none focus:border-[#11453B]"
        />
        <span className="absolute inset-y-0 right-2 flex items-center">
          <img src={SearchIcon} alt="Search Icon" />
        </span>
      </div>

      <button className="ml-4 bg-[#F2F1F1] px-[14px] py-4 rounded-[8px] flex items-center justify-center">
      <img src={ArchivedICon} alt="Archived ICon" />
      </button>
    </div>
  );
};

export default SearchBar;
