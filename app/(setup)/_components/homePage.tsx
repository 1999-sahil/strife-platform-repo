"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="w-full px-12 flex max-md:flex-col-reverse flex-row gap-4">
            {/** left text */}
            <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold uppercase font-archivo text-center">
                    Group chat that’s all fun & soothing
                </h2>
                <p className="text-lg text-center">
                    Strife is great for chilling with friends, or even building a worldwide community. Customize your own space to talk, play and hang out.
                </p>
                <div className="flex items-center justify-center">
                    <Link href="/get-started">
                        <Button variant="primary" className="rounded-full font-bold w-full px-12 py-8 text-lg">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>

            {/** right image */}
            <div className="w-full md:w-1/2 bg-green-500">right</div>
        </div>
    )
};

export default HomePage;