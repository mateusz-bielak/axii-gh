import { useEffect, useState } from 'react';

import { api } from '../variables';

export interface UserProfile {
    avatar_url: string;
    bio: string;
    id: number | null;
    login: string;
    name: string;
}

const defaultUserProfile = {
    avatar_url: '',
    bio: '',
    id: null,
    login: '',
    name: '',
};

function useUserProfile() {
    const [username, setUsername] = useState('mateusz-bielak');
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
