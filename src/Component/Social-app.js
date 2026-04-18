import React from "react";
function Social_app () {
    const service = [
    {
      img: "/zomato.png",
      name: "zomato",
      dec: "Get the app new to start oredring you favorite dishes",
      button: "chek it out ►",
    },
    {
      img: "/blinkit.png",
      name: "blinkit",
      dec: "Choose from 10,000+ products & get them deleverd in minutes",
      button: "chek it out ►",
    },
    {
      img: "/district.png",
      name: "district",
      dec: "The best of events,movies,dining,and everything you love",
      button: "chek it out ►",
    },
    {
      img: "/hyperpure.png",
      name: "hyperpure",
      dec: "Offering complete supply chain solution  for your restaurent",
      button: "chek it out ►",
    },
  ];
    return (
         <div>
          <div className="flex justify-center">
            <img
              src="eternal.png"
              alt="eternal"
              className="h-44 w-52 sm:w-56 md:w-64 lg:w-72 mt-28 "
            />
          </div>
          <h1 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-gray-500 mt-14">
            POWERING INDIA`S <br />
            CHANGING LIFESTYLES
          </h1>

 <div className="px-4 sm:px-6 md:px-8 mt-10 ">
            <div className="max-w-7xl mx-auto ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {service.map((item, index) => (
                  <div
                    key={index}
                    className=" bg-gradient-to-r from-purple-200 to-pink-200 p-4 rounded-xl shadow text-center transition-all duration-300 hover:scale-105"
                  >
                    <div className="">
                      <img
                        src={item.img}
                        alt="item.name"
                        className="w-32 h-32 sm:h-36 sm:w-36 md:h-40 md:w-40 mx-auto mt-10 rounded-xl "
                      />
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 mt-7">
                      {item.name}
                    </h3>

                    <p className="text-gray-800 text-sm sm:text-base mb-4 ">{item.dec}</p>
                    <a href="https://www.zomato.com/ncr/restaurants">
                      <button className="w-full  text-black py-2 rounded-md text-sm font-medium">
                        {item.button}
                      </button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>



    )
}
export default Social_app