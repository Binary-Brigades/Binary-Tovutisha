import React from "react";

function Testimonials() {
  const testimonials = [
    {
      image: "/Testimonial1.jpg",
      text: "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself.",
      name: "Tom Hardy",
      title: "Principal",
    },
    {
      image: "/Testimonial2.jpg",
      text: "The dashboard provided by Tovutisha is a game-changer for our firm. We now have access to critical insights in real-time, which has dramatically improved our decision-making process and overall efficiency.",
      name: "Emma Stone",
      title: "Principal",
    },
    {
      image: "/Testimonial3.jpg",
      text: "Use social media testimonials to build trust with your audience and showcase your brand's positive impact.",
      name: "Chris Evans",
      title: "Principal",
    },
  ];

  return (
    <div>
      <p className="text-left px-24 text-lg font-semibold text-[#007A37] mb-8">
        What clients say
      </p>
      <div className="flex items-center justify-center px-5 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full max-w-sm px-5 pt-5 pb-10 mx-auto text-gray-800 bg-[#1877f2] rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50"
            >
              <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src={testimonial.image}
                    className="mx-auto object-cover rounded-full h-20 w-20"
                  />
                </a>
              </div>
              <div className="w-full mb-10">
                <div className="h-3 text-3xl leading-tight text-left text-white">
                  “
                </div>
                <p className="px-5 text-sm text-center text-white dark:text-gray-100">
                  {testimonial.text}
                </p>
                <div className="h-3 -mt-3 text-3xl leading-tight text-right text-white">
                  ”
                </div>
              </div>
              <div className="w-full">
                <p className="font-bold text-center text-white text-md">
                  {testimonial.name}
                </p>
                <p className="text-xs text-center text-white dark:text-gray-300">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
