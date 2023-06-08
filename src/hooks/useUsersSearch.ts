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

export function useUsersSearch() {
  const [username, setUsername] = useState('');
  const [userProfiles, setUserProfiles] = useState<UserProfile[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function searchUsers() {
      try {
        const users = await fetch(`${api}search/users?q=${username}&per_page=10`).then(handleErrors);
        setUserProfiles(users.items);
      } catch {
        setError(true);
      }
    }

    username && searchUsers();
  }, [username]);

  return { error, setUsername, userProfiles };
}
