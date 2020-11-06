export default async function fetchUserGuilds(id: string) {
    const response = await fetch("https://localhost:5001/api/users/"+ id +"/guilds");
    const responseJson = await response.json();
  
    return await responseJson;
  }