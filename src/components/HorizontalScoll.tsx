import React from "react";
import { BiArrowBack } from "react-icons/bi";

const HorizontalCard = () => {
  return (
    <div className='inline-block pr-3'>
      <div className='w-40 h-40 max-w-xs overflow-hidden rounded-3xl shadow-md bg-rose-500 hover:shadow-xl transition-shadow duration-300 ease-in-out'></div>
    </div>
  );
};

const HorizontalScoll = () => {
  return (
    <>
      <div className='flex flex-col m-auto p-auto'>
        <div className='justify-between items-center flex pt-7 py-5 lg:px-20 md:px-10 px-4 lg:mx-40 md:mx-20 mx-2 font-bold text-xl text-black'>
          <h1 className=''>Recommended for you</h1>
          <span className='text-xs font-semibold text-gray-200 bg-black rounded-full py-1 px-2'>
            View all
          </span>
        </div>
        <div className='flex overflow-x-scroll pb-6 hide-scroll-bar'>
          <div className='flex flex-nowrap lg:ml-40 md:ml-20 ml-6'>
            <div className='inline-block pr-3'>
              <div className='w-40 h-40 max-w-xs overflow-hidden flex justify-center items-center rounded-3xl duration-300 ease-in-out'>
                <div className='flex flex-col space-y-4'>
                  <h3 className='font-medium text-gray-500'>
                    All your recommendations
                  </h3>
                  <span className='bg-black text-white h-10 w-10 flex justify-center items-center rounded-full'>
                    <BiArrowBack className='h-6 w-6' />
                  </span>
                </div>
              </div>
            </div>
            {[1, 2, 3, 4, 5, 6, 7].map((data, index) => (
              <HorizontalCard key={data * index * 3} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalScoll;
