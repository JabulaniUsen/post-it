import Footer from "@/components/landingPage/Footer";
import Navbar from "@/components/landingPage/Navbar";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div>
            <Navbar />
            <div className="flex item-center justify-center h-screen mt-20">
                <SignUp />
            </div>  
            <Footer/>
        </div>
    )

}