import Image from "next/image";
import { Inter } from "@next/font/google";
import { BiSearch, BiUser } from "react-icons/bi";
import { RiSyringeLine } from "react-icons/ri";
import HorizontalScoll from "@/components/HorizontalScoll";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className='bg-rose-500 min-h-screen'>
        <div className='px-6 pb-4 pt-14 grid grid-cols-1 gap-6'>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-extrabold text-white'>Hi, Thoibi</h1>
            <span className='bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-md'>
              <BiUser className='h-5 text-gray-700 w-5 text-center' />
            </span>
          </div>
          <div className='relative'>
            <div className='absolute top-0 left-0 py-2.5 px-2'>
              <BiSearch className='h-6 w-6 text-gray-300' />
            </div>
            <input
              type='text'
              placeholder='Search here'
              className='bg-white placeholder:font-medium pl-10 px-3 shadow-lg border py-3 text-sm rounded-lg w-full'
            />
          </div>
        </div>

        <div className='bg-white pb-20 rounded-t-[2.5rem] h-full mt-2 overflow-hidden'>
          <HorizontalScoll />
          <div>
            <h1 className='flex py-5 lg:px-20 md:px-10 px-4 lg:mx-40 md:mx-20 mx-2 font-bold text-xl text-black'>
              About your health
            </h1>
            <div className='grid grid-cols-2 gap-4 px-6'>
              {[1, 2, 3, 4].map((data, index) => (
                <div
                  className='aspect-square rounded-3xl border-indigo-100 border-4 bg-gray-100 p-4 space-y-2'
                  key={"about health card" + 3 * data * index}
                >
                  <RiSyringeLine className='h-6 w-6 text-gray-600' />
                  <p className='font-semibold tracking-tigh text-xl'>
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
