export default async function fetchPosts(id: string) {
    const response = await fetch("https://localhost:5001/api/posts/"+ id);
    const responseJson = await response.json();
  
    return await responseJson;
  }