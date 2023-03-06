import Image from "next/image";
import React from "react";

const AdminHomePage = () => {
  return (
    <div className='flex h-screen mx-auto overflow-hidden max-w-7xl'>
      {/* <!-- Sidebar -->
  <%= require('html-loader!./partials/sidebar.html') %> */}

      {/* <!-- Content area --> */}
      <div className='relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto'>
        {/* <!-- Site header -->
      <%= require('html-loader!./partials/header.html') %> */}

        <main>
          <div className='w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl'>
            {/* <!-- Page header --> */}
            <div className='mb-8'>
              {/* <!-- Title --> */}
              <h1 className='text-2xl font-bold text-gray-800 md:text-3xl'>
                Account Settings ✨
              </h1>
            </div>

            <div className='mb-8 overflow-hidden bg-white shadow-lg rounded-xl'>
              <div className='flex flex-col md:flex-row md:-mr-px'>
                {/* <!-- Sidebar --> */}
                {/* <%= require('html-loader!./partials/settings-navigation.html') %> */}

                {/* <!-- Panel --> */}
                <div className='grow'>
                  {/* <!-- Panel body --> */}
                  <div className='p-6 space-y-6 xl:p-10'>
                    <h2 className='mb-5 text-2xl font-bold text-gray-800'>
                      My Account
                    </h2>

                    {/* <!-- Picture --> */}
                    <section>
                      <div className='flex items-center'>
                        <div className='mr-4'>
                          <Image
                            className='w-20 h-20 rounded-full'
                            src='https://images.unsplash.com/photo-1478476868527-002ae3f3e159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoY2FyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                            width={80}
                            height={80}
                            alt='User upload'
                          />
                        </div>
                        <button className='text-white bg-blue-500 btn-sm hover:bg-blue-600'>
                          Change
                        </button>
                      </div>
                    </section>

                    {/* <!-- Business Profile --> */}
                    <section>
                      <h3 className='mb-1 text-xl font-bold leading-snug text-gray-800'>
                        Business Profile
                      </h3>
                      <div className='text-sm'>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit.
                      </div>
                      <div className='mt-5 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4'>
                        <div className='sm:w-1/3'>
                          <label
                            className='block mb-1 text-sm font-medium'
                            htmlFor='name'
                          >
                            Business Name
                          </label>
                          <input
                            id='name'
                            className='w-full form-input'
                            type='text'
                            value='Acme Inc.'
                            onChange={() => null}
                          />
                        </div>
                        <div className='sm:w-1/3'>
                          <label
                            className='block mb-1 text-sm font-medium'
                            htmlFor='business-id'
                          >
                            Business ID
                          </label>
                          <input
                            id='business-id'
                            className='w-full form-input'
                            type='text'
                            value='Kz4tSEqtUmA'
                            onChange={() => null}
                          />
                        </div>
                        <div className='sm:w-1/3'>
                          <label
                            className='block mb-1 text-sm font-medium'
                            htmlFor='location'
                          >
                            Location
                          </label>
                          <input
                            id='location'
                            className='w-full form-input'
                            type='text'
                            value='London, UK'
                            onChange={() => null}
                          />
                        </div>
                      </div>
                    </section>

                    {/* <!-- Email --> */}
                    <section>
                      <h3 className='mb-1 text-xl font-bold leading-snug text-gray-800'>
                        Email
                      </h3>
                      <div className='text-sm'>
                        Excepteur sint occaecat cupidatat non proident sunt in
                        culpa qui officia.
                      </div>
                      <div className='flex flex-wrap mt-5'>
                        <div className='mr-2'>
                          <label className='sr-only' htmlFor='email'>
                            Business email
                          </label>
                          <input
                            id='email'
                            className='form-input'
                            type='email'
                            value='admin@acmeinc.com'
                            onChange={() => null}
                          />
                        </div>
                        <button className='text-blue-500 border-gray-200 shadow-sm btn hover:border-gray-300'>
                          Change
                        </button>
                      </div>
                    </section>

                    {/* <!-- Password --> */}
                    <section>
                      <h3 className='mb-1 text-xl font-bold leading-snug text-gray-800'>
                        Password
                      </h3>
                      <div className='text-sm'>
                        You can set a permanent password if you don&apos;t want
                        to use temporary login codes.
                      </div>
                      <div className='mt-5'>
                        <button className='inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium text-blue-500 border border-gray-200 rounded shadow-sm'>
                          Set New Password
                        </button>
                      </div>
                    </section>
                  </div>

                  {/* <!-- Panel footer --> */}
                  <footer>
                    <div className='flex flex-col px-6 py-6 border-t border-gray-200'>
                      <div className='flex self-end'>
                        <button className='text-gray-600 border-gray-200 btn hover:border-gray-300'>
                          Cancel
                        </button>
                        <button className='ml-3 text-white bg-blue-500 btn hover:bg-blue-600'>
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminHomePage;
