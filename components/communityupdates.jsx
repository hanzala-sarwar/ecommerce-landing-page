import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Communityupdates = () => {
    return (
        <div className=' flex flex-col gap-4  items-center '>
            {/* community */}
            <div className='flex flex-col gap-2 w-277.5 items-center'>

                <h1 className="font-semibold text-[36px] leading-[44px] text-[#4D4D4D] text-center">
                    Caring is the new marketing
                </h1>
                <p className="font-normal text-[16px] max-w-[628px] leading-[24px] text-[#717171] text-center">
                    The Nexcent blog is the best place to read about the latest membership insights, trends and more.
                    See who's joining the community, read about how our community are increasing their membership income and lot's more.
                </p>
            </div>

            {/* frame 15 */}
            <div className='px-36 flex gap-4 justify-between '>


                <div className='w-[368px] h-[366px] justify-center relative' >

                    <Image
                        alt='first'
                        src="/caring1.jpg"
                        height={366}
                        width={368}
                        className='rounded-lg'
                    />


                    {/* content */}
                    <div className='absolute bottom-9 left-6 items-center bg-[#F5F7FA] w-[317px] h-[176px]   p-[16px] rounded-lg flex flex-col gap-[16px] '>
                        <p className=' text-[#717171] font-inter font-semibold text-[20px] leading-[28px] tracking-normal text-center'>
                            Creating Streamlined Safeguarding Processes with OneRen
                        </p>
                        {/*frame 13  */}
                        <Link href="#" className='w-71.25  p-2 flex gap-2 items-center justify-center'>

                            <p

                                className=' text-[#4CAF4F] font-inter font-semibold text-xl/7 tracking-normal'>
                                Readmore
                            </p>
                            

                                <Image
                                    alt='/Right.png'
                                    src="/Right.png"
                                    height={24}
                                    width={24}

                                />
                             


                        </Link>
                    </div>


                </div>

                <div className='w-[368px] h-[366px] justify-center relative' >

                    <Image
                        alt='first'
                        src="/carying2.jpg"
                        height={366}
                        width={368}
                        className='rounded-lg'
                    />


                    {/* content */}
                    <div className='absolute bottom-9 left-6 items-center bg-[#F5F7FA] w-[317px] h-[176px]   p-[16px] rounded-lg flex flex-col gap-[16px] '>
                        <p className='text-[#717171] font-inter font-semibold text-[20px] leading-[28px] tracking-normal text-center'>
                            What are your safeguarding responsibilities and how can you manage them?
                        </p>
                        {/*frame 13  */}
                        <Link
                        href="#"
                        className='w-71.25  p-2 flex gap-2 items-center justify-center'>

                            <p

                                className=' text-[#4CAF4F] font-inter font-semibold text-xl/7 tracking-normal'>
                                Readmore
                            </p>
                            
                                <Image
                                    alt='/Right.png'
                                    src="/Right.png"
                                    height={24}
                                    width={24}

                                />
                             


                        </Link>
                    </div>


                </div>

                <div className='w-[368px] h-[366px] justify-center relative' >

                    <Image
                        alt='first'
                        src="/caring3.jpg"
                        height={366}
                        width={368}
                        className='rounded-lg'
                    />


                    {/* content */}
                    <div className='absolute bottom-9 left-6 items-center bg-[#F5F7FA] w-[317px] h-[176px]  p-[16px] rounded-lg flex flex-col gap-[16px] '>
                        <p className=' text-[#717171] font-inter font-semibold text-[20px] leading-[28px] tracking-normal text-center'>
                            Revamping the Membership Model with Triathlon <br /> Australia
                        </p>
                        {/*frame 13  */}
                        <Link href="#" className='w-71.25  p-2 flex gap-2 items-center justify-center'>

                            <p

                                className=' text-[#4CAF4F] font-inter font-semibold text-xl/7 tracking-normal'>
                                Readmore
                            </p>
                           
                                <Image
                                    alt='/Right.png'
                                    src="/Right.png"
                                    height={24}
                                    width={24}

                                />
                             


                        </Link>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default Communityupdates
