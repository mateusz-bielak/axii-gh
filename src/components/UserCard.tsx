import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Link,
    List,
    ListItemText,
    Typography,
    ListSubheader,
} from '@material-ui/core';

import { UserProfile } from '../hooks/useUserProfile';
import { Repo } from '../hooks/useRepos';

const useStyles = makeStyles(theme => ({
    avatar: {
        height: 192,
        width: 192,
        margin: `0 auto ${theme.spacing(3)}px auto`,

        [theme.breakpoints.up('sm')]: {
            height: 'auto',
            width: 'auto',
        },
    },
    card: {
        backgroundColor: ' #F8F8FF',
    },
    repos: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(3),
        },
    },
}));

const UserCard = ({
    fetchingRepos,
    repos,
    userProfile,
}: {
    fetchingRepos: boolean;
    repos: Repo[];
    userProfile: UserProfile;
}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid container>
                    <Grid item xs={12} sm={4} md={3}>
                        <Avatar
                            alt={userProfile.name}
                            className={classes.avatar}
                            src={userProfile.avatar_url}
                        />
                        <Typography variant="h5">{userProfile.name}</Typography>
                        <Typography variant="body2">{userProfile.bio}</Typography>
                    </Grid>
                    <Grid className={classes.repos} item xs={12} sm={8} md={9}>
                        {fetchingRepos ? (
                            <p>Loading...</p>
                        ) : repos.length ? (
                            <List
                                disablePadding
                                subheader={
                                    <ListSubheader color="inherit" disableGutters>
                                        Repositories
                                    </ListSubheader>
                                }
                            >
                                {repos.map(repo => (
                                    <ListItemText
                                        key={repo.id}
                                        primary={
                                            <>
                                                <Link
                                                    href={repo.html_url}
                                                    target="_blank"
                                                    rel="noopener"
                                                >
                                                    {repo.name}
                                                </Link>
                                                {repo.description && ` - ${repo.description}`}
                                            </>
                                        }
                                    />
                                ))}
                            </List>
                        ) : (
                            <p>No repos</p>
                        )}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default UserCard;
