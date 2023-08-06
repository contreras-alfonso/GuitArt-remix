import { Link } from "@remix-run/react"
const Guitarra = ({guitarra}) => {

    const {descripcion,nombre,imagen,precio,url} = guitarra

  return (
    <div className="bg-white flex max-md:flex-col py-5 px-5 rounded-lg">
        <img className="mx-auto md:w-1/3 max-md:h-56" src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} />

        <div className="flex flex-col gap-2 md:w-2/3 justify-between ">
            <h3 className="text-orange-400 font-black text-4xl text-center">{nombre}</h3>
            <p className="px-3 text-justify">{descripcion}</p>
            <p className="text-orange-400 font-black text-4xl px-3">${precio}</p>
            <Link className="border-2 border-black bg-black hover:border-orange-400 hover:bg-transparent hover:text-black  uppercase text-white font-black p-3 mt-5 text-center" to={`/guitarras/${url}`}>Ver Producto</Link>
        </div>
    </div>
  )
}

export default Guitarra