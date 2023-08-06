import { Link } from '@remix-run/react'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'

export function meta(){
  return [
    {title:'Carrito | GuitArt'}
  ]
}

const Carrito = () => {

  const {carrito,modificarCantidadCarrito,eliminarProductoCarrito} = useOutletContext();

  const calcularTotal = (carrito) => {
    const total = carrito.reduce((acumulador,producto)=>(acumulador + producto.cantidad * producto.precio),0);
    return total;
  }

  return (

    <ClientOnly fallback={'cargando...'}>
      {()=>(
    <main>


      {carrito?.length !=0 ? (
      <>
        <h1 className='text-center font-black text-4xl md:text-6xl text-white my-10'>Carrito de Compras</h1>

      <div className='flex max-md:flex-col gap-5 lg:w-3/4 mx-auto px-3'>
        <div className='md:w-3/5'>
          
          <h2 className='font-bold text-3xl text-white mb-5'>Articulos</h2>

          
            {carrito?.map(e=>{
              return(
                <div key={e.id} className='bg-white flex  gap-3 rounded-lg p-4 justify-between items-center mb-3'>

                      <img className='w-20' src={e.imagen} alt={`imagen guitarra ${e.nombre}`} />
                  
                    <div>
                        <div className='space-y-2'>
                            <p className='font-bold text-lg'>Guitarra {e.nombre}</p>
                            <p className='text-xs'>Vendido por GuitArt</p>
                            <p className='bg-slate-200 w-fit rounded-sm px-2 font-bold text-xs text-gray-700'>Envío gratis</p>
                            <p className='font-bold text-lg'>S/ {e.precio}</p>
                        </div>
                    </div>


                    <div className='space-y-2'>
                      <div className='flex gap-4 items-center'>
                          <button onClick={()=>{modificarCantidadCarrito(e,'disminuir')}} className='rounded-sm bg-slate-600 text-white py-1 px-4 hover:bg-slate-500'>-</button>
                          <p className={e.cantidad == 10 ? 'text-red-500' : ''}>{e.cantidad}</p>
                          <button onClick={()=>{modificarCantidadCarrito(e,'aumentar')}}  className='rounded-sm bg-slate-600 text-white py-1 px-4 hover:bg-slate-500'>+</button>
                      </div>
                      <p className='text-xs text-center'>Máximo 10 unidades</p>

                      <button onClick={()=>eliminarProductoCarrito(e)} className='border border-red-500 text-black text-center w-full rounded-lg text-sm py-1 font-medium hover:text-white hover:bg-red-400'>Eliminar</button>
                    </div>
                </div>
              )
            })}
          

        </div>
        <aside className='md:w-2/5'>
        <h3 className='font-bold text-3xl text-white mb-5'>Resumen de la orden</h3>
          <div className=' bg-white space-y-2 p-5 rounded-lg'>
            <div className='space-y-2'>
              <p className='text-xs'>Envio a domicilio no incluido</p>
              <div className='flex justify-between'>
                <p className='text-lg font-bold text-gray-600'>Productos ({carrito.length})</p>
                <p className='text-lg font-bold text-gray-600'>S/ {calcularTotal(carrito)}</p>
              </div>
              <div className='flex justify-between'>
                <p className='font-bold text-gray-600'>Total:</p>
                <p className='font-bold text-gray-600'> S/ {calcularTotal(carrito)}</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
      </>
    ): (
      <div className='flex flex-col md:w-2/4 gap-5 md:mx-auto mx-3 p-5 rounded-lg mt-10 bg-zinc-900'>
        <p className='text-center font-black text-6xl text-white'>Tu carrito está vacío</p>
        <p className='text-center text-white text-4xl'><i className="fa-solid fa-cart-circle-exclamation"></i></p>
        <p className='text-center text-lg text-white'>Tenemos muchas ofertas y oportunidades únicas, ¿te las vas a perder?</p>
        <Link className='py-2 border text-white font-medium border-orange-400 text-center hover:border-white' to='/tienda'>Ir a la Tienda{'...'} <i className="fa-solid fa-arrow-pointer"></i></Link>
      </div>
    )}
      

    </main>
      )}
    </ClientOnly>
  )
}

export default Carrito