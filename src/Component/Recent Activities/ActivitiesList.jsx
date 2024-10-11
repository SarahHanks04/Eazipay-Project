import React from "react";
import ActivitiesItem from "./ActivitiesItem";

const ActivitiesList = ({activities}) => {
  return (
    <div className="bg-[#F2F1F1] px-[1rem]">
      {activities.map((day, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-lg font-medium text-[#515251] mb-4">{day.date}</h2>
          {day.records.map((activity, index) => (
            <ActivitiesItem key={index} activity={activity} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ActivitiesList;
