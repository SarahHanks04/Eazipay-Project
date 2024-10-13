// import React, { useEffect, useState } from "react";
// import activitiesData from "../Recent Activities/ActivitiesDataArray";
// import ActivitiesList from "./ActivitiesList";

// const Activities = () => {
//   const [filteredActivities, setFilteredActivities] = useState(() => {
//     // Retrieve Already Saved Activities From Local Storage (LS)
//     const savedActivities = localStorage.getItem("activities");
//     return savedActivities ? JSON.parse(savedActivities) : activitiesData;
//   });

//   // Save Activities To LS
//   useEffect(() => {
//     localStorage.setItem("activities", JSON.stringify(filteredActivities));
//   }, [filteredActivities]);

//   // Search Functionality
//   const handleSearch = (query) => {
//     if (!query) {
//       setFilteredActivities(activitiesData);
//     } else {
//       const result = filteredActivities
//         .map((day) => ({
//           ...day,
//           records: day.records.filter((record) =>
//             record.employeeName.toLowerCase().includes(query.toLowerCase())
//           ),
//         }))
//         .filter((day) => day.records.length > 0);
//       setFilteredActivities(result);
//     }
//   };

//   // Filter Functionality
//   const handleFilter = (filterType) => {
//     if (!filterType) {
//       setFilteredActivities(activitiesData);
//     } else {
//       const result = filteredActivities
//         .map((day) => ({
//           ...day,
//           records: day.records.filter((record) =>
//             record.activity.toLowerCase().includes(filterType)
//           ),
//         }))
//         .filter((day) => day.records.length > 0);
//       setFilteredActivities(result);
//     }
//   };

//   // Add New Activity Functionality
//   const handleAddActivity = (date, newActivity) => {
//     const existingDateIndex = filteredActivities.findIndex(
//       (day) => day.date === date
//     );

//     if (existingDateIndex !== -1) {
//       const updatedActivities = [...filteredActivities];
//       updatedActivities[existingDateIndex].records.push(newActivity);
//       setFilteredActivities(updatedActivities);
//     } else {
//       const newDay = {
//         date,
//         records: [newActivity],
//       };
//       setFilteredActivities([...filteredActivities, newDay]);
//     }
//   };

//   return (
//     <div className="overflow-y-auto h-[26rem] pt-8 bg-[#F2F1F1] rounded-[16px]">
//       <ActivitiesList activities={filteredActivities} />
//     </div>
//   );
// };

// export default Activities;



// import React, { useState, useEffect } from "react";
// import activitiesData from "../Recent Activities/ActivitiesDataArray";
// import ActivitiesList from "./ActivitiesList";
// import AddActivityForm from "./AddActivitiesForm";


// const Activities = () => {
//   const [filteredActivities, setFilteredActivities] = useState(() => {
//     const savedActivities = localStorage.getItem("activities");
//     return savedActivities ? JSON.parse(savedActivities) : activitiesData;
//   });

//   useEffect(() => {
//     localStorage.setItem("activities", JSON.stringify(filteredActivities));
//   }, [filteredActivities]);

//   // Add New Activity Functionality
//   const handleAddActivity = (date, newActivity) => {
//     const existingDateIndex = filteredActivities.findIndex(
//       (day) => day.date === date
//     );

//     if (existingDateIndex !== -1) {
//       const updatedActivities = [...filteredActivities];
//       updatedActivities[existingDateIndex].records.push(newActivity);
//       setFilteredActivities(updatedActivities);
//     } else {
//       const newDay = {
//         date,
//         records: [newActivity],
//       };
//       setFilteredActivities([...filteredActivities, newDay]);
//     }
//   };

//   return (
//     <div>
//       <AddActivityForm onAddActivity={handleAddActivity} />
//       <ActivitiesList activities={filteredActivities} />
//     </div>
//   );
// };

// export default Activities;


import React, { useState, useEffect } from "react";
import activitiesData from "../Recent Activities/ActivitiesDataArray";
import ActivitiesList from "./ActivitiesList";
import AddActivityForm from "./AddActivitiesForm";


const Activities = () => {
  const [filteredActivities, setFilteredActivities] = useState(() => {
    const savedActivities = localStorage.getItem("activities");
    return savedActivities ? JSON.parse(savedActivities) : activitiesData;
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(filteredActivities));
  }, [filteredActivities]);

  const handleAddActivity = (date, newActivity) => {
    const existingDateIndex = filteredActivities.findIndex(
      (day) => day.date === date
    );

    if (existingDateIndex !== -1) {
      const updatedActivities = [...filteredActivities];
      updatedActivities[existingDateIndex].records.push(newActivity);
      setFilteredActivities(updatedActivities);
    } else {
      const newDay = {
        date,
        records: [newActivity],
      };
      setFilteredActivities([...filteredActivities, newDay]);
    }
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded">
        Add New Activity
      </button>
      <ActivitiesList activities={filteredActivities} />
      <AddActivityForm
        onAddActivity={handleAddActivity}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Activities;
