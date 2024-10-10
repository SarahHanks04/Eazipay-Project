import React from "react";
import ActivitiesItem from "./ActivitiesItem";

const ActivitiesList = ({activities}) => {
  return (
    <div>
      {activities.map((day, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-lg font-semibold">{day.date}</h2>
          {day.records.map((activity, index) => (
            <ActivitiesItem key={index} activity={activity} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ActivitiesList;
