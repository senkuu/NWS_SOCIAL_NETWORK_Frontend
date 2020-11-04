import React, { useContext, useState } from "react";

// import material-ui components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// import contexts
import { UserContext } from "services/contexts/UserContext";

interface IUserProfileProps {
  username: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundColor: theme.palette.primary.dark,
      padding: 10,
      "&:hover": {
        cursor: "pointer",
      },
    },
    typo: {
      color: theme.palette.primary.contrastText,
      marginRight: 15,
    },
  })
);

function UserProfile(props: IUserProfileProps) {
  const classes = useStyles();

  const [
    menuAnchorElement,
    setMenuAnchorElement,
  ] = useState<null | HTMLElement>(null);

  const { disconnectUser } = useContext(UserContext);

  const handleProfileClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorElement(e.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorElement(null);
  };

  return (
    <React.Fragment>
      <Button
        className={classes.root}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleProfileClick(e)
        }
      >
        <Typography className={classes.typo}>{props.username}</Typography>
        <Avatar>MD</Avatar>
      </Button>
      <Menu
        anchorEl={menuAnchorElement}
        keepMounted
        open={Boolean(menuAnchorElement)}
        onClose={handleMenuClose}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={disconnectUser}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default UserProfile;
