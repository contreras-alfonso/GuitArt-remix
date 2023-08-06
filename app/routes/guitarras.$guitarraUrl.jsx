import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitarra } from "~/api/guitarras.server";
import Swal from 'sweetalert2'


export function meta({data}){
  if(!data){
    return [
      {title:'No encontrado | GuitArt'},
      {description: `Guitarras, venta de guitarras, guitarra no encontrada`}
    ]
  }
  return [
    {title:`${data.data[0].attributes.nombre} | GuitArt`},
    {description: `Guitarras, venta de guitarras, guitarra ${data.nombre}`}
  ]
}

export async function loader({params}){
  
  const { guitarraUrl } = params;

  const guitarra = await getGuitarra(guitarraUrl);

  if(guitarra.data.length===0){
    throw new Response('',{
      status:404,
      statusText: 'Guitarra no encontrada',
    })

  }

  return guitarra
}


const Guitarra = () => {

  const {agregarCarrito,mensajeSwal} = useOutletContext()

  const [ cantidad , setCantidad ] = useState(0);

  const guitarra = useLoaderData();

  const { nombre , descripcion, imagen , precio } = guitarra.data[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if(cantidad<1){
      mensajeSwal('Debe seleccionar una cantidad.','error')
      return;
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    }

    agregarCarrito(guitarraSeleccionada)


  }



  return (
    <main className="mx-3">
      <div className="transition hover:border-2 hover:border-orange-400 hover:border-dashed rounded-lg duration-300 container mx-auto sm:3/4 lg:w-2/4 mt-10">
        <div className="bg-white flex w-full items-center rounded-lg gap-3 transition hover:translate-x-3 hover:translate-y-3 py-5">
            <img className="w-1/3" src={imagen.data.attributes.url} alt={`imagen de la guitarra ${nombre}`} />
            <div className="flex flex-col gap-10 px-4 w-2/3">
              <h3 className="text-orange-400 font-black text-4xl text-center">{nombre}</h3>
              <p className="text-justify">{descripcion}</p>
              <p className="text-orange-400 font-black text-4xl">S/. {precio}</p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <p className="font-medium text-lg">Cantidad</p>
                <div className="flex max-sm:flex-col gap-3">
                  <select onChange={(e)=>{setCantidad(+e.target.value)}} className="border rounded-md py-3 px-4 sm:w-1/2 text-center bg-white">
                    <option className="text-center" value="0">-- Seleccione --</option>
                    <option className="text-center" value="1">1</option>
                    <option className="text-center" value="2">2</option>
                    <option className="text-center" value="3">3</option>
                    <option className="text-center" value="4">4</option>
                    <option className="text-center" value="5">5</option>
                    <option className="text-center" value="6">6</option>
                    <option className="text-center" value="7">7</option>
                    <option className="text-center" value="8">8</option>
                    <option className="text-center" value="9">9</option>
                    <option className="text-center" value="10">10</option>
                  </select>
                  <input className="sm:w-1/2 hover:cursor-pointer border border-orange-400 hover:border-black py-2" type="submit" value="Agregar al Carrito"/>
                </div>
              </form>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Guitarra