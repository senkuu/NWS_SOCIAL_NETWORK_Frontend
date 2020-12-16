import React from 'react';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { CenterFocusStrong } from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';


import { useUser } from "services/contexts/UserContext";
import { isFunctionTypeNode } from 'typescript';

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
      flexGrow: 1,
    },
    paper: {
      backgroundColor: "",
      padding: theme.spacing(2),
      marginTop: 50,
      margin: 'auto',
      maxWidth: 1050,
      height: 450
    },
    image: {
      width: 400,
      height: 400,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    bold: {
        fontWeight: 700,
        color:  theme.palette.primary.dark,
      },
    red: {
        fontWeight: 700,
        color:  '#ff3333',
        fontSize: 12
      },
  }),
);

function ProfilPage() {
  const classes = useStyles();
  const { user, disconnectUser, authenticateUser } = useUser();

  if (user) {
    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
            <Grid item>
                <ButtonBase className={classes.image}>
                <img className={classes.img} alt="profil" src="https://winieski-k.github.io/assets/img/Profile.jpg" />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                <Typography gutterBottom variant="h5" style={{marginTop: 20, textAlign: "center", }}>
                    Votre Profil
                    </Typography>
                    <Typography gutterBottom variant="h5" style={{marginTop: 35}}>
                    John DOE
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                    <span className={classes.bold}>Option</span> : developpement web
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                    rôle : moderateur
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.red} variant="body2" style={{ cursor: 'pointer' }}>
                    Supprimer votre compte
                    </Typography>
                </Grid>
                </Grid>
                <Grid item>
                <Typography className={classes.red} variant="body2" style={{ cursor: 'pointer' }}>
                    <ExitToAppIcon  onClick={disconnectUser}
          data-testid="userprofile-logout-button" style={{marginLeft: 12}}/>
                    </Typography>
                    <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="primary">
                <MailIcon />
                </StyledBadge>
            </IconButton>
                </Grid>
            </Grid>
            </Grid>
        </Paper>
        </div>
    );
    }


return (
   <Typography> test </Typography>
  );
}

export default ProfilPage;