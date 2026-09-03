import Image from 'next/image'
import React from 'react'

const Customers = () => {
    return (
        <div className="bg-[#F5F7FA]">
            <div className=" w-full max-w-360 h-[390px] mx-auto  py-8  px-36 flex justify-between gap-19.5">

                {/* image 9 */}
                <div className="w-81.5 shrink-0">
                    <Image
                        src="/customers.jpg"
                        alt="customer"
                        width={326}
                        height={326}
                        className="w-81.5 h-81.5 object-cover rounded-lg"
                    />
                </div>

                {/* Frame 11 */}
                <div className="w-full max-w-187 flex flex-col gap-8">

                    {/* content */}
                    <div className="max-w-187 flex flex-col gap-4">

                        <p className="font-medium text-base leading-6 text-[#717171]">
                            Maecenas dignissim justo eget nulla rutrum molestie.
                            Maecenas lobortis sem dui, vel rutrum risus tincidunt
                            ullamcorper. Proin eu enim metus. Vivamus sed libero
                            ornare, tristique quam in, gravida enim. Nullam ut
                            molestie arcu, at hendrerit elit. Morbi laoreet elit
                            at ligula molestie, nec molestie mi blandit.
                            Suspendisse cursus tellus sed augue ultrices, quis
                            tristique nulla sodales. Suspendisse eget lorem eu
                            turpis vestibulum pretium. Suspendisse potenti.
                            Quisque malesuada enim sapien, vitae placerat ante
                            feugiat eget. Quisque vulputate odio neque, eget
                            efficitur libero condimentum id. Curabitur id nibh
                            id sem dignissim finibus ac sit amet magna.
                        </p>

                        <div className="max-w-187 flex flex-col gap-2">
                            <p className="font-semibold text-xl leading-7 text-[#4CAF4F]">
                                Tim Smith
                            </p>

                            <p className="text-[#89939E] text-base font-normal">
                                British Dragon Boat Racing Association
                            </p>
                        </div>
                    </div>

                    {/* Frame 14 */}
                    <div className="max-w-187 flex gap-8 items-center">

                        {/* Frame 10 */}
                        <div className="flex gap-10.25">
                            <Image src="/cus1.png" alt="customer logo" width={48} height={48} />
                            <Image src="/cus2.png" alt="customer logo" width={48} height={48} />
                            <Image src="/cus3.png" alt="customer logo" width={48} height={48} />
                            <Image src="/cus4.png" alt="customer logo" width={48} height={48} />
                            <Image src="/cus5.png" alt="customer logo" width={48} height={48} />
                            <Image src="/cus6.png" alt="customer logo" width={48} height={48} />
                        </div>

                        {/* Frame 13 */}
                        <div className="flex items-center p-2 gap-2 h-[44px] w-full max-w-55.75">
                            <p className="font-semibold text-xl leading-5 text-[#4CAF4F] whitespace-nowrap">
                                Meet all customers
                            </p>
                            <Image
                            src="/Right.png"
                            width={24}
                            height={24}
                            className='mt-1'
                            />


                            
                        </div>

                    </div>
                </div>
            </div>
         </div>
    )
}

export default Customers