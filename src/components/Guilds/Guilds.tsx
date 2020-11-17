import React, { useEffect, useState, useContext } from "react";

import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import fetchGuild from "services/guilds/fetchGuild";
import { Guild } from "types/guilds";
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
import NavBar from "components/NavBar";


// import contexts
import { UserContext } from "services/contexts/UserContext";
import { joinGuild } from "services/guilds/guilds";
import Button from "@material-ui/core/Button";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

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
      margin:'auto'
    },
    tabs: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  
   })
);

function Guilds(){
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const  {user}  = useContext(UserContext);
  console.log(user)
  let { id } : any = useParams();
  const [guild, setGuild] = useState<Guild>();
  const classes = useStyles();
  useEffect(() => {
    fetchGuild(id)
      .then((guild) => setGuild(guild))
      .catch((e) => console.error(e));
  }, []);
    
  console.log(guild)

  if (user) {
    var status = ""
    if(status == "Admin"){
      return( 
        <React.Fragment>
          <NavBar />
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
                <h1>GESTION ADMIN</h1>
              </TabPanel>
            </div>
            ) : (
              <Typography>Chargement</Typography>
            )}
        </React.Fragment>
        );
    }

    if(status == "Membre"){
      return( 
        <React.Fragment>
          <NavBar />
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

    return( 
    <React.Fragment>
      <NavBar />
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
         <Button onClick={() => joinGuild(guild.id.toString(), user.id.toString())} variant="contained" size="small" color="primary" className={classes.margin}>
                 Rejoindre
         </Button>
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


return( 
  <React.Fragment>
    <NavBar />
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
export default Guilds;
