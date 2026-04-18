import React from "react";

function Scanner() {
  return (
    <div className="bg-pink-100 border border-red-200 rounded-2xl mt-16 py-10 px-4 sm:px-8 lg:px-16 w-full max-w-7xl mx-auto">
      
      <div className="flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Content: Download App Text & Buttons */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Download the app now!
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Experience seamless online ordering <br />
            only on the Zomato app
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <a href="https://www.apple.com/in/app-store/">
              <img
                src="app_store.png"
                alt="app_store"
                className="h-16 w-48 hover:scale-105 transition-all duration-300 cursor-pointer"
              />
            </a>
            <a href="https://play.google.com/store/games?device=windows">
              <img
                src="google.png"
                alt="google"
                className="h-16 w-48 hover:scale-105 transition-all duration-300 cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* Right Content: Phone + QR Code + Text */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative">
            {/* Mobile Image */}
            <img
              src="mobile.png"
              alt="mobile"
              className="w-64 sm:w-72 md:w-80 lg:w-96"
            />

            {/* QR Code positioned inside/below phone */}
            <img
              src="scanner.png"
              alt="scanner"
              className="w-32 sm:w-36 md:w-40 lg:w-48 absolute bottom-4 left-1/2 transform -translate-x-1/2"
            />
          </div>

          {/* Text directly below the phone */}
          <h1 className="text-center text-gray-500 font-bold text-lg sm:text-xl md:text-2xl">
            Scan the QR code to <br /> download the app
          </h1>
        </div>

      </div>
    </div>
  );
}

export default Scanner;
