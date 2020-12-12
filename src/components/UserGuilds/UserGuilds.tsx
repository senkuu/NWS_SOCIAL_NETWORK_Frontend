import { createStyles, ListItemText, makeStyles, Theme } from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageIcon from '@material-ui/icons/Image';

import fetchUserGuilds from "services/Users/fetchUserGuilds";
import { Guild } from "types/guilds";

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
   })
);    

function UserGuilds() {
    //A changer quand le system d'authentification sera oppérationnel
    let { id } : any = useParams();
    const classes = useStyles();
    //
    const [guildsList, setGuildsList] = useState<Guild[]>([]);
    useEffect(() => {
      fetchUserGuilds(id)
        .then((guilds) => setGuildsList(guilds))
        .catch((e) => console.error(e));
    }, []);
    

return(
    <React.Fragment>
        {guildsList.length > 0 ? (
        guildsList.map((guilds) => 
        <Typography key={guilds.id}>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={guilds.name} secondary={guilds.description} />
              
              <Link to={`/guild/${guilds.id}`}>voir guilde</Link>
            </ListItem>
          </List>
        </Typography>
        ) 
        ) : (   
        <Typography>Vous n'etes dans aucune guildes</Typography>
        )}
    </React.Fragment>
);
}


export default UserGuilds; 