import React from 'react';

import './App.css';
import Input from './components/Input';
import useUserProfile from './hooks/useUserProfile';

const App: React.FC = () => {
    useUserProfile();

    return (
        <div className="App">
            <Input />
        </div>
    );
};

export default App;
