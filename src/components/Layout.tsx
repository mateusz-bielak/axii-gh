import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { UserProfile } from '../hooks/useUsersSearch';
import Form from './Form';
import UserCard from './UserCard';

interface LayoutProps {
  error: boolean;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  userProfiles: UserProfile[];
}

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
  },
}));

const Layout: React.FC<LayoutProps> = ({ error, setUsername, userProfiles }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Form onSubmit={setUsername} />
        </Grid>
        <Grid item xs={12}>
          {userProfiles.map(userProfile => (
            <UserCard key={userProfile.id} username={userProfile.login} />
          ))}
          {/* {userProfile.id ? (
            <UserCard fetchingRepos={fetchingRepos} repos={repos} userProfile={userProfile} />
          ) : (
            <Paper className={classes.paper}>
              <Typography color="textSecondary">
                {error ? 'Oops, something went wrong. Please, try again.' : 'Search user by typing Github username'}
              </Typography>
            </Paper>
          )} */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
