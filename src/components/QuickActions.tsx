import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import {
  TbBrandWhatsapp,
  TbEmergencyBed,
  TbPhone,
  TbPlaneDeparture,
  TbStethoscope,
} from "react-icons/tb";

export interface QuickActionsProps {
  id: number;
  label: string;
  Icon: React.ReactComponentElement<IconType>;
}

const quickActionsData: QuickActionsProps[] = [
  {
    id: 101,
    label: "Call",
    Icon: <TbPhone />,
  },
  {
    id: 102,
    label: "Whatsapp",
    Icon: <TbBrandWhatsapp />,
  },
  {
    id: 103,
    label: "Emergency",
    Icon: <TbEmergencyBed />,
  },
  {
    id: 104,
    label: "Air Ambulance",
    Icon: <TbPlaneDeparture />,
  },
  {
    id: 105,
    label: "Consult a Doctor",
    Icon: <TbStethoscope />,
  },
];

const QuickActions = () => {
  return (
    <div className='max-w-7xl'>
      <h2 className='font-semibold text-white'>Quick Actions</h2>
      <div className='flex flex-wrap items-center justify-start gap-2 py-2 text-rose-50'>
        {quickActionsData.map(({ Icon, label, id }, index) => (
          <>
            <Link href='#!' key={"Quick actions" + id * index}>
              <div className='flex items-center justify-center px-4 py-2 space-x-1 text-xs font-semibold border rounded-full border-rose-400/50 bg-rose-700'>
                <TbPhone className='w-5 h-5' />
                <label>{label}</label>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
