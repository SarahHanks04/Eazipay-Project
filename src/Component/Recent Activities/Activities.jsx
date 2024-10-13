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
      <button onClick={openModal} className="bg-[#01AA8C] text-white p-2 w-6 h-6 flex justify-center items-center rounded-full">
        +
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
