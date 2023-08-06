import { Link } from "@remix-run/react";
import { formatearFecha } from "~/utils/helpers";

const Post = ({post}) => {

    const {titulo, contenido, imagen, url, publishedAt} = post;
  return (
    <article className="bg-white rounded-lg flex flex-col justify-between">
        <img src={imagen.data.attributes.formats.medium.url} alt={`imagen blog ${titulo}`} />
        <div className="flex flex-col gap-4 px-3 py-5">
            <h3 className="text-3xl font-black text-center">{titulo}</h3>
            <p className="font-black text-orange-400 ">{formatearFecha(publishedAt)}</p>
            <div className="flex flex-col justify-between ">
                <p className="text-justify overflow-hidden line-clamp-5">{contenido}</p>
                <Link className="border-2 border-black bg-black hover:border-orange-400 hover:bg-transparent hover:text-black  uppercase text-white font-black p-3 mt-5 text-center" to={`/posts/${url}`}>Leer Post</Link>
            </div>
        </div>
    </article>
  )
}

export default Post