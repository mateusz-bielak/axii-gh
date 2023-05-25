import React from 'react';
import { Box, CircularProgress, Link, List, ListItemText, Typography, ListSubheader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Repo } from '../hooks/useRepos';

interface RepoItemProps {
  repo: Repo;
}

interface ReposListProps {
  fetchingRepos: boolean;
  repos: Repo[];
}

const useStyles = makeStyles({
  box: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => (
  <ListItemText
    primary={
      <>
        <Link href={repo.html_url} target="_blank" rel="noopener">
          {repo.name}
        </Link>
        {repo.description && ` - ${repo.description}`}
      </>
    }
  />
);

const ReposList: React.FC<ReposListProps> = ({ fetchingRepos, repos }) => {
  const classes = useStyles();

  return fetchingRepos ? (
    <Box className={classes.box}>
      <CircularProgress />
    </Box>
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
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </List>
  ) : (
    <Typography color="textSecondary">No repositories</Typography>
  );
};

export default ReposList;
