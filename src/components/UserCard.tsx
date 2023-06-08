import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import useUserProfile from '../hooks/useUserProfile';
import { UserProfile } from '../hooks/useUsersSearch';
import ReposList from './ReposList';

interface UserDescriptionProps {
  avatarClassName: string;
  userProfile: UserProfile;
}

interface UserCardProps {
  username: string;
}

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
    marginBottom: theme.spacing(3),
  },
  repos: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
    },
  },
}));

const UserDescription: React.FC<UserDescriptionProps> = ({ avatarClassName, userProfile }) => (
  <>
    <Avatar alt={userProfile.login} className={avatarClassName} src={userProfile.avatar_url} />
    <Typography variant="h5">{userProfile.login}</Typography>
    <Typography variant="body2">{userProfile.bio}</Typography>
  </>
);

const UserCard = ({ username }: UserCardProps) => {
  const { userProfile } = useUserProfile(username);
  const classes = useStyles();

  if (!userProfile) return null;

  console.log(userProfile);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={4} md={3}>
            <UserDescription avatarClassName={classes.avatar} userProfile={userProfile} />
          </Grid>
          <Grid className={classes.repos} item xs={12} sm={8} md={9}>
            <ReposList userLogin={userProfile.login} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserCard;
