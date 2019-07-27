import { useEffect, useState } from 'react';

function useUserProfile() {
    const [username, setUsername] = useState('mateusz-bielak');
    const [userProfile, setUserProfile] = useState({});

    useEffect(() => {
        async function fetchUserProfile() {
            const profile = await fetch(`https://api.github.com/users/${username}`).then(res =>
                res.json(),
            );

            setUserProfile(profile);
        }

        username && fetchUserProfile();
    }, [username]);

    return { setUsername, userProfile };
}

export default useUserProfile;
