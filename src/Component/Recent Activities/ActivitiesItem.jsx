import React from "react";

const ActivitiesItem = ({ activity }) => {
  const getInitials = (name) => {
    if (!name) return "";
    const nameArray = name.split(" ");
    const initials = nameArray.map((n) => n[0].toUpperCase()).join("");
    return initials;
  };

  console.log(activity);
  return (
    <div className="flex justify-between items-center p-4 border-b mb-4 bg-white rounded-md shadow-sm">
      <div>
        <p className="text-[#8D8E8D] text-[16px]">EMPLOYEE MANAGEMENT</p>

        {/* Display employee name with initials next to it */}
        {activity?.employee && (
          <div className="flex items-center gap-4">
            {/* Conditionally render the initials */}
            <span className="text-white bg-[#01AA8C] py-[7px] px-[10px] rounded-full">
              {getInitials(activity.employee)}
            </span>
            <span className="text-[#515251] font-bold text-[18px]">
              {activity.employee}
            </span>
          </div>
        )}
      </div>

      <div>
        <p className="text-[#8D8E8D] text-[16px]">ACTIVITY</p>
        <span className="text-[#515251]">{activity.activity}</span>
      </div>

      <div>
        <p className="text-[#8D8E8D] text-[16px]">Employee</p>
        {/* Display id only if it's present */}
        {activity.id ? (
          <span className="text-[#515251]">{activity.id}</span>
        ) : (
          <span className="text-[#515251]">No ID</span>
        )}
      </div>

      <div>
        {activity.bonusName && (
          <div>
            <p className="text-[#8D8E8D] text-[16px]">BONUS</p>
            <span className="text-[#515251]">{activity.bonusName}</span>
          </div>
        )}
        {activity.amount && (
          <div>
            <p className="text-[#8D8E8D] text-[16px]">AMOUNT</p>
            <span className="text-red-600 font-bold">{activity.amount}</span>
          </div>
        )}
      </div>
      <div>
        <p className="text-[#8D8E8D] text-[16px]">TIME</p>
        <span className="text-[#515251]">{activity.time}</span>
      </div>
    </div>
  );
};

export default ActivitiesItem;
