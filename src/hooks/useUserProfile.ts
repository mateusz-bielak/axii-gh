import { useEffect, useState } from 'react';

import { handleErrors } from '../helpers';
import { api } from '../variables';

export interface UserProfile {
  avatar_url: string;
  bio: string;
  id: number | null;
  login: string;
  name: string;
}

function useUserProfile(username = '') {
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const profile: UserProfile = await fetch(`${api}users/${username}`).then(handleErrors);

        setUserProfile(profile);
        setError(false);
      } catch {
        setError(true);
      }
    }

    username && fetchUserProfile();
  }, [username]);

  return { error, userProfile };
}

export default useUserProfile;
