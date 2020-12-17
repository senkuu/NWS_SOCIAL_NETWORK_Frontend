import React, { useEffect, useState, useContext } from "react";

import Typography from "@material-ui/core/Typography";
import { Redirect, useParams } from "react-router-dom";
import fetchGuild from "services/guilds/fetchGuild";
import { Guild } from "types/guilds";
import { GuildUsersList} from "types/GuildUsersList"
import { UserInGuild } from "types/UserInGuild";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ImageIcon from '@material-ui/icons/Image';


// import contexts
import {UserContext} from "services/contexts/UserContext";
import {
  getUserGuildStatus,
  joinGuild,
  getGuildUserList,
  setUserGuildStatus,
  deleteUserGuild
} from "services/guilds/guilds";
import {Button, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {Avatar, List} from "@material-ui/core";


interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    title: {
      textAlign:"center"
    },
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    margin: {
      margin: theme.spacing(1),
    },
    media: {
      height: 140,
    },
    card: {
      margin: 'auto'
    },
    tabs: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    statusDisplay: {
      minWidth: 160,
    },
    statusButton: {
      display: 'flex',
    }
  })
);

function GuildIfMember() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const {user} = useContext(UserContext);

  let {id}: any = useParams();
  const [guild, setGuild] = useState<Guild>();
  const classes = useStyles();

  useEffect(() => {
    fetchGuild(id)
      .then((guild) => setGuild(guild))
      .catch((e) => console.error(e));
  }, []);

  const [guildStatus, setGuildStatus] = useState<UserInGuild>();

  useEffect(() => {
    getUserGuildStatus(id)
      .then((guildStatus : any) => setGuildStatus(guildStatus))
      .catch((e) => console.error(e));
  }, []);


  const [guildUsersList, setGuildUsersList] = useState<GuildUsersList[]>([]);

  useEffect(() => {
    getGuildUserList(id)
      .then((guildUsersList) => setGuildUsersList(guildUsersList))
      .catch((e) => console.error(e));
  }, []);


  var status = guildStatus?.userRole;
  status = "Admin";

  if (!user) {
    return (<Redirect to={`/listeDesGuildes`}/>)
  }


  if (status === "Admin") {
    return (
      <React.Fragment>
        {guild !== undefined ? (
          <div className={classes.tabs}>
            <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Card className={`${classes.root} ${classes.card}`} key={guild.id}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://via.placeholder.com/400/76e888/FFFFFF/?text=ImageGuilde.png"
                    title="Card Name"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {guild.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {guild.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
              </Card>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <h1>POST</h1>
            </TabPanel>
            <TabPanel value={value} index={2}>
              {guildUsersList.length > 0 ? (guildUsersList.map((a) =>
                <div>
                  {console.log(a)}
                  <List className={classes.root}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <ImageIcon/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={a.user.name} secondary={a.role} className={classes.statusDisplay}/>
                      {a.role === "En attente" ? (
                        <div className={classes.statusButton}>
                          <Button onClick={() => setUserGuildStatus(guild.id.toString(), a.user.id.toString())}
                                  variant="contained"
                                  size="small" color="primary" className={classes.margin}>
                            Accepter
                          </Button>
                          <Button onClick={() => deleteUserGuild(guild.id.toString(), a.user.id.toString())}
                                  variant="contained"
                                  size="small" color="primary" className={classes.margin}>
                            Refuser
                          </Button>
                        </div>

                      ) : (
                        <Button onClick={() => deleteUserGuild(guild.id.toString(), a.user.id.toString())}
                                variant="contained"
                                size="small" color="primary" className={classes.margin}>
                          Supprimer
                        </Button>
                      )}
                    </ListItem>
                  </List>


                </div>
              )) : (
                <Typography>Aucun Membre dans cette guilde</Typography>
              )}
            </TabPanel>
          </div>
        ) : (
          <Typography>Chargement</Typography>
        )}
      </React.Fragment>
    );
  }

  if (status === "Membre") {
    return (
      <React.Fragment>
        {guild !== undefined ? (
          <div className={classes.tabs}>
            <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />

              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Card className={`${classes.root} ${classes.card}`} key={guild.id}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://via.placeholder.com/400/76e888/FFFFFF/?text=ImageGuilde.png"
                    title="Card Name"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {guild.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {guild.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
              </Card>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <h1>POST</h1>
            </TabPanel>
          </div>
        ) : (
          <Typography>Chargement</Typography>
        )}
      </React.Fragment>
    );
  }

  if (status === "En attente") {
    return (
      <React.Fragment>
        {guild !== undefined ? (
          <Card className={`${classes.root} ${classes.card}`} key={guild.id}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/400/76e888/FFFFFF/?text=ImageGuilde.png"
                title="Card Name"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {guild.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {guild.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography gutterBottom variant="h5" component="h2">
                vous êtes en attente dans cette guilde
              </Typography>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ) : (
          <Typography>Chargement</Typography>
        )}
      </React.Fragment>
    );
  }


  return (
    <React.Fragment>
      {guild !== undefined ? (
        <Card className={`${classes.root} ${classes.card}`} key={guild.id}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://via.placeholder.com/400/76e888/FFFFFF/?text=ImageGuilde.png"
              title="Card Name"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {guild.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {guild.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {user !== null ? (
              <Button onClick={() => joinGuild(guild.id.toString(), user.id.toString())} variant="contained"
                      size="small" color="primary" className={classes.margin}>
                Rejoindre
              </Button>) : (
              <div></div>
            )}
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Typography>Chargement</Typography>
      )}
    </React.Fragment>
  );
}

export default GuildIfMember;