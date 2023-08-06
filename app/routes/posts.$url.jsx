import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/api/post.server"
import { formatearFecha } from '~/utils/helpers'

export function meta({data}){
    return [
        {title:`${data.titulo} | GuitarLA`},
        {name: "viewport",content:"width=device-width,initial-scale=1.0"}
    ]
}

export async function loader({request,params}){
    const post = await getPost(params.url);
    if(post.data.length===0){
        throw new Response('',{
            status:404,
            statusText: 'Entrada no encontrada'
        })
    }
    return post.data[0].attributes
}

const PostUrl = () => {

    const post = useLoaderData();
    
    const {titulo, contenido, imagen, publishedAt} = post

  return (
    <article className="bg-white rounded-lg flex flex-col justify-between lg:w-3/4 mt-10 max-md:w-11/12 mx-auto">
        <img src={imagen.data.attributes.formats.medium.url} alt={`imagen blog ${titulo}`} />
        <div className="flex flex-col gap-4 p-10">
            <h3 className="text-3xl font-black text-center">{titulo}</h3>
            <p className="font-black text-orange-400 text-lg">{formatearFecha(publishedAt)}</p>
            <p className="text-justify text-lg whitespace-pre-wrap">{contenido}</p>
        </div>
    </article>
  )
}

export default PostUrl