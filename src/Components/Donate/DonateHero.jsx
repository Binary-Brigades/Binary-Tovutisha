import React from "react";
import "slick-carousel/slick/slick.css";



function Hero() {
  
  return (
    <div>
        <div
          
          className="h-[60vh] relative flex items-center flex-col text-center justify-center w-screen"
        >
          <img
            src="/background image impacts.jpeg"
            className="w-full z-[-1] h-full absolute top-0 right-0 object-cover self-center"
            alt=""
          />
          <div className="text-white w-full h-full flex px-4 flex-col items-center  justify-center ">
            <h1 className="font-semibold lg:text-5xl pt-12 md:text-4xl text-3xl">
              Support Our Mission.
            </h1>
            <p className="lg:text-2xl text-md mt-10 text-xl md:text-lg">
            Your Contribution helps us innovate and empower organizations.
            </p>{" "}
          </div>
        </div>
    </div>  
  );
}

export default Hero;
