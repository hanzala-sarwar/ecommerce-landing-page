import Image from 'next/image'
import React from 'react'


const Footer = () => {
  return (
    <div>


      {/* frame 16 */}
      <div className='py-8 flex flex-col  gap-8 items-center bg-gray-50'>
        <h1 className=' text-3xl font-bold text-[#263238] '>
          Pellentesque suscipit <br /> fringilla libero eu.
        </h1>

        <button className=' w-44.5 h-13 bg-green-700' >
          Get a Demo
        </button>

      </div>

      {/* footer navigation */}
      <div className='py-16 px-41.25 flex gap-31.25 bg-[#263238] text-white'>
        {/* company info */}
        <div className='w-87.5 flex flex-col gap-10'>

          {/* logo */}
          <div>
            <Image
              src="/footerlogo.png"
              width={191}
              height={29}
              className='gap-[9.89px]'
            />
          </div>
          {/* copy wright */}
          <div className='w-87.5 gap-2'>
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>

          </div>

          {/* social links */}
          <div className='w-44 flex flex-row gap-4'>
            <Image
              src="/SocialIcons 1.png"
              alt='socialicon1'
              width={32}
              height={32}

            />
            <Image
              src="/SocialIcons 2.png"
              alt='socialicon1'
              width={32}
              height={32}

            />
            <Image
              src="/SocialIcons3.png"
              alt='socialicon1'
              width={32}
              height={32}

            />

            <Image
              src="/SocialIcons4.png"
              alt='socialicon1'
              width={32}
              height={32}

            />


          </div>


        </div>

        {/* Links */}
        <div className='w-158.75 gap-7.5 flex flex-row'>

          {/* column 1 */}
          <div className='w-40 flex flex-col gap-6 '>
            <p className='w-40 font-medium'>Company</p>
            {/* list Items */}

            <nav className='w-40 flex flex-col gap-3'>
              <p>About us</p>
              <p>Yerms of service</p>
              <p>Legal</p>
              <p>Contact us</p>
              <p>Pricing</p>
              <p>Testimonials</p>


            </nav>
          </div>
          {/* column 2 */}
          <div>
            <div className='w-40 flex flex-col gap-6 '>
              <p className='w-40 font-medium'>Support</p>
              {/* list Items */}

              <nav className='w-40 flex flex-col gap-3'>
                <p>Help center</p>
                <p>Terms of service</p>
                <p>Legal</p>
                <p>Contact us</p>
                <p>Privacy policy</p>
                <p>Status</p>


              </nav>
            </div>
          </div>
          {/* column 3 */}
          <div className='w-63.75 flex flex-col gap-6'>
            <p className='font-medium'>Stay up to date</p>

            <div  className='bg-gray-400 w-63.75 h-10 flex items-center justify-between px-2 '>
              <input
                placeholder='Your email address'
               className='p-2'
              />
              <Image
              src="/Vector.png"
              alt='log'
              width={16}
              height={16}
              className='w-4 h-4 '
              />
            </div>


          </div>


        </div>

      </div>

    </div>
  )
}

export default Footer
