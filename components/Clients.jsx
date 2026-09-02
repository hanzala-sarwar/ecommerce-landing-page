import React from 'react'
import Image from "next/image";

const Clients = () => {
    return (
        <div className="bg-white flex flex-col items-center gap-4 pt-6">

            <div className='gap-2' >
                <h1 
                // className="text-gray-900 text-2xl font text-center font-bold"
                className="w-277.5 h-11 font-sans font-semibold text-[36px] leading-11 tracking-normal text-center"
                >Our Clients</h1>
                <p className="text-gray-400 text-center">We have been working with some fortune 500+ clients</p>
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
