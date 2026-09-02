import Image from 'next/image'
import React from 'react'

const Achievments = () => {
    return (
        <div className='bg-gray-100 py-3.5 px-36 flex justify-between '>
            {/* section heading  */}
            <div className='w-135 gap-2'>
                <h1 className='text-gray-900 font-bold text-2xl pt-10'>
                    Helping a local <br />
                    <span className='text-green-600'>
                        business reinvent itself
                    </span>
                </h1>
                <p className='text-gray-500'>
                    We reacehd here with our hardwork and dedication
                </p>

            </div>

            {/* counts section */}
            <div className='w-135 gap-10'>
                {/* Row 1 */}
                <div className='flex w-135 gap-7.5'>
                    {/* members */}
                    <div className='w-63.75 gap-4'>
                        <Image
                            alt='members'
                            src="/row1.png"
                            width={48}
                            height={48}
                        />
                        {/* details */}
                        <div className='w-47.75'>
                            <h1 className='text-gray-900'>
                                2,245,341
                            </h1>
                            <p className='text-gray-500'>members</p>
                        </div>

                    </div>
                    {/* clubs */}

                    <div className='w-63.75 gap-4'>
                        <Image
                            alt='members'
                            src="/row2.png"
                            width={48}
                            height={48}
                        />
                        {/* details */}
                        <div className='w-47.75'>
                            <h1 className='text-gray-900'>
                                46,328
                            </h1>
                            <p className='text-gray-500'>members</p>
                        </div>

                    </div>

                </div>

                {/* Row 2 */}
                <div className='flex w-135 gap-7.5'>
                    {/* members */}
                    <div className='w-63.75 gap-4'>
                        <Image
                            alt='members'
                            src="/row3.png"
                            width={48}
                            height={48}
                        />
                        {/* details */}
                        <div className='w-47.75'>
                            <h1 className='text-gray-900'>
                                828,867
                            </h1>
                            <p className='text-gray-500'>members</p>
                        </div>

                    </div>
                    {/* clubs */}

                    <div className='w-63.75 gap-4'>
                        <Image
                            alt='members'
                            src="/row4.png"
                            width={48}
                            height={48}
                        />
                        {/* details */}
                        <div className='w-47.75'>
                            <h1 className='text-gray-900'>
                                1,926,436
                            </h1>
                            <p className='text-gray-500'>members</p>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Achievments
