import Image from 'next/image'
import React from 'react'

const Unlock = () => {
    return (
        <div className=' px-36 flex justify-between items-center'>

            {/* frame 35 */}
            <div className='w-[422px] h-[433px] flex items-center '>
                <Image
                    src="/rafiki.png"
                    alt="unlock"
                    width={422}
                    height={328}
                />

            </div>


         {/* frame 6 */}
            <div className='w-165.25 flex flex-col gap-8'>
                {/* frame 5 */}
                <div className='w-150.25 flex flex-col gap-4'>
                    <h1 className='text-2xl text-gray-900 font-bold'>The unseen of spending three <br /> years at Pixelgrade</h1>
                    <p className='text-gray-500'>
                        It is a long established fact that a reader will be distracted by the readable content of a pa
                        ge when looking at its layout. The point of using Lorem Ipsum is tha
                        t it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English. Many desktop publishing

                    </p>
                </div>
                <button className='bg-[#4CAF4F] py-3.5 px-8 gap-2.5 w-37.75 h-13 mt-7'>Learn More</button>

            </div>

        </div>
    )
}

export default Unlock
