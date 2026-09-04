import React from 'react'
import Image from "next/image";

const Hero = () => {
    return (

        <div className=" py-24 px-33  relative w-full max-w-360 bg-[#F5F7FA]  flex justify-center items-center ">


            {/* frame 1 */}
            <div className='w-full max-w-164.25 flex flex-col gap-8'>

                {/* Text */}
                <div className='max-w-164.25 flex flex-col gap-4'>

                    <h1
                        className="w-164.25 h-38 font-sans font-semibold text-6xl leading-19 tracking-normal" >
                        Lesson and insights
                        <p className='text-green-600'> From 8 years</p>
                    </h1>

                    <p className="text-[#717171]">
                        Where to grow your business as a photographer: site or social media?

                    </p>
                </div>

                <button className="cursor-pointer bg-[#4CAF4F] px-8 py-3.5 rounded-sm text-[#FFFFFF] w-32 h-13">
                    Register
                </button>
            </div>



            {/* illustration image */}
            <div className='w-[351px] h-101.75'>
                <Image
                    src="/Illustration.png"
                    alt="hero"
                    width={351}
                    height={407}
                />
            </div>


            <div className="w-11.5 flex gap-2 absolute bottom-4 items-center justify-center ">
                <Image
                    src="/Dot.png"
                    alt="hero"
                    width={46}
                    height={10}
                />
            </div>

        </div>

    )
}

export default Hero
