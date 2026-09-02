import Image from 'next/image'
import React from 'react'

const Communityupdates = () => {
    return (
        <div className=' flex flex-col gap-4 py-4 items-center '>
            {/* community */}
            <div className='flex flex-col gap-2 w-277.5 items-center'>

                <h1 className=' text-2xl font-bold  '>Caring is the new marketing</h1>
                <p className='w-157  '>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
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
                        src="/1.png"
                        height={368}
                        width={366}
                    />
                </div>

                <div>
                    <Image
                        alt='first'
                        src="/1.png"
                        height={368}
                        width={366}
                    />
                </div>


            </div>

        </div>
    )
}

export default Communityupdates
