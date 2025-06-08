"use client";
import { FilePlus } from "lucide-react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";

const ActionContainer = () => {
  const [selectedTab, setSelectedTab] = useState("ALL");

  return (
    <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-y-4">
      <div className="flex bg-[#f5f5f5] text-xs md:text-sm p-0.5 rounded">
        {tabs.map((item, index) => {
          return (
            <div
              key={index}
              className={twMerge(
                "px-3 py-2 font-medium text-description cursor-pointer basis-1/5 flex justify-center items-center",
                item.value === selectedTab &&
                  "bg-white text-black shadow rounded"
              )}
              onClick={() => setSelectedTab(item.value)}
            >
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <Button
          size="lg"
          className="flex items-center"
          // onClick={() => setOpenModal({ ...openModal, add: true })}
        >
          <FilePlus /> Add appointment
        </Button>
      </div>
    </div>
  );
};

export default ActionContainer;
const tabs = [
  {
    label: "All",
    value: "ALL",
  },
  {
    label: "Upcoming",
    value: "UPCOMING",
  },
  {
    label: "Today",
    value: "TODAY",
  },
  {
    label: "Completed",
    value: "COMPLETED",
  },
  {
    label: "Cancelled",
    value: "CANCELLED",
  },
];
