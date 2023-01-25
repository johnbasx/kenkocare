import Image from "next/image";
import { Inter } from "@next/font/google";
import {
  TbBrandWhatsapp,
  TbEmergencyBed,
  TbMenu2,
  TbPhone,
  TbPlane,
  TbPlaneDeparture,
  TbSearch,
  TbStethoscope,
  TbUser,
} from "react-icons/tb";
import { TiLocationArrow } from "react-icons/ti";

import { RiSyringeLine } from "react-icons/ri";
import HorizontalScoll from "@/components/HorizontalScoll";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import QuickActions from "@/components/QuickActions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className='min-h-screen bg-rose-500'>
        <div className='py-2 text-xs font-semibold text-center bg-gradient-to-r from-purple-700 to-indigo-600 text-rose-50 animate-pulse'>
          <p className='animate-none'>Web application under Development</p>
        </div>
        <div className='grid grid-cols-1 gap-2 px-4 pt-6 pb-4 mx-auto max-w-7xl'>
          <div className='flex items-center justify-start gap-4'>
            <Image
              src='/logo/Medilane.png'
              alt='Medilane Logo'
              className='w-auto h-12'
              height={100}
              width={100}
            />
            <button className='flex items-center justify-center w-auto px-2 py-2 space-x-1 text-xs font-semibold text-left truncate rounded-full bg-rose-500 text-rose-50 text-ellipsis'>
              <TiLocationArrow className='w-5 h-5' />
              <span className='truncate'>
                Near JNIMS Hospital, Porompat, Imphal East, Manipur -795001
              </span>
            </button>
          </div>
          <div className='flex items-center justify-between'>
            <h1 className='text-xl text-black'>
              Hi, <span className='font-extrabold'>Naotonba</span>
            </h1>
            <div className='flex items-center text-gray-700'>
              {/* <TbPhone className='w-10 h-10 p-2 bg-white rounded-full' />
              <TbUser className='w-10 h-10 p-2 text-center bg-white rounded-full' /> */}
              <TbMenu2 className='w-8 h-8 text-white' />
            </div>
          </div>
          <div className='relative'>
            <div className='absolute top-0 left-0 py-2.5 px-2'>
              <TbSearch className='w-6 h-6 text-gray-300' />
            </div>
            <input
              type='text'
              placeholder='Search here'
              className='w-full px-3 py-3 pl-10 text-sm bg-white border rounded-lg shadow-lg placeholder:font-medium'
            />
          </div>
          <QuickActions />
        </div>

        <div className='bg-white pb-20 rounded-t-[2.5rem] h-full mt-2 overflow-hidden'>
          <HorizontalScoll />
          <div className='mx-auto max-w-7xl'>
            <h1 className='flex px-4 py-5 mx-2 text-xl font-bold text-black lg:px-20 md:px-10 lg:mx-40 md:mx-20'>
              About your health
            </h1>
            <div className='grid grid-cols-2 gap-4 px-6 lg:grid-cols-4'>
              {[1, 2, 3, 4].map((data, index) => (
                <div
                  className='p-4 space-y-2 bg-gray-100 border-4 border-indigo-100 aspect-square rounded-3xl'
                  key={"about health card" + 3 * data * index}
                >
                  <RiSyringeLine className='w-6 h-6 text-gray-600' />
                  <p className='text-xl font-semibold tracking-tight'>
                    Blood Analysis
                  </p>
                  <span className='text-xs'>0 pending</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
