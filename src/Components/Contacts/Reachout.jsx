import React from "react";

function Reachout() {
  return (
    <div className="w-screen bg-[#FFFFFF] px-4 md:px-12 lg:px-20">
      <p className="text-[#007A37] md:text-left text-center md:text-xl text-lg font-semibold py-2">
        Reach out To Us
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 md:justify-between md:py-12 py-5">
        <div className="bg-gradient-to-b from-[#159957] to-[#155799]  flex-col gap-3 rounded-md justify-center items-center flex shadow-md md:shadow-lg p-4 border-[1px] border-[#590000]/80">
          <img src="/location.png" alt="We Transform" className="w-16 h-16 mb-4 rounded-md" />
          <h3 className="font-bold capitalize text-black">Our Address</h3>
          <p className="font-semibold tracking-wide text-black text-center">
            Orange House, Masinde Muliro University.
          </p>
          <p className="font-semibold tracking-wide text-black text-center">
            P.O Box 190-50100,Kakamega.
          </p>
        </div>
        <div className="bg-gradient-to-b from-[#0cebeb] via-[#20e3b2] to-[#29ffc6]  flex-col gap-3 rounded-md justify-center items-center flex shadow-md md:shadow-lg p-5  border-[1px] border-[#590000]/80">
          <img src="/email.png" alt="We Transform" className="w-16 h-16 mb-4 rounded-md" />
          <h3 className="font-bold capitalize text-black">
            Email us
          </h3>
          <p className="font-semibold tracking-wide text-black text-center">
           info@tovutisha.co.ke
          </p>
        </div> 
        <div className="bg-gradient-to-b from-[#00f260] to-[#0575e6] flex-col gap-3 rounded-md justify-center items-center flex  shadow-md md:shadow-lg p-5 md:p-8 border-[1px] border-[#590000]/80">
          <img src="/call img.png" alt="We Transform" className="w-16 h-16 mb-4 rounded-md" />  
          <h3 className="font-bold capitalize text-black"> Call us</h3>
          <p className="font-semibold tracking-wide text-black text-center">
            +254113198044
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reachout;
