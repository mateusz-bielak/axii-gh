import { useEffect, useState } from 'react';

import { api } from '../variables';
import { sortAndGetTopRepos, handleErrors } from '../helpers';

export interface Repo {
    description: string;
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
            try {
                setFetchingRepos(true);

                const rawRepos: Repo[] = await fetch(`${api}users/${username}sdwedwedwxs/repos`).then(
                    handleErrors,
                );
                const repos = sortAndGetTopRepos(rawRepos);

                setFetchingRepos(false);
                setRepos(repos);
            } catch {
                setFetchingRepos(false);
            }
        }

        username && fetchRepos();
    }, [username]);

    return { fetchingRepos, repos };
}

export default useRepos;
