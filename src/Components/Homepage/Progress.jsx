import React from "react";

function Progress() {
  return (
    <div className="mb-4 text-center">
      <div className="py-4 px-24 text-left font-semibold text-xl text-[#007A37] dark:text-gray-300">
        Where we are today.
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <div className="bg-gradient-to-b from-[#2193b0] to-[#6dd5ed] relative w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
          <h3 className="py-4 text-2xl font-semibold text-white sm:text-xl dark:text-white">
            250+
          </h3>
          <p className="py-4 text-white text-md dark:text-gray-300">
            Successfully Delivered Projects.
          </p>
        </div>

        <div className="bg-gradient-to-b from-[#667db6] via-[#0082c8] to-[#0082c8] relative w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-10 md:mt-14 lg:mt-18 dark:bg-gray-800">
          <h3 className="py-4 text-2xl font-semibold text-white sm:text-xl dark:text-white">
            98%
          </h3>
          <p className="py-4 text-white text-md dark:text-gray-300">
            Customer Satisfaction.
          </p>
        </div>

        <div className="bg-gradient-to-b from-[#1f4037] to-[#99f2c8] relative w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-20 md:mt-24 lg:mt-28 dark:bg-gray-800">
          
          <h3 className="py-4 text-2xl font-semibold text-white sm:text-xl dark:text-white">
            25% 
          </h3>
          <p className="py-4 text-white text-md dark:text-gray-300">
            Quarterly Revenue Growth Rate.
          </p>
        </div>

        <div className=" bg-gradient-to-b from-[#11998e] to-[#38ef7d] relative w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-8 md:mt-12 lg:mt-16 dark:bg-gray-800">
          <h3 className="py-4 text-2xl font-semibold text-white sm:text-xl dark:text-white">
            50+
          </h3>
          <p className="py-4 text-white text-md dark:text-gray-300">
            New Clients Onboarded.
          </p>
        </div>

        <div className=" bg-gradient-to-b from-[#00b09b] to-[#96c93d] relative w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-10 md:mt-14 lg:mt-18 dark:bg-gray-800">
          <h3 className="py-4 text-2xl font-semibold text-white sm:text-xl dark:text-white">
            90%
          </h3>
          <p className="py-4 text-white text-md dark:text-gray-300">
            Client Retention Rate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Progress;
