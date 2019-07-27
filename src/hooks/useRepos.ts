import { useEffect, useState } from 'react';

import { api } from '../variables';
import { sortAndGetTopRepos } from '../helpers';

export interface Repo {
    id: number;
    name: string;
    stargazers_count: number;
}

function useRepos(username: string | undefined) {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        async function fetchRepos() {
            const rawRepos: Repo[] = await fetch(`${api}users/${username}/repos`).then(res =>
                res.json(),
            );

            const repos = sortAndGetTopRepos(rawRepos);

            setRepos(repos);
        }

        username && fetchRepos();
    }, [username]);

    return repos;
}

export default useRepos;
