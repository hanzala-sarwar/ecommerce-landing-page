import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        
            <nav className=' w-full bg-[#F5F7FA] py-7.5 flex  mx-auto items-center justify-between px-33'>
                {/* Logo */}
                <div className='w-38.5  flex gap-2'>
                    <Image src="/logo.png"
                        alt="logo"
                        width={150}
                        height={50}
                    />
                </div>

                

                   {/* heading name */}
                       
                       <div className='w-147 flex gap-12.5'>
                       <a className='w-[46px] h-[24px] flex gap-[10px] hover:text-gray-400' href='#'>Home</a> 
                       <a className='w-[46px] h-[24px] flex gap-[10px] hover:text-gray-400  ' href='#'>Service</a> 
                       <a className='w-[46px] h-[24px] flex gap-[10px] hover:text-gray-400' href='#'>Feature</a> 
                       <a className='w-[46px] h-[24px] flex gap-[10px] hover:text-gray-400 ' href='#'>Product</a> 
                       <a className='w-[46px] h-[24px] flex gap-[10px] hover:text-gray-400 ' href='#'>Testimonial</a> 
                       <a className='w-[46px] h-[24px] flex gap-[10px] hover:text-gray-400' href='#'>FAQ</a> 
                     

                       </div>
                     
                    
                 

                {/* Login  */}
                <div className='w-45.5  flex gap-3.5'>
                    <button className='w-[77px] py-[10px] px-[20px] gap-[10px] bg-[#F5F7FA] text-[#4CAF4F] rounded-lg hover:bg-gray-800 hover:text-white'>Login</button>
                    <button className='py-[10px] px-[20px] bg-[#4CAF4F] text-[#F5F7FA] w-[91px] gap-[10px] rounded-lg'>Signup</button>
                </div>


            </nav>
         
    )
}

export default Navbar
