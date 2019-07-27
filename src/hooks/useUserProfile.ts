import { useEffect, useState } from 'react';

import { api } from '../variables';

interface UserProfile {
    bio: string;
    id: number | null;
    login: string;
    name: string;
}

const defaultUserProfile = {
    bio: '',
    id: null,
    login: '',
    name: '',
};

function useUserProfile() {
    const [username, setUsername] = useState('');
    const [userProfile, setUserProfile] = useState<UserProfile>(defaultUserProfile);

    useEffect(() => {
        async function fetchUserProfile() {
            const profile: UserProfile = await fetch(`${api}users/${username}`).then(res => res.json());

            setUserProfile(profile);
        }

        username && fetchUserProfile();
    }, [username]);

    return { setUsername, userProfile };
}

export default useUserProfile;
