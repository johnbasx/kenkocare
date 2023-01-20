import Link from "next/link";
import React from "react";
import {
  TbCalendarStats,
  TbHeartbeat,
  TbReportMedical,
  TbSmartHome,
  TbUser,
} from "react-icons/tb";

const BottomNav = () => {
  return (
    <nav className='fixed bottom-0 inset-x-0 bg-white flex justify-between text-xs text-black'>
      <Link
        href='#'
        className='w-full flex flex-col py-3 px-3 justify-center items-center text-center font-medium hover:text-blue-800'
      >
        <TbSmartHome className='h-6 w-6' />
        <span>Home</span>
      </Link>

      <Link
        href='#'
        className='w-full flex flex-col py-3 px-3 justify-center items-center text-center font-medium hover:text-blue-800'
      >
        <TbCalendarStats className='h-6 w-6' />
        <span>Appointments</span>
      </Link>

      <Link
        href='#'
        className='w-full flex flex-col py-3 px-3 justify-center items-center text-center font-medium hover:text-blue-800'
      >
        <TbReportMedical className='h-6 w-6' />
        <span>Reports</span>
      </Link>

      <Link
        href='#'
        className='w-full flex flex-col py-3 px-3 justify-center items-center text-center font-medium hover:text-blue-800'
      >
        <TbHeartbeat className='h-6 w-6' />
        <span>Profile</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
