"use client";

import Image from "next/image";
import Logo from "@/assets/logo.png";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navigation = [
    { text: "nitro" },
    { text: "discover" },
    { text: "safety" },
    { text: "support" },
    { text: "blog" },
    { text: "careers" },
];


const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-5 px-8 md:px-12 shadow-sm drop-shadow-sm border-b">
            <Link href="/" className="flex static items-center justify-center gap-x-1 ">
                <Image
                    src={Logo}
                    alt="logo"
                    width={40}
                    height={40}
                    className="pb-1 max-md:w-[30px] max-md:h-[30px]"
                />
                <h2 className="font-bold text-base md:text-xl">#Strife</h2>
            </Link>

            {/** middle navigation */}
            <div className="hidden md:flex">
                <div className="flex items-center gap-x-6">
                    {navigation.map((item, i) => (
                        <h2 key={i} className="font-semibold capitalize text-lg cursor-pointer hover:underline hover:underline-offset-2">{item.text}</h2>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-x-[2px] md:gap-x-2">
                <ModeToggle />
                <Link href="/get-started">
                    <Button variant="link" className="font-medium text-xs md:text-sm">Log in</Button>
                </Link>
                <Link href="/get-started">
                    <Button className="rounded-full font-bold text-xs md:text-sm text-white dark:text-gray-800">Open Strife</Button>
                </Link>
            </div>
        </div>
    )
};

export default Navbar;