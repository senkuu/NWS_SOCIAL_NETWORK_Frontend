import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

import fetchGuilds from "services/guilds/fetchGuilds";
import { Guild } from "types/guilds";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import {Link, LinkProps} from 'react-router-dom'

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
   })
);

function ListGuilds() {
    const [guildsList, setGuildsList] = useState<Guild[]>([]);
    const classes = useStyles();
    useEffect(() => {
      fetchGuilds()
        .then((guilds) => setGuildsList(guilds))
        .catch((e) => console.error(e));
    }, []);
    
    return (
      <React.Fragment>
        <Typography variant="h3" className={classes.title} >Liste des guildes</Typography>
        
        {guildsList.length > 0 ? (
          guildsList.map((guild) => <Typography key={guild.id}>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={guild.name} secondary={guild.description} />
              <Link to={`/guild/${guild.id}`}>test</Link>
            </ListItem>
          </List>
        </Typography>)
          ) : (
            <Typography>Chargement</Typography>
          )}
      </React.Fragment>
    );
}

export default ListGuilds;