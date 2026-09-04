
import Image from 'next/image'
import React from 'react'

const Unlock = () => {

    return (

        <div className='w-full max-w-360 px-36 mx-auto flex justify-center items-center '>

            {/* frame 35 */}
            <div className='w-[442px]  '>

                <Image
                    src="/rafiki.png"
                    alt="unlock"
                    width={442}
                    height={328}
                    className='w-full h-auto'
                />

            </div>


            {/* frame 6 */}
            <div className='w-150.25 flex flex-col gap-8'>

                {/* frame 5 */}
                <div className='flex flex-col gap-4'>

                    <h1 className='text-[36px] leading-[44px] text-[#4D4D4D] font-semibold'>
                        The unseen of spending three years at Pixelgrade
                    </h1>

                    <p className='text-[14px] leading-[20px] text-[#717171]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
                        Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem
                        sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium
                        auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum
                        pulvinar odio.
                    </p>

                </div>

                <button className='bg-[#4CAF4F] py-[14px] px-[32px] w-[151px] h-[52px] cursor-pointer rounded-[4px] text-white text-[14px] font-medium'>
                    Learn More
                </button>

            </div>

        </div>

    )
}

export default Unlock

 