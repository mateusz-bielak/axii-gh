import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";

import ReposList from "./ReposList";
import { UserProfile } from "../hooks/useUserProfile";
import { Repo } from "../hooks/useRepos";

interface UserDescriptionProps {
  avatarClassName: string;
  userProfile: UserProfile;
}

interface UserCardProps {
  fetchingRepos: boolean;
  repos: Repo[];
  userProfile: UserProfile;
}

const useStyles = makeStyles(theme => ({
  avatar: {
    height: 192,
    width: 192,
    margin: `0 auto ${theme.spacing(3)}px auto`,

    [theme.breakpoints.up("sm")]: {
      height: "auto",
      width: "auto",
    },
  },
  card: {
    backgroundColor: " #F8F8FF",
  },
  repos: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(3),
    },
  },
}));

const UserDescription: React.FC<UserDescriptionProps> = ({ avatarClassName, userProfile }) => (
  <>
    <Avatar alt={userProfile.name} className={avatarClassName} src={userProfile.avatar_url} />
    <Typography variant="h5">{userProfile.name}</Typography>
    <Typography variant="body2">{userProfile.bio}</Typography>
  </>
);

const UserCard = ({ fetchingRepos, repos, userProfile }: UserCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={4} md={3}>
            <UserDescription avatarClassName={classes.avatar} userProfile={userProfile} />
          </Grid>
          <Grid className={classes.repos} item xs={12} sm={8} md={9}>
            <ReposList fetchingRepos={fetchingRepos} repos={repos} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserCard;
