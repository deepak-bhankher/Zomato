import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white mt-20 py-12 px-4 sm:px-6 lg:px-16">
      
      {/* Zomato Logo */}
      <h1 className="text-4xl sm:text-5xl font-bold italic text-center mb-12">
        Zomato
      </h1>

      {/* Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center lg:text-left mb-12">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Eternal</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="https://www.zomato.com/" className="hover:text-white">Zomato</a></li>
            <li><a href="https://blinkit.com/" className="hover:text-white">Blinkit</a></li>
            <li><a href="https://www.district.in/" className="hover:text-white">District</a></li>
            <li><a href="https://www.hyperpure.com/" className="hover:text-white">Hyperpure</a></li>
            <li><a href="https://www.feedingindia.org/" className="hover:text-white">Feeding India</a></li>
            <li><a href="https://www.eternal.com/investor-relations/" className="hover:text-white">Investor India</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">For Restaurants</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="https://www.zomato.com/partner-with-us/new/" className="hover:text-white">Partner With Us</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.application.services.partner" className="hover:text-white">Apps For You</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">For Delivery Partners</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Partner With Us</li>
            <li className="hover:text-white cursor-pointer">Apps For You</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Learn More</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Privacy</li>
            <li className="hover:text-white cursor-pointer">Security</li>
            <li className="hover:text-white cursor-pointer">Terms Of Service</li>
            <li className="hover:text-white cursor-pointer">Help & Support</li>
            <li className="hover:text-white cursor-pointer">Report & Fraud</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Column 5: Social & App Store */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-xl font-semibold mb-4">Social Links</h2>
          <div className="flex gap-2 mb-4">
            <a href="#"><img src="linkdin.jpeg" alt="linkedin" className="h-6 w-6 rounded-full" /></a>
            <a href="#"><img src="instagram.png" alt="instagram" className="h-6 w-6 rounded-full" /></a>
            <a href="#"><img src="youtube.jpeg" alt="youtube" className="h-6 w-6 rounded-full" /></a>
            <a href="#"><img src="facebook.png" alt="facebook" className="h-6 w-6 rounded-full" /></a>
            <a href="#"><img src="twitter.png" alt="twitter" className="h-6 w-6 rounded-full" /></a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://www.apple.com/in/app-store/">
              <img src="app_store.png" alt="app_store" className="h-10 w-32 hover:scale-105 transition" />
            </a>
            <a href="https://play.google.com/store/games?device=windows">
              <img src="google.png" alt="google" className="h-10 w-32 hover:scale-105 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 mb-6" />

      {/* Footer Note */}
      <p className="text-gray-500 text-xs text-center">
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.<br />
        2008-2025 © Zomato™ Ltd. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
