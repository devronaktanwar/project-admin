"use client";
import React from "react";
import { BiFilterAlt } from "react-icons/bi";
import Listing from "./Listing";
import ActionContainer from "./ActionContainer";
import { Search } from "lucide-react";

const Appointments = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <h2 className="text-xl lg:text-3xl font-bold tracking-tight">
            Appointments
          </h2>
          <p className="text-description text-sm lg:text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            dicta?
          </p>
        </div>
        <ActionContainer />
        <div className="flex flex-col gap-6 border rounded-md px-6 py-4 bg-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4">
            <div className="space-y-2">
              <h3 className="md:text-2xl font-semibold">All Appointments</h3>
              <p className="text-description text-sm lg:text-base">
                View and manage all scheduled appointments.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="border p-2 rounded text-primary">
                <BiFilterAlt/>
              </div>
              <div className="flex items-center w-full max-w-xl border rounded-full px-3 py-2 bg-white">
                <Search className="w-5 h-5 text-primary mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400 text-sm" 
                />
              </div>
            </div>
          </div>
          <Listing />
        </div>
      </div>
    </div>
  );
};

export default Appointments;