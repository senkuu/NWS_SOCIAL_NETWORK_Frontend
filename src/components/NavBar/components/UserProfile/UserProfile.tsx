import React, { Profiler, useState } from "react";
import { Link } from "react-router-dom";

// import material-ui components
import { makeStyles, createStyles, withStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';

interface IUserProfileProps {
  username: string;
  role: string,
  disconnectUser: () => void;
}

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -1,
      top: 8,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '0 2px',
    },
  }),
)(Badge);

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
    typo2: {
      color: theme.palette.primary.contrastText,
      marginRight: 5,
      fontSize: "8px",
    },
    test: {
      display: "flex",
      justifyContent: "center",
      color: "#14141f",
      fontSize: "17px",
      textDecoration: "none",
    },
  })
);

function UserProfile(props: IUserProfileProps) {
  const classes = useStyles();

  const [
    menuAnchorElement,
    setMenuAnchorElement,
  ] = useState<null | HTMLElement>(null);

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
        data-testid="userprofile-button"
      >
        
        <Typography className={classes.typo}>{props.username}</Typography>
        <Typography className={classes.typo2}>{props.role} </Typography>
        <Avatar>JD</Avatar>
      </Button>
      <Menu
        anchorEl={menuAnchorElement}
        keepMounted
        open={Boolean(menuAnchorElement)}
        onClose={handleMenuClose}
      >
        <MenuItem
          onClick={props.disconnectUser}
          data-testid="userprofile-logout-button"
        >
          Logout
        </MenuItem>
       
        <Link to="/Profil" className={classes.test}>
          Profil
        </Link>
      </Menu>
        <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="secondary">
          <MailIcon />
        </StyledBadge>
        </IconButton>
    </React.Fragment>
  );
}

export default UserProfile;
