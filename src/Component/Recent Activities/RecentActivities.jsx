import React, { useState } from "react";
import activitiesData from "../Recent Activities/ActivitiesDataArray";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import Activities from "./Activities";

const RecentActivities = () => {
  // const handleSearch = (query) => {
  //   if (!query) {
  //     setFilteredActivities(activitiesData);
  //   } else {
  //     const result = filteredActivities
  //       .map((day) => ({
  //         ...day,
  //         records: day.records.filter((record) =>
  //           record.employee.toLowerCase().includes(query.toLowerCase())
  //         ),
  //       }))
  //       .filter((day) => day.records.length > 0);
  //     setFilteredActivities(result);
  //   }
  // };

  // // Filter Functionality
  // const handleFilter = (filterType) => {
  //   if (!filterType) {
  //     setFilteredActivities(activitiesData);
  //   } else {
  //     const result = filteredActivities
  //       .map((day) => ({
  //         ...day,
  //         records: day.records.filter((record) =>
  //           record.activity.toLowerCase().includes(filterType)
  //         ),
  //       }))
  //       .filter((day) => day.records.length > 0);
  //     setFilteredActivities(result);
  //   }
  // };



  const [filteredActivities, setFilteredActivities] = useState(activitiesData);

  // Generic filtering function for both search and filter
  const filterActivities = (query = "", filterType = "") => {
    if (!query && !filterType) {
      setFilteredActivities(activitiesData); // Reset to initial data
      return;
    }

    const result = activitiesData
      .map((day) => ({
        ...day,
        records: day.records.filter((record) => {
          const matchesEmployee = query
            ? record.employee.toLowerCase().includes(query.toLowerCase())
            : true;
          const matchesActivity = filterType
            ? record.activity.toLowerCase().includes(filterType.toLowerCase())
            : true;
          return matchesEmployee && matchesActivity;
        }),
      }))
      .filter((day) => day.records.length > 0);

    setFilteredActivities(result);
  };

  // Handle Search
  const handleSearch = (query) => {
    filterActivities(query, ""); // Only update search, no filter
  };

  // Handle Filter
  const handleFilter = (filterType) => {
    filterActivities("", filterType); // Only update filter, no search
  };

  return (
    <div className="p-4">
      <div>
        <h1 className="text-[#292A29] text-[28px] font-[400] py-5">
          Recent Activities
        </h1>
        <div className="flex  items-center mb-4 w-full">
          <SearchBar onSearch={handleSearch} />
          <FilterBar onFilter={handleFilter} />
        </div>
        <Activities />
      </div>
    </div>
  );
};

export default RecentActivities;
