import React from "react";
import "slick-carousel/slick/slick.css";

function Hero() {
  return (
    <div>
      <div className="h-[60vh] relative flex items-center justify-center w-screen">
        <img
          src="/background image contacts.jpeg"
          className="w-full z-[-1] h-full absolute top-0 right-0 object-cover"
          alt=""
        />
        <div className="text-white w-full h-full flex px-4 items-center ">
          <div className="flex w-full justify-between items-center">
            <h1 className="font-semibold lg:text-5xl md:text-4xl text-3xl">
              Our Contacts
            </h1>
            <p className="lg:text-2xl md:text-lg text-md">
              Get in touch with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
