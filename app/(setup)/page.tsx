import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "./_components/home-navbar";
import HomePage from "./_components/homePage";

export default function Page () {
    return (
        <div className="w-full h-full bg-white dark:bg-black">
            <Navbar />
            <HomePage />
        </div>
    )
} 

{/**
    <Link href="/get-started">
            <Button>Get Started</Button>
            </Link>
    */}