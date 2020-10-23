import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    typo: {
      display: 'flex',
      alignItems: 'center',

    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }),
);

function User() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.typo}>Michel Druff</p>
      <Avatar className={classes.purple}>MD</Avatar>
    </div>
  );
}

export default User;
