import Image from 'next/image'
import React from 'react'

const Customers = () => {
    return (
        <div className='py-8 px-36 flex gap-19.5 bg-gray-50'>

            {/* image 9 */}
            <div>
                <Image
                    src="/customers.jpg"
                    alt='customer'
                    width={326}
                    height={326}

                    className="w-81.5 h-81.5 object-cover rounded-lg"
                />

            </div>

            {/* Frame 11 */}

            <div className='max-w-187 flex flex-col gap-8'>
                {/* content */}
                <div className='max-w-187 flex flex-col gap-4'>
                    <p>
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <div className='max-w-187 flex flex-col gap-2'>
                        <p className='text-[#4CAF4F] text-xl'> Tim Smith</p>
                        <p>British Dragon Boat Racing Association </p>
                    </div>

                </div>
                {/* frame 14 */}
                <div className='max-w-187 flex gap-8'>
                    {/* frame 10 */}
                    <div className='flex gap-10.25'>
                        <Image
                            src="/cus1.png"
                            alt='cus1'
                            width={48}
                            height={48}

                        />

                        <Image
                            src="/cus2.png"
                            alt='cus1'
                            width={48}
                            height={48}

                        />
                        <Image
                            src="/cus3.png"
                            alt='cus1'
                            width={48}
                            height={48}

                        />
                        <Image
                            src="/cus4.png"
                            alt='cus1'
                            width={48}
                            height={48}

                        />

                        <Image
                            src="/cus5.png"
                            alt='cus1'
                            width={48}
                            height={48}

                        />

                        <Image
                            src="/cus6.png"
                            alt='cus1'
                            width={48}
                            height={48}

                        />

                    </div>
                    {/* frame 13 */}
                    <div className='p-2 gap-2 max-w-55.75'>
                        <p className='text-lg text-green-700'>Meet all customers</p>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Customers
