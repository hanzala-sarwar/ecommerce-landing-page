import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="w-full bg-[#F5F7FA]">

            {/* Main Container */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-36 py-24 relative">

                {/* Hero Content */}
                <div className="flex items-center justify-between">

                    {/* Left Content */}
                    <div className="flex flex-col gap-8">

                        {/* Text */}
                        <div className="flex flex-col gap-4">
                            <h1 className="font-sans font-semibold text-6xl leading-[76px] text-[#4D4D4D]">
                                Lesson and insights
                                <span className="block text-[#4CAF4F]">
                                    From 8 years
                                </span>
                            </h1>

                            <p className="text-[#717171]">
                                Where to grow your business as a photographer: site or social media?
                            </p>
                        </div>

                        <button className="cursor-pointer bg-[#4CAF4F] px-8 py-3.5 rounded-sm text-white w-32">
                            Register
                        </button>
                    </div>

                    {/* Illustration */}
                    <div className="w-[351px]">
                        <Image
                            src="/Illustration.png"
                            alt="Hero illustration"
                            width={351}
                            height={407}
                        />
                    </div>

                </div>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <Image
                        src="/Dot.png"
                        alt="Slider dots"
                        width={46}
                        height={10}
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;