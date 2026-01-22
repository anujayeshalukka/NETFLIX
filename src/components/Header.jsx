import React from "react";
import logo from "../assets/logo.png";
import banner from '../assets/banner.jpg';

const Header = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat padding align-middle" style={{ backgroundImage: `url(${banner})` }}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative h-20 flex flex-col sm:flex-row items-center justify-between pt-5 " >
      <img src={logo} alt="Logo" className="h-10" />

      <div className="flex gap-5">
        <a className=" cursor-pointer border px-4 h-9 bg-transparent py-1 rounded flex gap-3 items-center">
          <img/>
          English
          <svg class="w-3 h-3 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
          <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
          </svg>
        </a>
        <button className="bg-red-600 h-9 text-white px-4 py-2 whitespace-nowrap flex items-center justify-center rounded">
          Sign In
        </button>
      </div>
    </div>
    <div className=" absolute inset-0 z-10 flex items-center justify-center m-auto leading-3.5">
        <div className="items-center text-center gap-4 px-6 sm:px-0 w-full lg:max-w-127 md:max-w-108">
            <h1 className="text-white text-6xl font-black sm:text-3xl mb-5">
              Unlimited movies, shows, and more
            </h1>
            <p className="text-white text-lg font-bold mb-7">
               Starts at ₹149. Cancel at any time.
            </p>
            <p className="text-white text-base mb-5">
               Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="flex">
              <input
  type="email"
  id="email-primary"
  className="bg-black/70 border-gray-400/70 block w-full ps-4 pe-4 py-3.5 bg-neutral-secondary-medium border rounded-sm text-heading text-sm focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
  placeholder="Email address"
/>
              <a className="bg-red-600 cursor-pointer text-white ps-4 pe-4 py-3.5 whitespace-nowrap flex items-center justify-center rounded text-xl font-semibold ml-3">
                 Get Started
                <svg class="w-3 h-3 text-white dark:text-white ml-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
              </a>
            </div>
            
        </div>
    </div>

    </div>
  );
};

export default Header;
