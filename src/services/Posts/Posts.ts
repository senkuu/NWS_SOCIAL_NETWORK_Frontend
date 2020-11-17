export async function newPosts(title: string, text: string){

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({Title: title, Text: text})
    };

    const response = await fetch('https://localhost:5001/api/posts', requestOptions);
    const data = await response.json();
}