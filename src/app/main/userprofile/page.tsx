"use client"

import { useUserStore } from "@/app/stores/userStore";
import { useRouter } from "next/navigation";

const UserProfile = () => {
    const { username, displayName, profilePicture, clearUser } = useUserStore();
    const router = useRouter();
    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout");
            router.push("/");
        } catch (error) {
            console.error("Error: ", error);
        } finally {
            clearUser();
        }
    }

    return (
        <div className="flex flex-col justify-center items-center pt-[55px] gap-2">
            <img 
                src={profilePicture || "/globe.svg"}
                alt="Capture Logo"
                className="w-[100px] h-[100px] rounded-full"
            />
            <div className="flex flex-col w-full max-w-[450px] p-4 sm:p-0">
                <label className="text-base mb-[5px]" htmlFor="username">Username</label>
                        <input 
                            id="username"
                            type="text"
                            className="text-white mb-[15px] outline-none border-1 border-gray-500 rounded-lg h-[52px] px-3 text-black"
                            placeholder={username || ""}
                            readOnly
                        />
            </div>
            <div className="flex flex-col w-full max-w-[450px] p-4 sm:p-0">
                <label className="text-base mb-[5px]" htmlFor="displayName">Display Name</label>
                        <input 
                            id="displayName"
                            type="text"
                            className="text-white mb-[15px] outline-none border-1 border-gray-500 rounded-lg h-[52px] px-3 text-black"
                            placeholder={displayName || ""}
                            readOnly
                        />
            </div>
            <div className="flex flex-col w-full max-w-[450px]">
                <button className="h-[52px] border-1 border-white rounded-lg mb-[20px] text-base hover:bg-blue-500 hover:border-0" onClick={handleLogout}>Logout</button>
            </div>           
        </div>
    );
};

export default UserProfile;
