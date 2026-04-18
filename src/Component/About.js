import React from "react";

function About() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl italic mb-6" data-aos="fade-down">
          Zomato
        </h1>

        {/* Top Images */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          <img src="leaf.avif" alt="leaf" className="h-10 w-12" data-aos="fade-up" data-aos-delay="50" />
          <img src="momos.avif" alt="momos" className="h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80" data-aos="fade-left" data-aos-delay="100" />
          <img src="tameto.avif" alt="tameto" className="h-14 w-14" data-aos="zoom-in" data-aos-delay="100" />
        </div>

        {/* center text */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-6" data-aos="fade-down" data-aos-delay="150">
          Better food for <br /> more people
        </h1>

        {/* Paragraph */}
        <p className="text-center text-lg sm:text-xl md:text-2xl mb-12" data-aos="fade-up" data-aos-delay="100">
          For over a decade we`ve enabled our <br /> customers to discover new tastes,<br /> delivered right to their doorstep
        </p>

        {/* Middle Images */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <img src="burger.avif" alt="burger" className="h-60 w-60 sm:h-64 sm:w-64 md:h-72 md:w-72" data-aos="fade-right" data-aos-delay="300" />
          <img src="pizza.avif" alt="pizza" className="h-60 w-60 sm:h-64 sm:w-64 md:h-72 md:w-72" data-aos="fade-left" data-aos-delay="400" />
          <img src="tameto.avif" alt="tameto" className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20" data-aos="flip-up" data-aos-delay="100" />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="border border-gray-300 shadow-lg rounded-md p-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-600">3,00,000+</h1>
            <p className="font-medium mt-2">restaurants</p>
            <img src="house.webp" alt="house" className="h-16 w-16 mx-auto mt-2" />
          </div>

          <div className="border border-gray-300 shadow-lg rounded-md p-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-600">800+</h1>
            <p className="font-medium mt-2">cities</p>
            <img src="location.avif" alt="location" className="h-16 w-16 mx-auto mt-2" />
          </div>

          <div className="border border-gray-300 shadow-lg rounded-md p-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-600">3 billion+</h1>
            <p className="font-medium mt-2">orders delivered</p>
            <img src="menu.avif" alt="menu" className="h-16 w-16 mx-auto mt-2" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
