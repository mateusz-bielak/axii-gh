import { useEffect, useState } from "react";

import { api } from "../variables";
import { handleErrors } from "../helpers";

export interface UserProfile {
  avatar_url: string;
  bio: string;
  id: number | null;
  login: string;
  name: string;
}

const defaultUserProfile = {
  avatar_url: "",
  bio: "",
  id: null,
  login: "",
  name: "",
};

function useUserProfile() {
  const [username, setUsername] = useState("");
  const [userProfile, setUserProfile] = useState<UserProfile>(defaultUserProfile);
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

  return { error, setUsername, userProfile };
}

export default useUserProfile;
