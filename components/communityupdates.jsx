import Image from 'next/image'
import React from 'react'

const Communityupdates = () => {
    return (
        <div className=' flex flex-col gap-4 py-4 items-center '>
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
            <div className='px-36 flex gap-4 '>

                <div className='w-[368px]'>
                    <Image
                        alt='first'
                        src="/1.png"
                        height={368}
                        width={366}
                    />
                </div>



                <div>
                    <Image
                        alt='first'
                        src="/2.png"
                        height={368}
                        width={366}
                    />
                </div>

                <div>
                    <Image
                        alt='first'
                        src="/3.png"
                        height={368}
                        width={366}
                    />
                </div>


            </div>

        </div>
    )
}

export default Communityupdates
