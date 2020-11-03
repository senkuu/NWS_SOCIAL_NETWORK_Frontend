import React, { useEffect, useState } from "react";

import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import fetchGuild from "services/guilds/fetchGuild";
import { Guild } from "types/guilds";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ImageIcon from '@material-ui/icons/Image';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';




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

function Guilds(){
   
  let { id } = useParams();
  const [guild, setGuild] = useState<Guild>();
  const classes = useStyles();
  useEffect(() => {
    fetchGuild(id)
      .then((guild) => setGuild(guild))
      .catch((e) => console.error(e));
  }, []);
    
  console.log(guild)

return( <React.Fragment>
    {guild !== undefined ? (
     <Typography key={guild.id}>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={guild.name} secondary={guild.description} />
        </ListItem>
      </List>
    </Typography>
      ) : (
        <Typography>Chargement</Typography>
      )}
  </React.Fragment>
  );
}
export default Guilds;
