import React from "react";

function Wedo() {
  return (
    <div className="bg-white py-4 md:py-6 px-4 md:px-12 lg:px-20 w-screen">
      <p className="tracking-widest font-semibold md:text-xl text-lg text-[#007A37]">
        What We Do
      </p>
      <div className="w-full  mt-4 flex items-center flex-col-reverse md:justify-between   md:flex-row">
        <p className="md:max-w-[60%] ">
        At Tovutisha, we specialize in creating cutting-edge websites and dashboards tailored to the unique needs of educational institutions, businesses, and organizations. Our goal is to empower you with digital tools that drive engagement, efficiency, and growth. With a focus on innovation and excellence, we deliver unique solutions that exceed expectations. Whether you need a modern website or a robust dashboard, 
        </p>
        <figcaption>
          <img
            src="/decentralized finance.png"
            className="w-56 h-56 md:h-auto object-cover md:rounded-md md:w-64 my-2  rounded-[50%]"
            alt=""
          />
         
        </figcaption>
      </div>
    </div>
  );
}

export default Wedo;
