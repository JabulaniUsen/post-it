import Footer from "@/components/landingPage/Footer";
import Navbar from "@/components/landingPage/Navbar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="">
            <Navbar />
            <div className="flex item-center justify-center h-screen mt-20">
                <SignIn />
            </div>
            <Footer/>
        </div>
    )
}