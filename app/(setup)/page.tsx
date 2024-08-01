import { Footer } from "./_components/footer";
import Navbar from "./_components/home-navbar";
import HomePage from "./_components/homePage";


export default function Page () {
    return (
        <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-black">
            <Navbar />
            <div className="px-10 py-5 bg-white dark:bg-black">
                <HomePage />
            </div>
            <Footer />
        </div>
    )
} 
