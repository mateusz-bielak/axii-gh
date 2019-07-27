import React from 'react';

import './App.css';
import Input from './components/Input';
import useRepos from './hooks/useRepos';
import useUserProfile from './hooks/useUserProfile';

interface UseUserProfile {
    userProfile: { login?: string };
}

const App: React.FC = () => {
    const { userProfile }: UseUserProfile = useUserProfile();
    useRepos(userProfile.login);

    return (
        <div className="App">
            <Input />
        </div>
    );
};

export default App;
