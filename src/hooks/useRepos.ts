import { useEffect, useState } from 'react';

import { api } from '../variables';

function useRepos(username: string | undefined) {
    const [repos, setRepos] = useState({});

    useEffect(() => {
        async function fetchRepos() {
            const repos = await fetch(`${api}users/${username}/repos`).then(res => res.json());

            setRepos(repos);
        }

        username && fetchRepos();
    }, [username]);

    return repos;
}

export default useRepos;
