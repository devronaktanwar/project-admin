import React from "react";
import { twMerge } from "tailwind-merge";

const actions = [
  { label: "View details", value: "VIEW" },
  { label: "Edit Appointment", value: "EDIT" },
  { label: "Reschedule", value: "RESCHEDULE" },
  { label: "Mark as completed", value: "COMPLETE" },
  { label: "Cancel Appointment", value: "CANCEL" },
];

const ActionCard = () => {
  const handleActionClick = (value: string) => {
    console.log("Action selected:", value);
    // You can handle logic based on the action value
  };

  return (
    <div className="w-full">
      {actions.map((action) => (
        <div
          key={action.value}
          onClick={() => handleActionClick(action.value)}
          className={twMerge(
            "cursor-pointer rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors",
            action.value === "CANCEL" && "text-red-500 hover:bg-red-100"
          )}
        >
          {action.label}
        </div>
      ))}
    </div>
  );
};

export default ActionCard;
