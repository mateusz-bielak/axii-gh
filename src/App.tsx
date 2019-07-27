import React from 'react';

import './App.css';
import Form from './components/Form';
import useRepos, { Repo } from './hooks/useRepos';
import useUserProfile from './hooks/useUserProfile';

interface UseUserProfile {
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    userProfile: { bio?: string; name?: string; login?: string };
}

const App: React.FC = () => {
    const { setUsername, userProfile }: UseUserProfile = useUserProfile();
    const repos: Repo[] = useRepos(userProfile.login);

    return (
        <div className="App">
            <Form onSubmit={setUsername} />
            {userProfile && (
                <>
                    <p>Name: {userProfile.name}</p>
                    <p>Bio: {userProfile.bio}</p>
                </>
            )}
            {repos.map(repo => (
                <p key={repo.id}>{repo.name}</p>
            ))}
        </div>
    );
};

export default App;
