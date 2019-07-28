import { Repo } from '../hooks/useRepos';

export function sortAndGetTopRepos(repos: Repo[], amount = 3) {
    const sortedRepos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    const topRepos = sortedRepos.slice(0, amount);

    return topRepos;
}

export function handleErrors(response: Response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }

    return response.json();
}
