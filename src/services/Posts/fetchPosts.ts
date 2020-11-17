export default async function fetchUserGuilds(id: string) {
    const response = await fetch("https://localhost:5001/api/posts/"+ id);
    const responseJson = await response.json();
  
    return await responseJson;
  }