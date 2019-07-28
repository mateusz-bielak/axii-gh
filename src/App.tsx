import React from 'react';

import Form from './components/Form';
import useRepos from './hooks/useRepos';
import useUserProfile from './hooks/useUserProfile';
import UserCard from './components/UserCard';

const App: React.FC = () => {
    const { setUsername, userProfile } = useUserProfile();
    const { fetchingRepos, repos } = useRepos(userProfile && userProfile.login);

    return (
        <div className="App">
            <Form onSubmit={setUsername} />
            {userProfile.id ? (
                <UserCard fetchingRepos={fetchingRepos} repos={repos} userProfile={userProfile} />
            ) : (
                <p>Browse users by typing username above</p>
            )}
        </div>
    );
};

export default App;
