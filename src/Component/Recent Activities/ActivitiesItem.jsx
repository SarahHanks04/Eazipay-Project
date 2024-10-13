import React from "react";

const ActivitiesItem = ({ activity }) => {
  const getInitials = (name) => {
    if (!name) return "";
    const nameArray = name.split(" ");
    const initials = nameArray.map((n) => n[0].toUpperCase()).join("");
    return initials;
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b mb-4 bg-white rounded-md shadow-sm space-y-4 md:space-y-0 md:space-x-6">
      <div className="w-full md:w-auto">
        <p className="text-[#8D8E8D] text-[14px] md:text-[16px]">EMPLOYEE MANAGEMENT</p>
        {activity?.employee && (
          <div className="flex items-center gap-4 mt-2">
            <span className="text-white bg-[#01AA8C] py-2 px-3 rounded-full text-sm md:text-base">
              {getInitials(activity.employee)}
            </span>
            <span className="text-[#515251] font-bold text-[16px] md:text-[18px]">
              {activity.employee}
            </span>
          </div>
        )}
      </div>

      <div className="w-full md:w-auto">
        <p className="text-[#8D8E8D] text-[14px] md:text-[16px]">ACTIVITY</p>
        <span className="text-[#515251] text-sm md:text-base">{activity.activity}</span>
      </div>

      <div className="w-full md:w-auto">
        <p className="text-[#8D8E8D] text-[14px] md:text-[16px]">EMPLOYEE ID</p>
        <span className="text-[#515251] text-sm md:text-base">
          {activity.id ? activity.id : "No ID"}
        </span>
      </div>

      <div className="flex justify-between w-full md:w-auto md:gap-8">
        {activity.bonusName && (
          <div>
            <p className="text-[#8D8E8D] text-[14px] md:text-[16px]">BONUS</p>
            <span className="text-[#515251] text-sm md:text-base">{activity.bonusName}</span>
          </div>
        )}
        {activity.amount && (
          <div>
            <p className="text-[#8D8E8D] text-[14px] md:text-[16px]">AMOUNT</p>
            <span className="text-red-600 font-bold text-sm md:text-base">{activity.amount}</span>
          </div>
        )}
      </div>

      <div className="w-full md:w-auto">
        <p className="text-[#8D8E8D] text-[14px] md:text-[16px]">TIME</p>
        <span className="text-[#515251] text-sm md:text-base">{activity.time}</span>
      </div>
    </div>
  );
};

export default ActivitiesItem;
