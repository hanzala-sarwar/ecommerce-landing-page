import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full bg-[#F5F7FA]'>
            <nav className=' w-full max-w-360 py-[30px] flex flex-row mx-auto items-center justify-between px-33'>
                {/* Logo */}
                <div className='w-38.5 h-6 flex gap-2  left-26.25  '>
                    <Image src="/logo.png"
                        alt="logo"
                        width={150}
                        height={50}
                    />
                </div>

                <div className='text-[#18191F] w-147  flex items-center left-[425.5px]   gap-6 '>

                   {/* heading name */}
                       
                       <div className='w-[588px] h-[24px]  left-[425px] flex gap-[50px]'>
                       <a className='w-[46px] h-[24px] flex gap-[10px]' href='#'>Home</a> 
                       <a className='w-[46px] h-[24px] flex gap-[10px]' href='#'>Service</a> 
                       <a className='w-[46px] h-[24px] flex gap-[10px]' href='#'>Feature</a> 
                       <a className='w-[46px] h-[24px] flex gap-[10px]' href='#'>Product</a> 
                       <a className='w-[46px] h-[24px] flex gap-[10px]' href='#'>Testimonial</a> 
                       <a className='w-[46px] h-[24px] flex gap-[10px]' href='#'>FAQ</a> 
                     

                       </div>
                     
                    
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
