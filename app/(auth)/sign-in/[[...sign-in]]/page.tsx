import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex item-center justify-center h-screen mt-20">
            <SignIn />
        </div>
    )
}