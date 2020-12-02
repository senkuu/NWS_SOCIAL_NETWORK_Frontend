export async function joinGuild(idGuild: string, idUser: string){

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({Userid: idUser})
    };

    const response = await fetch('https://localhost:5001/api/Guilds/'+idGuild + '/users', requestOptions);
    const data = await response.json();
}

export async function getStatusUser(idGuild: string, idUser: string){
    var status = "Admin";
    return status
}
