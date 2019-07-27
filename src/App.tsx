import React from 'react';

import './App.css';
import Form from './components/Form';
import useRepos from './hooks/useRepos';
import useUserProfile from './hooks/useUserProfile';

interface UseUserProfile {
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    userProfile: { login?: string };
}

const App: React.FC = () => {
    const { setUsername, userProfile }: UseUserProfile = useUserProfile();
    useRepos(userProfile.login);

    return (
        <div className="App">
            <Form onSubmit={setUsername} />
        </div>
    );
};

export default App;
