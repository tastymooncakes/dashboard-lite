import { useUserStore } from "../stores/userStore";

export const fetchStoreUserProfile = async () => {
    try {
        const response = await fetch('/api/userProfile');

        if (!response.ok) {
            console.log("error");
            throw new Error('Failed');
        }

        const data = await response.json();
        
        const { setUser } = useUserStore.getState()
        setUser({
            username: data.display_name,
            profilePicture: data.profile_picture
        }); 

    } catch (error) {
        return null;
    }
};