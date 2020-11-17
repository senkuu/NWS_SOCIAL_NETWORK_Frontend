export async function joinGuild(idGuild: string, idUser: string){

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({Userid: idUser, GuildId: idGuild})
    };

    const response = await fetch(idGuild + '/users', requestOptions);
    const data = await response.json();
}