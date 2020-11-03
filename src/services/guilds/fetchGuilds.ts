export default async function fetchGuilds() {
  const response = await fetch("https://localhost:5001/api/guilds");
  const responseJson = await response.json();

  return await responseJson;
}