import React from 'react'
import Image from "next/image";

const Clients = () => {
    return (
        <div className="bg-white flex flex-col items-center gap-4 pt-6">

            <div className='gap-2' >
                <h1 className="text-[#4D4D4D] text-[36px] leading-[44px] font-semibold text-center">
                    Our Clients
                </h1>
                <p className="text-[#717171] text-[16px] leading-[24px] font-normal text-center">
                    We have been working with some Fortune 500+ clients
                </p>
            </div>


            <div className="w-full max-w-360 flex justify-between px-20 py-10">


                <Image
                    src="/Logo1.png"
                    alt="Logo 1"
                    width={33}
                    height={33}
                />

                <Image
                    src="/Logo2.png"
                    alt="Logo 1"
                    width={33}
                    height={33}
                />

                <Image
                    src="/Logo3.png"
                    alt="Logo 1"
                    width={33}
                    height={33}
                />

                <Image
                    src="/Logo4.png"
                    alt="Logo 1"
                    width={33}
                    height={33}
                />

                <Image
                    src="/Logo5.png"
                    alt="Logo 1"
                    width={33}
                    height={33}
                />

                <Image
                    src="/Logo6.png"
                    alt="Logo 1"
                    width={33}
                    height={33}
                />

                <Image
                    src="/Logo7.png"
                    alt="Logo 1"
                    width={33}
                    height={33}
                />

            </div>

        </div>
    )
}

export default Clients
