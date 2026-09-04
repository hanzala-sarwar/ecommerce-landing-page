import React from 'react'
import Image from "next/image";

const Clients = () => {
    return (
        <div className=" px-[144px] flex flex-col  gap-4">

           {/* clients */}
            <div className='w-full  gap-2 items-center justify-center' >
                <h1 className="text-[#4D4D4D] text-[36px] leading-11 font-semibold text-center">
                    Our Clients
                </h1>
                <p className="text-[#717171] text-[16px] leading-6 font-normal text-center">
                    We have been working with some Fortune 500+ clients
                </p>
            </div>

            
            {/* client logos */}
            <div className="w-full max-w-[1152px] mx-auto flex justify-between">


                <Image
                    src="/Logo1.png"
                    alt="Logo 1"
                    width={48}
                    height={48}
                />

                <Image
                    src="/Logo2.png"
                    alt="Logo 1"
                    width={48}
                    height={48}
                />

                <Image
                    src="/Logo3.png"
                    alt="Logo 1"
                    width={48}
                    height={48}
                />

                <Image
                    src="/Logo4.png"
                    alt="Logo 1"
                    width={48}
                    height={48}
                />

                <Image
                    src="/Logo5.png"
                    alt="Logo 1"
                    width={48}
                    height={48}
                />

                <Image
                    src="/Logo6.png"
                    alt="Logo 1"
                    width={48}
                    height={48}
                />

                <Image
                    src="/Logo7.png"
                    alt="Logo 1"
                    width={48}
                    height={48}
                />

            </div>

        </div>
    )
}

export default Clients
