export async function joinGuild(idGuild: string, idUser: string) {

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({Userid: idUser})
  };

  const response = await fetch('https://localhost:5001/api/Guilds/' + idGuild + '/users', requestOptions);
  const data = await response.json();
}


export async function getUserGuildStatus(idGuild: string) {

  const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  };

  const response = await fetch('https://localhost:5001/api/users/' + idGuild + '/guilds', requestOptions);
  const data = await response.json();

}

export async function getGuildUserList(idGuild: string) {

  const response = await fetch('https://localhost:5001/api/Guilds/' + idGuild + '/users');
  const data = await response.json();
  console.log(data);
  return await data
}

export async function NewGuild(nom: string, description: string) {
  var nom = nom;
  var description = description;

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: nom,
      description: description
    })
  };

  const response = await fetch('https://localhost:5001/api/Guilds/', requestOptions);
  const data = await response.json();
}

export async function setUserGuildStatus(idGuild: string, idUser: string) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({userId: idUser, guildId: idGuild})
  };

  const response = await fetch('https://localhost:5001/api/Guilds/validate', requestOptions);
  const data = await response.json();
  return await data
}

export async function deleteUserGuild(idGuild: string, idUser: string) {
  const requestOptions = {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
  };

  await fetch('https://localhost:5001/api/Guilds/' + idGuild + '/users/' + idUser, requestOptions);
}
