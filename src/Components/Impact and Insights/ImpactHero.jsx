import React from "react";
import "slick-carousel/slick/slick.css";

function Hero() {
  return (
    <div>
      <div className="h-[60vh] relative w-screen">
        <img
          src="background image impacts1.jpeg"
          className="w-full z-[-1] h-full absolute top-0 right-0 object-cover"
          alt=""
        />
        <div className="text-white w-full h-full flex px-4 justify-start items-start">
          <h1 className=" p-8 font-semibold lg:text-3xl md:text-2xl text-xl absolute top-12 left-8">
            Discover Tovutisha's impacts and <br></br> insights to institutions
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
