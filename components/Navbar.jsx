import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#F5F7FA]">
      <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-16 xl:px-36">
        <div className="h-21 flex items-center justify-between">
          
          {/* Logo */}
          <div className="cursor-pointer shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={50}
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 xl:gap-12.5">
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">Feature</a>
            <a href="#">Product</a>
            <a href="#">Testimonial</a>
            <a href="#">FAQ</a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3.5">
            <button className="cursor-pointer py-2.5 px-5 text-[#4CAF4F]">
              Login
            </button>

            <button className="cursor-pointer py-2.5 px-5 bg-[#4CAF4F] text-white rounded-lg">
              Signup
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar; 