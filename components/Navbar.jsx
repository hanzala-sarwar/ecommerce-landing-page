import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (

        <nav className=' w-full h-[84px] bg-[#F5F7FA]  flex   items-center justify-between px-33'>
            {/* Logo */}
            <div className='w-38.5  flex gap-2 cursor-pointer '>
                <Image src="/logo.png"
                    alt="logo"
                    width={150}
                    height={50}
                />
            </div>



            {/* heading name */}

            <div className='w-full max-w-147 flex gap-12.5 justify-between'>
                <a className='  hover:text-gray-400' href='#'>Home</a>
                <a className='  hover:text-gray-400  ' href='#'>Service</a>
                <a className='  hover:text-gray-400' href='#'>Feature</a>
                <a className='  hover:text-gray-400 ' href='#'>Product</a>
                <a className='  hover:text-gray-400 ' href='#'>Testimonial</a>
                <a className='  hover:text-gray-400' href='#'>FAQ</a>


            </div>




            {/* Login  */}
            <div className='w-45.5  flex gap-3.5'>
                <button className='cursor-pointer w-19.25 py-2.5 px-5 gap-2.5 bg-[#F5F7FA] text-[#4CAF4F] rounded-lg hover:bg-gray-800 hover:text-white'>Login</button>
                <button className='cursor-pointer py-2.5 px-5 bg-[#4CAF4F] text-[#F5F7FA] w-22.75 gap-2.5 rounded-lg'>Signup</button>
            </div>


        </nav>

    )
}

export default Navbar
