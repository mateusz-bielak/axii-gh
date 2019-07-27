import React from 'react';

import './App.css';
import Form from './components/Form';
import useRepos from './hooks/useRepos';
import useUserProfile from './hooks/useUserProfile';

const App: React.FC = () => {
    const { setUsername, userProfile } = useUserProfile();
    const { fetchingRepos, repos } = useRepos(userProfile && userProfile.login);

    return (
        <div className="App">
            <Form onSubmit={setUsername} />
            {userProfile.id ? (
                <>
                    <p>Name: {userProfile.name}</p>
                    <p>Bio: {userProfile.bio}</p>

                    {fetchingRepos ? (
                        <p>Loading...</p>
                    ) : repos.length ? (
                        repos.map(repo => <p key={repo.id}>{repo.name}</p>)
                    ) : (
                        <p>No repos</p>
                    )}
                </>
            ) : (
                <p>Browse users by typing username above</p>
            )}
        </div>
    );
};

export default App;
