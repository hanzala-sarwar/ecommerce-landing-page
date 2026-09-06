import Image from "next/image";
import Link from "next/link";
import React from "react";

const Customers = () => {
    return (
        <section className="w-full bg-[#F5F7FA]">
            <div className="w-full max-w-[1440px] mx-auto py-8 px-6 md:px-10 lg:px-16 xl:px-36 flex items-center justify-between gap-10">

                {/* Customer Image */}
                <div className="shrink-0">
                    <Image
                        src="/customers.jpg"
                        alt="customer"
                        width={326}
                        height={326}
                        className="w-[326px] h-[326px] object-cover rounded-lg"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 max-w-[748px] flex flex-col gap-8">

                    {/* Text Content */}
                    <div className="flex flex-col gap-4">
                        <p className="font-medium text-base leading-6 text-[#717171]">
                            Maecenas dignissim justo eget nulla rutrum molestie.
                            Maecenas lobortis sem dui, vel rutrum risus tincidunt
                            ullamcorper. Proin eu enim metus. Vivamus sed libero
                            ornare, tristique quam in, gravida enim. Nullam ut
                            molestie arcu, at hendrerit elit. Morbi laoreet elit
                            at ligula molestie, nec molestie mi blandit.
                            Suspendisse cursus tellus sed augue ultrices, quis
                            tristique nulla sodales. Suspendisse eget lorem eu
                            turpis vestibulum pretium.
                        </p>

                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-xl leading-7 text-[#4CAF4F]">
                                Tim Smith
                            </p>

                            <p className="text-[#89939E] text-base font-normal">
                                British Dragon Boat Racing Association
                            </p>
                        </div>
                    </div>

                    {/* Customer Logos and Link */}
                    <div className="w-full flex items-center  gap-8">

                        {/* Logos */}
                        <div className="flex items-center gap-6">
                            <Image src="/cus1.png" alt="customer logo" width={48} height={48} />
                            <Image src="/cus2.png" alt="customer logo" width={48} height={48} />
                            <Image src="/cus3.png" alt="customer logo" width={48} height={48} />
                            <Image src="/cus4.png" alt="customer logo" width={48} height={48} />
                            <Image src="/cus5.png" alt="customer logo" width={48} height={48} />
                            <Image src="/cus6.png" alt="customer logo" width={48} height={48} />
                        </div>

                        {/* Link */}
                        <Link
                            href="#"
                            className="flex shrink-0 items-center gap-2"
                        >
                            <span className="font-semibold text-xl leading-5 text-[#4CAF4F] whitespace-nowrap">
                                Meet all customers
                            </span>

                            <Image
                                src="/Right.png"
                                alt="right arrow"
                                width={24}
                                height={24}
                            />
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Customers; 