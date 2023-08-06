export async function getGuitarras(){
    const url = process.env.API_URL+'/guitarras?populate=imagen'
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function getGuitarra(nombreGuitarra){
    const url = `${process.env.API_URL}/guitarras?filters[url]=${nombreGuitarra}&populate=imagen`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}