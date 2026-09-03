import Image from 'next/image'
import React from 'react'

const Calender = () => {
  return (
    <div className='px-36  flex justify-between'>
      {/* immage section */}
      <div>
     <Image
     src="/pana.png"
     alt='calander image'
     width={441}
     height={433}
     />
      </div>
      {/* Paragraph section */}
      
      {/* frame 6 */}
      <div className='flex flex-col max-w-165.25 gap-8'>

        {/* frame 5 */}
        <div className='flex flex-col max-w-150.25 gap-4'>
          <h1 className='text-[36px] font-semibold text-[#717171]'>How to design your site footer Like <br /> we did</h1>
          <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, 
            massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. 
            In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. 
            In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo 
            faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>

        </div>

        <button className='w-[157px] h-[52px] bg-[#4CAF4F] text-[#FFFFFF] rounded-[4px]'>
          Learn More
        </button>



      </div>
    </div>
  )
}

export default Calender
 
 