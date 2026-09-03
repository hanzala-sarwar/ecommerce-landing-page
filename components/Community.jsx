import React from 'react'
import Image from "next/image";

const Community = () => {
    return (
        <div className="bg-white flex flex-col gap-[16px]">

            {/* community */}
            <div className=" justify-center flex flex-col gap-[8px] ">

                <h1 className="text-[#4D4D4D] text-[36px] leading-[44px] font-semibold text-center">
                    Manage your entire community <br />
                    in a single system
                </h1>
                <p className="text-gray-900 text-center">WHo is Nextcent suitable ?</p>
            </div>

            {/* frame 4 */}

            <div className=" px-36 flex justify-between ">


                {/* membership Organization */}
                <div className="w-74.75  py-6 px-8 flex flex-col gap-[8px] rounded-lg ">

                    {/* member */}
                    <div className='max-w-66.75 flex flex-col gap-[16px] items-center'>
                        <Image
                            src="/Icon.png"
                            alt="Icon"
                            width={45}
                            height={38}
                        />

                        <h2 className="text-[#4D4D4D] text-[28px] leading-[36px] font-bold text-center">
                            Membership Organisations
                        </h2>
                    </div>


                    <div className='flex gap-2 '>
                        <p className="text-gray-500 text-center">Our membership management software provides full automation of memb
                            ership renewwals and payments</p>
                    </div>


                </div>

                {/* national association */}
                <div className="w-74.75  py-6 px-8 flex flex-col gap-[8px] rounded-lg ">

                    {/* member */}
                    <div className='max-w-66.75 flex flex-col gap-[16px] items-center'>
                        <Image
                            src="/Icon2.png"
                            alt="Icon"
                            width={45}
                            height={38}
                        />

                        <h1 className="text-gray-900 font-bold text-2xl text-center">National Associations</h1>
                    </div>


                    <div className='flex gap-2 '>
                        <p className="text-gray-500 text-center">Our membership management software provides full automation of memb
                            ership renewwals and payments</p>
                    </div>


                </div>

                {/* clubs and groups */}
                <div className="w-74.75  py-6 px-8 flex flex-col gap-2 rounded-lg ">

                    {/* member */}
                    <div className='max-w-66.75 flex flex-col gap-4 items-center'>
                        <Image
                            src="/Icon3.png"
                            alt="Icon"
                            width={45}
                            height={38}
                        />

                        <h1 className="text-gray-900 font-bold text-2xl text-center">Clubs And Groups</h1>
                    </div>


                    <div className='flex gap-2 '>
                        <p className="text-gray-500 text-center">Our membership management software provides full automation of memb
                            ership renewwals and payments</p>
                    </div>


                </div>

            </div>




        </div>
    )
}

export default Community
