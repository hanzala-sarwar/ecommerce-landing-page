
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto'>

      {/* frame 16 */}
      <div className='py-8 flex flex-col gap-8  items-center bg-[#F5F7FA]'>
        <h1 className="font-semibold text-[64px] leading-[76px] text-[#263238] text-center max-w-[887px]">
          Pellentesque suscipit <br />
          fringilla libero eu.
        </h1>

        <button className="cursor-pointer bg-[#4CAF4F] py-[14px] px-[32px]   w-[175px] h-[52px] flex items-center justify-center rounded-sm gap-2">
          <p className='text-white font-medium text-sm rounded'>
            Get a Demo
          </p>
          <Image
            src="/bright.png"
            alt='arrow'
            width={16}
            height={16}
          />
        </button>
      </div>

      {/* footer navigation */}
      <div className='py-16 px-41.25 flex gap-31.25 bg-[#263238] text-white'>

        {/* company info */}
        <div className='w-87.5 flex flex-col gap-10'>

          {/* logo */}
          <Link href="#" >
            <Image
              src="/footerlogo.png"
              alt="Nexcent logo"
              width={191}
              height={29}
            />
          </Link>

          {/* copyright */}
          <div className="flex flex-col gap-2 text-[14px] leading-5 font-normal">
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>

          {/* social links */}
          <div className='w-44 flex flex-row gap-4'>

            <Link href="#">
              <Image
                src="/SocialIcons 1.png"
                alt="social icon"
                width={32}
                height={32}
              />
            </Link>


            <Link href="#">
              <Image
                src="/SocialIcons 2.png"
                alt="social icon"
                width={32}
                height={32}
              />
            </Link>


            <Link href="#">
              <Image
                src="/SocialIcons3.png"
                alt="social icon"
                width={32}
                height={32}
              />
            </Link>


            <Link href="#">
              <Image
                src="/SocialIcons4.png"
                alt="social icon"
                width={32}
                height={32}
              />
            </Link>

          </div>

        </div>

        {/* Links */}
        <div className='w-158.75 gap-7.5 flex flex-row'>

          {/* column 1 */}
          <div className='w-40 flex flex-col gap-6'>
            <h3 className="text-[20px] leading-[28px] font-semibold">
              Company
            </h3>

            <nav className="w-40 flex flex-col gap-3 text-[14px] leading-[20px] font-normal">
              <Link href="#">About us</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact us</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">Testimonials</Link>
            </nav>
          </div>

          {/* column 2 */}
          <div className='w-40 flex flex-col gap-6'>
            <h3 className="text-[20px] leading-[28px] font-semibold">
              Support
            </h3>

            <nav className="w-40 flex flex-col gap-3 text-[14px] leading-[20px] font-normal">
              <Link href="#">Help center</Link>
              <Link href="#">Terms of service</Link>
              <Link href="#">Legal</Link>
              <Link href="#">Privacy policy</Link>
              <p href="#">Status</p>
            </nav>
          </div>

          {/* column 3 */}
          <div className='w-63.75 flex flex-col gap-6'>
            <h3 className="text-[20px] leading-[28px] font-semibold">
              Stay up to date
            </h3>

            <div className='bg-[#4E565A] w-63.75 h-10 flex items-center justify-between px-3 rounded-[8px]'>
              <input
                type="email"
                placeholder='Your email address'
                className='bg-transparent text-[14px] outline-none w-full'
              />

              <Image
                src="/Vector.png"
                alt="send"
                width={16}
                height={16}
                className='w-4 h-4'
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer