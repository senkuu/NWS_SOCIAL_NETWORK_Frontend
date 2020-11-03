export default async function fetchGuild(id: string) {
  const response = await fetch("https://localhost:5001/api/guilds/"+id);
  const responseJson = await response.json();
  
  return await responseJson;
}