import React from "react";
import Home from "../components/Home";

function Home1 () {
    return (

        <div className="relative w-full h-screen overflow-hidden">
        <video src="Zomato.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover" />

        <div className="absolute inset-0 items-center justify-center text-center px-4 md:px-0 flex  flex-col text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl  font-bold drop-shadow-lg italic">Zomato</h1>
          <p className="text-2xl sm:text-3xl md:text-4xl  mt-4 drop-shadow-lg font-bold">
            India`s 1 <br /> food delivery app
          </p>
          <p className="text-lg sm:text-2xl md:text-3xl  font-bold mt-10">
            Experience fast & easy online oredring <br /> on the Zomato app
          </p>
          
 <div className="flex  flex-col sm:flex-row gap-4 sm:gap-6 mt-6 ">
                <a href="https://www.apple.com/in/app-store/">
                  <img
                    src="app_store.png"
                    alt="app_store"
                    className="h-12 sm:h-14 md:h-16 w-auto  hover:scale-105 transition-all duration-300 cursor-pointer"
                  />
                </a>
                <a href="https://play.google.com/store/games?device=windows">
                  <img
                    src="google.png"
                    alt="google"
                    className="h-12 sm:h-14 md:h-16  w-auto hover:scale-105 transition-all duration-300 cursor-pointer"
                  />
                </a>
              </div>



        </div>
      </div>
    )
}
export default Home1;