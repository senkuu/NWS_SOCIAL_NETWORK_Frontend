import React, { useContext } from "react";

// import material-ui components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// import contexts
import { UserContext } from "services/contexts/UserContext";

interface IUserProfileProps {
  username: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    typo: {
      display: "flex",
      alignItems: "center",
    },
  })
);

function UserProfile(props: IUserProfileProps) {
  const classes = useStyles();

  const { disconnectUser } = useContext(UserContext);

  return (
    <Box className={classes.root}>
      <Typography className={classes.typo}>{props.username}</Typography>
      <Avatar onClick={disconnectUser}>MD</Avatar>
    </Box>
  );
}

export default UserProfile;
