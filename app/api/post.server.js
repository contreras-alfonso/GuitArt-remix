async function getPosts(){
    const url = process.env.API_URL+'/posts?populate=imagen'
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getPost(ruta){
    const url = process.env.API_URL+`/posts?filters[url]=${ruta}&populate=imagen`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export{
    getPosts,
    getPost,
}