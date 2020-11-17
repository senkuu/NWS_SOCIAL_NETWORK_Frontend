import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import fetchUserGuilds from "services/Users/fetchUserGuilds";
import { Guild } from "types/guilds";

    

function UserGuilds() {
    //A changer quand le system d'authentification sera oppérationnel
    let { id } : any = useParams();
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
        guildsList.map((guilds) => <div> <div>{guilds.id}</div><div>{guilds.name}</div></div>
       ) 
        ) : (   
        <Typography>Vous n'etes dans aucune guildes</Typography>
        )}
    </React.Fragment>
);
}


export default UserGuilds; 