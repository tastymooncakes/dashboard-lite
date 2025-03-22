"use client"

import { fetchStoreUserProfile } from "@/app/lib/fetchStoreUserProfile";
import { useUserStore } from "@/app/stores/userStore";
import { useEffect } from "react";

const Header = () => {
    const { username, profilePicture } = useUserStore();
    
    useEffect(() => {
        if (!username || !profilePicture) {
            fetchStoreUserProfile();
        }
    }, [])

    return <div className="flex flex-rows">
        <div className="flex items-center justify-between pl-[40px] pr-[40px] w-full h-[80px] border-b-1 border-gray-500">
            <img 
                src="/Capture.svg"
                alt="Capture Logo"
                className="w-[160px] h-[35px]"
            />
            <img 
                src={profilePicture || "/globe.svg"}
                alt="Capture Logo"
                className="w-[40px] h-[40px] rounded-full"
            />
        </div>
    </div>
}

export default Header;