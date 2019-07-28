import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Form from './components/Form';
import useRepos from './hooks/useRepos';
import useUserProfile from './hooks/useUserProfile';
import UserCard from './components/UserCard';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(3),
    },
}));

const App: React.FC = () => {
    const { setUsername, userProfile } = useUserProfile();
    const { fetchingRepos, repos } = useRepos(userProfile && userProfile.login);

    const classes = useStyles();

    return (
        <Container className={classes.container} maxWidth="md">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Form onSubmit={setUsername} />
                </Grid>
                <Grid item xs={12}>
                    {userProfile.id ? (
                        <UserCard
                            fetchingRepos={fetchingRepos}
                            repos={repos}
                            userProfile={userProfile}
                        />
                    ) : (
                        <p>Browse users by typing username above</p>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
