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
              <TableHead key={index} className="text-description text-base">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="font-medium">
          {appointmentData.map((appointment) => (
            <TableRow key={appointment.email}>
              <TableCell className="flex items-center gap-3 py-6 md:text-base">
                <div className="border h-8 w-8 md:h-10 md:w-10 rounded-full flex justify-center items-center font-semibold md:text-lg bg-primary-light">
                  {appointment.name.charAt(0)}
                </div>
                <h2>{appointment.name}</h2>
              </TableCell>
              <TableCell>{appointment.dateTime}</TableCell>
              <TableCell>{appointment.email}</TableCell>
              <TableCell>{appointment.contact}</TableCell>
              <TableCell>{appointment.age}</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="text-lg border w-fit p-1 rounded">
                      <IoMdMore className="rotate-90" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent
                    align="end"
                    className="w-56 !p-2 text-description font-medium"
                  >
                    <ActionCard />
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
    name: "Riya Sharma",
    dateTime: "2025-06-08T10:30:00",
    email: "riya.sharma@example.com",
    contact: "+91 9876543210",
    age: 27,
  },
  {
    name: "Aarav Mehta",
    dateTime: "2025-06-08T11:00:00",
    email: "aarav.mehta@example.com",
    contact: "+91 9123456780",
    age: 31,
  },
  {
    name: "Sneha Patel",
    dateTime: "2025-06-08T11:45:00",
    email: "sneha.patel@example.com",
    contact: "+91 9988776655",
    age: 24,
  },
  {
    name: "Karan Verma",
    dateTime: "2025-06-08T12:15:00",
    email: "karan.verma@example.com",
    contact: "+91 9345678123",
    age: 35,
  },
  {
    name: "Ishita Desai",
    dateTime: "2025-06-08T13:00:00",
    email: "ishita.desai@example.com",
    contact: "+91 9001234567",
    age: 29,
  },
  {
    name: "Rahul Kapoor",
    dateTime: "2025-06-08T13:30:00",
    email: "rahul.kapoor@example.com",
    contact: "+91 9812345678",
    age: 38,
  },
  {
    name: "Meera Joshi",
    dateTime: "2025-06-08T14:00:00",
    email: "meera.joshi@example.com",
    contact: "+91 9898989898",
    age: 26,
  },
  {
    name: "Devansh Thakur",
    dateTime: "2025-06-08T14:30:00",
    email: "devansh.thakur@example.com",
    contact: "+91 9765432109",
    age: 33,
  },
  {
    name: "Tanya Nair",
    dateTime: "2025-06-08T15:00:00",
    email: "tanya.nair@example.com",
    contact: "+91 9090909090",
    age: 22,
  },
  {
    name: "Rohit Bansal",
    dateTime: "2025-06-08T15:30:00",
    email: "rohit.bansal@example.com",
    contact: "+91 9887766554",
    age: 40,
  },
];

const tableHeaders = [
  "Name",
  "Date & Time",
  "Email",
  "Contact",
  "Age",
  "Actions",
];
