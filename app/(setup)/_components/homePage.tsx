"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HomeLeft from "@/assets/home-one.png";
import HomeRight from "@/assets/home-mob.png";
import { GridBackgroundDemo } from "./grid-background";

const HomePage = () => {
    return (
        <div className="w-full flex max-md:flex-col-reverse flex-row gap-4 dark:bg-black">
            {/** left text */}
            <div className="w-full md:w-1/2 space-y-8 my-6 pt-6">
                <div className="space-y-2">
                    <h2 className="text-3xl md:text-5xl font-semibold font-archivo text-gray-900 dark:text-gray-100 whitespace-nowrap">Group Chat</h2>
                    <h2 className="text-3xl md:text-5xl font-semibold font-archivo w-fit bg-[#20b2aa] text-white px-3 rounded-l-full rounded-tr-full whitespace-nowrap">That&apos;s all fun</h2>
                    <h2 className="text-3xl md:text-5xl font-semibold font-archivo text-gray-900 dark:text-gray-100 whitespace-nowrap">Connect Instantly,</h2>
                    <h2 className="text-3xl md:text-5xl font-semibold font-archivo bg-purple-800 text-white px-3 w-fit rounded-l-full rounded-tr-full whitespace-nowrap">Connect Seamlessly</h2>
                </div>
                <p className="text-base md:text-lg text-gray-700 font-semibold dark:text-white">
                    Strife is great for chilling with friends, or even building a worldwide community. Customize your own space to talk, play and hang out.
                </p>
                <div className="mt-7 w-fit">
                    <Link href="/get-started">
                        <Button variant="primary" className="flex items-center gap-3 rounded-full font-bold w-full md:px-12 md:py-8 md:text-lg">
                            Get Started
                            <ArrowRight />
                        </Button>
                    </Link>
                </div>
            </div>

            {/** right image */}
            <div className="w-full md:w-1/2 mt-5">
                <GridBackgroundDemo />
            </div>
        </div>
    )
};

export default HomePage;

