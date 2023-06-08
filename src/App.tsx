import React from 'react';
import Layout from './components/Layout';
import { useUsersSearch } from './hooks/useUsersSearch';

const App: React.FC = () => {
  const { userProfiles, ...rest } = useUsersSearch();

  return <Layout {...rest} userProfiles={userProfiles} />;
};

export default App;
