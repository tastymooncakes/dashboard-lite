import { useUserStore } from "../stores/userStore";

export const fetchStoreUserProfile = async () => {
    try {
        const response = await fetch('/api/userProfile');

        if (!response.ok) {
            throw new Error('Failed');
        }

        const data = await response.json();
        
        const { setUser } = useUserStore.getState()
        setUser({
            username: data.display_name,
            profilePicture: data.profile_picture_thumbnail,
            displayName: data.display_name,
            subject: data.subject,
            description: data.description
        }); 

    } catch (error) {
        return null;
    }
};