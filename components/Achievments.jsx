
import Image from 'next/image'
import React from 'react'

const Achievements = () => {

    return (

        // <div className=''>

            <div className='w-full max-w-[1440px] bg-[#F5F7FA] px-36 py-16 mx-auto  flex justify-between items-center'>

                {/* section heading */}
                <div className='w-[540px] flex flex-col gap-2'>

                    <h1 className='max-w-[408px] text-[36px] leading-[44px] font-semibold text-[#4D4D4D]'>
                        Helping a local{' '}
                        <span className='text-[#4CAF4F]'>
                            business reinvent itself
                        </span>
                    </h1>

                    <p className='text-[16px] leading-[24px] font-normal text-[#18191F]'>
                        We reached here with our hard work and dedication
                    </p>

                </div>


                {/* counts section */}
                <div className='w-[540px] grid grid-cols-2 gap-y-10'>

                    {/* Members */}
                    <div className='w-[255px] flex items-center gap-4'>

                        <Image
                            src="/row1.png"
                            alt="Members"
                            width={48}
                            height={48}
                        />

                        <div>
                            <h2 className='text-[24px] leading-[29px] font-semibold text-[#4D4D4D]'>
                                2,245,341
                            </h2>

                            <p className='text-[16px] leading-[24px] text-[#717171]'>
                                Members
                            </p>
                        </div>

                    </div>


                    {/* Clubs */}
                    <div className='w-[255px] flex items-center gap-4'>

                        <Image
                            src="/row2.png"
                            alt="Clubs"
                            width={48}
                            height={48}
                        />

                        <div>
                            <h2 className='text-[24px] leading-[29px] font-semibold text-[#4D4D4D]'>
                                46,328
                            </h2>

                            <p className='text-[16px] leading-[24px] text-[#717171]'>
                                Clubs
                            </p>
                        </div>

                    </div>


                    {/* Event Bookings */}
                    <div className='w-[255px] flex items-center gap-4'>

                        <Image
                            src="/row3.png"
                            alt="Event Bookings"
                            width={48}
                            height={48}
                        />

                        <div>
                            <h2 className='text-[24px] leading-[29px] font-semibold text-[#4D4D4D]'>
                                828,867
                            </h2>

                            <p className='text-[16px] leading-[24px] text-[#717171]'>
                                Event Bookings
                            </p>
                        </div>

                    </div>


                    {/* Payments */}
                    <div className='w-[255px] flex items-center gap-4'>

                        <Image
                            src="/row4.png"
                            alt="Payments"
                            width={48}
                            height={48}
                        />

                        <div>
                            <h2 className='text-[24px] leading-[29px] font-semibold text-[#4D4D4D]'>
                                1,926,436
                            </h2>

                            <p className='text-[16px] leading-[24px] text-[#717171]'>
                                Payments
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        // </div>
    )
}

export default Achievements

