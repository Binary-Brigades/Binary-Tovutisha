import React from "react";

function Mission() {
  return (
    <div className="w-screen bg-[#ffffff] px-4 md:px-12 lg:px-20">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:justify-between md:py-12 py-5">
        <div className="flex-col gap-3 rounded-md justify-center items-center flex shadow-md md:shadow-lg p-4 border-[1px]">
          <img src="/mission.png" alt="We Transform" className="w-24 h-24 mb-4 rounded-md" /> 
          <h3 className="font-bold capitalize text-black">Our Mission</h3>
          <p className="tracking-wide text-black text-justify">
          To transform the digital presence of educational institutions, businesses, and organizations by delivering innovative and customized web solutions. We aim to empower our clients with cutting-edge tools and technologies that enhance engagement, streamline operations, and drive sustainable growth
          </p>
        </div>
        <div className=" flex-col gap-3 rounded-md justify-center items-center flex  shadow-md md:shadow-lg p-5  border-[1px]">
        <img src="/vision.png" alt="We Transform" className="w-24 h-24 mb-4 rounded-md" />
          <h3 className="font-bold capitalize text-black">
            Our Vision.
          </h3>
          <p className="tracking-wide text-black text-justify">
          To be the leading provider of digital solutions that bridge the gap between technology and user experience. We aspire to create a digital ecosystem where every institution and organization can seamlessly integrate modern technologies to achieve their full potential and make a lasting impact.
          </p>
        </div> 
        <div className="flex-col gap-3 rounded-md justify-center items-center flex shadow-md md:shadow-lg p-5 md:p-8 border-[1px]">
        <img src="/pillar.png" alt="We Transform" className="w-24 h-24 mb-4 rounded-md" />
        
        <h3 className="font-bold capitalize text-black">Our Values.</h3>
        
        <div className="tracking-wide text-black text-justify">
          <p className="text-justify mb-2">
            <span className="text-green-500">Innovation:</span> <span className="text-black">We constantly strive to stay ahead of the technological curve.</span>
          </p>
          <p className="text-justify mb-2">
            <span className="text-green-500">Customer-Centricity:</span> <span className="text-black">Our clients are at the heart of everything we do.</span>
          </p>
          <p className="text-justify">
            <span className="text-green-500">Collaboration:</span> <span className="text-black">We believe in the power of teamwork.</span>
          </p>
        </div>
</div>

      </div>
    </div>
  );
}

export default Mission;
