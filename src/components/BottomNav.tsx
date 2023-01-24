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
    <nav className='fixed inset-x-0 bottom-0 flex justify-between text-xs text-black border-t shadow-2xl bg-gray-300/20 backdrop-blur-md drop-shadow-2xl border-gray-200/20'>
      <Link
        href='#'
        className='flex flex-col items-center justify-center w-full px-3 py-3 font-medium text-center hover:text-blue-800'
      >
        <TbSmartHome className='w-6 h-6' />
        <span>Home</span>
      </Link>

      <Link
        href='#'
        className='flex flex-col items-center justify-center w-full px-3 py-3 font-medium text-center hover:text-blue-800'
      >
        <TbCalendarStats className='w-6 h-6' />
        <span>Appointments</span>
      </Link>

      <Link
        href='#'
        className='flex flex-col items-center justify-center w-full px-3 py-3 font-medium text-center hover:text-blue-800'
      >
        <TbReportMedical className='w-6 h-6' />
        <span>Reports</span>
      </Link>

      <Link
        href='#'
        className='flex flex-col items-center justify-center w-full px-3 py-3 font-medium text-center hover:text-blue-800'
      >
        <TbHeartbeat className='w-6 h-6' />
        <span>Profile</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
