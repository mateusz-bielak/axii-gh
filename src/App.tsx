import React from 'react';

import useRepos from './hooks/useRepos';
import useUserProfile from './hooks/useUserProfile';
import Layout from './components/Layout';

const App: React.FC = () => {
  const { userProfile, ...rest } = useUserProfile();
  const repos = useRepos(userProfile && userProfile.login);

  return <Layout {...repos} {...rest} userProfile={userProfile} />;
};

export default App;
