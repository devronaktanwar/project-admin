import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { IoMdMore } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ActionCard from "./ActionCard";

const Listing = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeaders.map((header, index) => (
              <TableHead key={index} className="text-description text-base">{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="font-medium">
          {appointmentData.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell className="flex items-center gap-3 py-6 md:text-base">
                <div className="border h-8 w-8 md:h-10 md:w-10 rounded-full flex justify-center items-center font-semibold md:text-lg bg-primary-light">
                    {appointment.patient.charAt(0)}
                </div>
                <h2>{appointment.patient}</h2>
              </TableCell>
              <TableCell>{appointment.doctor}</TableCell>
              <TableCell>{appointment.dateTime}</TableCell>
              <TableCell>{appointment.status}</TableCell>
              <TableCell>{appointment.type}</TableCell>
              <TableCell>{appointment.duration}</TableCell>
              <TableCell>
              <Popover>
                  <PopoverTrigger asChild>
                  <div className="text-lg border w-fit p-1 rounded">
                <IoMdMore className="rotate-90"/>
                </div>                 
                 </PopoverTrigger>
                  <PopoverContent align="end" className="w-56 !p-2 text-description font-medium">
                    <ActionCard/>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Listing;
const appointmentData = [
  {
    id: 1,
    patient: "John Doe",
    doctor: "Dr. Smith",
    dateTime: "2025-06-10 10:00 AM",
    status: "Confirmed",
    type: "Online",
    duration: "30 mins",
  },
  {
    id: 2,
    patient: "Alice Johnson",
    doctor: "Dr. Brown",
    dateTime: "2025-06-11 2:30 PM",
    status: "Pending",
    type: "In-Person",
    duration: "45 mins",
  },
  {
    id: 3,
    patient: "Michael Green",
    doctor: "Dr. Patel",
    dateTime: "2025-06-12 9:00 AM",
    status: "Cancelled",
    type: "Online",
    duration: "15 mins",
  },
  {
    id: 4,
    patient: "Michael Green",
    doctor: "Dr. Patel",
    dateTime: "2025-06-12 9:00 AM",
    status: "Cancelled",
    type: "Online",
    duration: "15 mins",
  },
  {
    id: 5,
    patient: "Michael Green",
    doctor: "Dr. Patel",
    dateTime: "2025-06-12 9:00 AM",
    status: "Cancelled",
    type: "Online",
    duration: "15 mins",
  },
  {
    id: 6,
    patient: "Michael Green",
    doctor: "Dr. Patel",
    dateTime: "2025-06-12 9:00 AM",
    status: "Cancelled",
    type: "Online",
    duration: "15 mins",
  },
  {
    id: 7,
    patient: "Michael Green",
    doctor: "Dr. Patel",
    dateTime: "2025-06-12 9:00 AM",
    status: "Cancelled",
    type: "Online",
    duration: "15 mins",
  },
  {
    id: 8,
    patient: "Michael Green",
    doctor: "Dr. Patel",
    dateTime: "2025-06-12 9:00 AM",
    status: "Cancelled",
    type: "Online",
    duration: "15 mins",
  },
  {
    id: 9,
    patient: "Michael Green",
    doctor: "Dr. Patel",
    dateTime: "2025-06-12 9:00 AM",
    status: "Cancelled",
    type: "Online",
    duration: "15 mins",
  },
  {
    id: 10,
    patient: "Michael Green",
    doctor: "Dr. Patel",
    dateTime: "2025-06-12 9:00 AM",
    status: "Cancelled",
    type: "Online",
    duration: "15 mins",
  },
  {
    id: 11,
    patient: "Michael Green",
    doctor: "Dr. Patel",
    dateTime: "2025-06-12 9:00 AM",
    status: "Cancelled",
    type: "Online",
    duration: "15 mins",
  },
  {
    id: 12,
    patient: "Michael Green",
    doctor: "Dr. Patel",
    dateTime: "2025-06-12 9:00 AM",
    status: "Cancelled",
    type: "Online",
    duration: "15 mins",
  },
];

const tableHeaders = [
  "Patient",
  "Doctor",
  "Date & Time",
  "Status",
  "Type",
  "Duration",
  "Actions",
];
