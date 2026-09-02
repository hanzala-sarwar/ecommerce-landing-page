import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full bg-[#F5F7FA]'>
            <nav className=' w-full max-w-360 py-[30px] flex flex-row mx-auto items-center justify-between px-33'>
                {/* Logo */}
                <div className='w-38.5 h-6 gap-2 top-7.5 left-26.25  '>
                    <Image src="/logo.png"
                        alt="logo"
                        width={150}
                        height={50}
                    />
                </div>

                <div className='text-gray-600 w-147  flex items-center  gap-6 '>
                    <a href='#'>Home</a>
                    <a href='#'>Service</a>
                    <a href='#'>Feature</a>
                    <a href='#'>Product</a>
                    <a href='#'>Testimonial</a>
                    <a href='#'>FAQ</a>
                </div>

                {/* Login  */}
                <div className='w-45.5  flex gap-3.5'>
                    <button className='w-[77px] py-[10px] px-[20px] gap-[10px] bg-[#F5F7FA] text-[#4CAF4F]'>Login</button>
                    <button className='py-[10px] px-[20px] bg-[#4CAF4F] text-[#F5F7FA] w-[91px] gap-[10px] rounded-lg'>Signup</button>
                </div>


            </nav>
        </div>
    )
}

export default Navbar
