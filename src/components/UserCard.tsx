import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, Link, Typography } from '@material-ui/core';

import { UserProfile } from '../hooks/useUserProfile';
import { Repo } from '../hooks/useRepos';

const useStyles = makeStyles({
    avatar: {
        height: 160,
        width: 160,
    },
    card: {
        display: 'flex',
    },
    link: {
        display: 'block',
    },
    profile: {
        maxWidth: '30%',
    },
});

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
            <CardContent className={classes.profile}>
                <Avatar alt={userProfile.name} className={classes.avatar} src={userProfile.avatar_url} />
                <Typography variant="h5">{userProfile.name}</Typography>
                <Typography variant="body2">{userProfile.bio}</Typography>
            </CardContent>
            <CardContent>
                {fetchingRepos ? (
                    <p>Loading...</p>
                ) : repos.length ? (
                    repos.map((repo, index) => (
                        <Link
                            key={repo.id}
                            className={classes.link}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener"
                        >
                            {index + 1}. {repo.name}
                        </Link>
                    ))
                ) : (
                    <p>No repos</p>
                )}
            </CardContent>
        </Card>
    );
};

export default UserCard;
