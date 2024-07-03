import React from "react";

function About() {
  return (
    <div className="w-screen bg-[#ffffff] px-4 md:px-12 lg:px-20">
      <p className="text-[#007A37] md:text-left text-center md:text-xl text-lg font-semibold py-2">
        Theory of Change
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:justify-between md:py-12 py-5">
        <div className="bg-gradient-to-b from-[#159957] to-[#155799]  flex-col gap-3 rounded-md justify-center items-center flex shadow-md md:shadow-lg p-4 border-[1px] border-[#590000]/80">
          <img src="/transform.png" alt="We Transform" className="w-16 h-16 mb-4 rounded-md" /> 
          <h3 className="font-bold capitalize text-black">Web Design</h3>
          <p className="font-semibold tracking-wide text-black text-center">
          We craft user-centric websites and dashboards that are both visually appealing and highly functional.
          </p>
        </div>
        <div className="bg-gradient-to-b from-[#0cebeb] via-[#20e3b2] to-[#29ffc6]   flex-col gap-3 rounded-md justify-center items-center flex  shadow-md md:shadow-lg p-5  border-[1px] border-[#590000]/80">
        <img src="/build.png" alt="We Transform" className="w-16 h-16 mb-4 rounded-md" />
          <h3 className="font-bold capitalize text-black">
            We Build.
          </h3>
          <p className="font-semibold tracking-wide text-black text-center">
          We develop robust digital solutions that address the unique challenges of our clients, ensuring scalability and performance.
          </p>
        </div> 
        <div className="bg-gradient-to-b from-[#00f260] to-[#0575e6]  flex-col gap-3 rounded-md justify-center items-center flex  shadow-md md:shadow-lg p-5 md:p-8 border-[1px] border-[#590000]/80">
          <img src="/transform.png" alt="We Transform" className="w-16 h-16 mb-4 rounded-md" />  
          <h3 className="font-bold capitalize text-black">We Transform</h3>
          <p className="font-semibold tracking-wide text-black text-center">
          We drive meaningful change by enhancing digital capabilities, improving efficiency, and supporting long-term growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
