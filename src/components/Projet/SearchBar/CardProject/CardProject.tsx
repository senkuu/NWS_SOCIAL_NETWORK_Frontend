import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
      marginLeft: "25px",
    },
    margin: {
        margin: theme.spacing(1),
      },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    avatar: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        fontSize: '14px'
    }
  }),
);

export default function CardProject() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const options = [
    'Rejoindre le projet',
    'Ajouter aux favoris',
  ];
  const name_project = "Le nom du projet"
  const description_project = <Typography variant="body2" color="textSecondary" component="p">
  légère descripton du projet en question, des missions, et des objectifs </Typography>
  const date_project_creation = "17 september 2019"
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 64;


  return (
 <div>
    <Box display="flex" justifyContent="center" m={1} p={1}>
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            JD
          </Avatar>
        }
        action={
            <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={name_project}
        subheader={date_project_creation}
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1514168757508-07ffe9ae125b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title="Paella dish"
      />
      <CardContent>
        {description_project}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Ajouter aux favoris">
          <FavoriteIcon color="action"/>
        </IconButton>
        <IconButton aria-label="Message">
          <MessageIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet sit amet ipsum ut pellentesque.
          </Typography>
          <Typography paragraph>
          Donec volutpat ligula sed lobortis commodo. Vestibulum commodo dui lorem, at efficitur felis molestie vitae. Ut justo tellus, iaculis in turpis placerat, interdum fermentum ante. Etiam ipsum purus, rhoncus non accumsan quis, consequat nec tellus. Phasellus finibus sollicitudin justo pharetra scelerisque. Integer aliquam tincidunt enim. Vivamus pharetra mattis pretium.
          </Typography>
          <Typography paragraph>
          Donec volutpat ligula sed lobortis commodo. Vestibulum commodo dui lorem, at efficitur felis molestie vitae. Ut justo tellus, iaculis in turpis placerat, interdum fermentum ante. Etiam ipsum purus, rhoncus non accumsan quis, consequat nec tellus. Phasellus finibus sollicitudin justo pharetra scelerisque. Integer aliquam tincidunt enim. Vivamus pharetra mattis pretium.
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <Avatar aria-label="recipe"  className={classes.avatar}>
            JD
          </Avatar>
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Écrire un commentaire..." />
          </Grid>
          <IconButton aria-label="send">
            <SendIcon />
            </IconButton>
        </Grid>
      </div>
    </Card>
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.orange}>
            DF
          </Avatar>
        }
        action={
            <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={name_project}
        subheader={date_project_creation}
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1557754897-ca12c5049d83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        title="Paella dish"
      />
      <CardContent>
        {description_project}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Ajouter aux favoris">
          <FavoriteIcon color="action"/>
        </IconButton>
        <IconButton aria-label="Message">
          <MessageIcon />
        </IconButton>
      </CardActions>
    </Card>
    <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
    
    </div>
  );
}