import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page () {
    return (
        <div>Home Page
            <Link href="/get-started">
            <Button>Get Started</Button>
            </Link>
        </div>
    )
} 