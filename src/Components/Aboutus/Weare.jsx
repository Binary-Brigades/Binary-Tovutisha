import React from "react";

function Wedo() {
  return (
    <div className="bg-white mt-16  py-4 md:py-4 px-2 md:px-12 lg:px-20 w-screen">
      <div className="text-center mb-4">
        <p className="tracking-widest font-semibold md:text-xl text-lg text-[#007A37]">
          Who We Are
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="md:w-[40%] flex justify-center"> 
          <img
            src="/decentralized finance.png"
            className="w-56 h-56 md:h-auto object-cover md:rounded-md md:w-64 my-2 rounded-[50%]"
            alt=""
          />
        </div>
        <div className="md:w-[60%] md:pl-6"> 
          <p className="text-justify">
          At Tovutisha, we are a dynamic team of innovators dedicated to modernizing educational institutions, businesses, and organizations through cutting-edge digital solutions. Our expertise spans web development, design, and digital strategy, allowing us to create bespoke websites and dashboards that drive engagement, efficiency, and growth. With a commitment to excellence and a focus on leveraging the latest technologies, we deliver tailored solutions that not only meet but exceed our clients' expectations
          </p>
        </div>
      </div>
    </div>
  );
}

export default Wedo;
