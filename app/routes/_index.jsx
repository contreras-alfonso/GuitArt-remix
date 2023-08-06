import { useLoaderData } from '@remix-run/react'
import {getGuitarras} from '~/api/guitarras.server'
import { getPosts } from '~/api/post.server'
import { Link } from '@remix-run/react'
import imageFondo from '../../public/img/fondo.jpg'

export function meta(){
  return [
    {title:'Inicio | GuitArt'}
  ]
}


function Index() {

  return (
    <main className='flex flex-col xl:flex-row xl:h-[calc(100vh-81px)] xl:items-center max-xl:py-12 gap-16
    '>
      <div className='xl:w-1/2 space-y-10 px-10'>
          <h1 className='text-white font-black text-6xl max-sm:text-5xl'>Descubre el sonido de tus sueños: <span className='text-red-600'>Explora, Aprende y Encuentra</span> tu Guitarra Perfecta en Nuestro Blog y Tienda.</h1>
          <p className='text-xl text-white max-sm:text-lg'>Sumérgete en el apasionante mundo de las guitarras: Encuentra inspiración, perfecciona tu técnica y elige tu compañera de acordes. Únete a nosotros para explorar artículos, consejos y la mejor selección de guitarras en nuestra tienda virtual. Tu viaje hacia el dominio de las seis cuerdas comienza aquí.</p>
          <div className='flex gap-5 max-sm:flex-col items-center justify-center'>
            <Link className='max-sm:w-full w-1/2 border-2 border-white text-white py-3 px-5 hover:border-orange-400 text-center font-bold text-lg' to='/blog'>Blog</Link>
            <Link className='max-sm:w-full w-1/2 text-white border-2 border-orange-400 hover:border-white py-3 px-5 text-center font-bold text-lg hover:bg-transparent' to='/tienda'>Visitar tienda</Link>
          </div>
      </div>

      <div className='xl:w-1/2 px-10 bg-black bg-opacity-10 py-10 max-xl:hidden'>
          <img className='rounded-lg' src={imageFondo} alt="imagen - fondo" />
      </div>
    </main>
  )
}

export default Index