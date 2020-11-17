export default async function fetchPosts() {
    const response = await fetch("https://localhost:5001/api/posts/");
    const responseJson = await response.json();
  
    return await responseJson;
  }