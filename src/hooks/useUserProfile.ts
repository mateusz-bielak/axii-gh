import { useEffect, useState } from 'react';

import { api } from '../variables';

function useUserProfile() {
    const [username, setUsername] = useState('mateusz-bielak');
    const [userProfile, setUserProfile] = useState({});

    useEffect(() => {
        async function fetchUserProfile() {
            const profile = await fetch(`${api}users/${username}`).then(res => res.json());

            setUserProfile(profile);
        }

        username && fetchUserProfile();
    }, [username]);

    return { setUsername, userProfile };
}

export default useUserProfile;
