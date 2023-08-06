import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { getGuitarras } from '~/api/guitarras.server'
import Guitarra from '~/components/guitarra';
import Spinner from '../components/spinner';

export function meta(){
  return[
    {title: 'Tienda | GuitArt'},
    {name: "viewport",content:"width=device-width,initial-scale=1.0"}
  ]
}

export async function loader(){
  const guitarras = await getGuitarras();
  return guitarras.data
}

const Tienda = () => {

  const guitarras = useLoaderData();


  return (



    <main>

      <h2 className='text-center font-black text-4xl md:text-6xl text-white my-10'>Nuestra Colección</h2>

      {guitarras.length && (
        <div className='  grid md:grid-cols-2 xl:grid-cols-3 gap-5 mx-5'>
            {guitarras.map(guitarra => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes}></Guitarra>
            ))}
        </div>
      )}
    </main>
  )
}

export default Tienda