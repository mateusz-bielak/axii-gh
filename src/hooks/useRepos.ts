import { useEffect, useState } from 'react';

import { api } from '../variables';
import { sortAndGetTopRepos } from '../helpers';

export interface Repo {
    html_url: string;
    id: number;
    name: string;
    stargazers_count: number;
}

function useRepos(username?: string) {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [fetchingRepos, setFetchingRepos] = useState(false);

    useEffect(() => {
        async function fetchRepos() {
            setFetchingRepos(true);

            const rawRepos: Repo[] = await fetch(`${api}users/${username}/repos`).then(res =>
                res.json(),
            );
            const repos = sortAndGetTopRepos(rawRepos);

            setFetchingRepos(false);
            setRepos(repos);
        }

        username && fetchRepos();
    }, [username]);

    return { fetchingRepos, repos };
}

export default useRepos;
