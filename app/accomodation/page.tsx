"use client"

import React from 'react'
import { AccommodationComponent } from '@/components/Accomodation';
import Footer from '@/components/ui/Footer';
import { Navbar } from '@/components/ui/Resizable-navbar';
import NavigationPanel from '@/components/ui/NavigationPanel';
import Image from "next/image";

export default function page() {
    return (
        <div>
            <Navbar visible={true}>
                <NavigationPanel />
            </Navbar>
            <header className="relative flex flex-row items-center justify-between w-full overflow-x-clip overflow-y-visible mt-10 mb-20 px-2 sm:px-6">

                <Image
                    src="/accomodation-top.png"
                    alt=""
                    width={360}
                    height={260}
                    priority
                    className="
            relative
            w-[110px] xs:w-[130px] sm:w-[200px] md:w-[260px] lg:w-[320px]
            translate-x-1/4 -translate-y-1/3
        "
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 260px, 320px"
                />

                <Image
                    src="/accomodation-top.png"
                    alt=""
                    width={360}
                    height={260}
                    priority
                    className="
            relative
            w-[150px] xs:w-[180px] sm:w-[260px] md:w-[320px] lg:w-[350px]
            translate-y-1/4
        "
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 320px, 350px"
                />

                <Image
                    src="/accomodation-top.png"
                    alt=""
                    width={360}
                    height={260}
                    priority
                    className="
            relative
            w-[110px] xs:w-[130px] sm:w-[200px] md:w-[260px] lg:w-[320px]
            -translate-x-1/4 -translate-y-1/5
        "
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 260px, 320px"
                />

            </header>

            <AccommodationComponent />
            <Footer />
        </div>
    )
}
