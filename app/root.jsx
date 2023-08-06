import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import {
    Meta,Links, Outlet, Scripts, LiveReload, isRouteErrorResponse, useRouteError, 
} from '@remix-run/react'

import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'
import styleSpinner from '~/styles/spinner.css'
import styleFontawesome from '../public/fontawesome/css/all.css'

export function meta(){
    return [
        {charset: 'utf-8'},
        {title: 'GuitarLA - Remix'},
        {name: "viewport",content:"width=device-width,initial-scale=1.0"}
    ]
}


export function links(){
    return[
        // {
        //     rel: 'stylesheet',
        //     href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
        // },
        {
            rel:'stylesheet',
            href: styles,
        },
        {
            rel:'stylesheet',
            href: styleSpinner,
        },
        {
            rel:'stylesheet',
            href: styleFontawesome,
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true',
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900;9..40,1000&display=swap'

        },
    ]
}



export default function App(){


    const [carrito,setCarrito] = useState([]);

    // useEffect(()=>{
    //     const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []
    //     if(carritoLS.length){
    //         setCarrito(carritoLS);
    //     }
    // },[])

    // useEffect(()=>{
    //     localStorage.setItem('carrito',JSON.stringify(carrito))
    // },[carrito])
    

    const mensajeSwal = (mensaje,tipo) => {
        Swal.fire({
            position: 'center',
            icon: `${tipo}`,
            title: `${mensaje}`,
            showConfirmButton: false,
            timer: 3000
          })
    }


    const agregarCarrito = (guitarra) => {

        //validar si ya está agregado el producto al carrito

        const existeProducto = carrito.filter(e=>e.id === guitarra.id);
        
        //si existe el producto
        if(existeProducto.length){
            
            //validar si la cantidad del producto fue cambiada

            if(existeProducto[0].cantidad == guitarra.cantidad){
                mensajeSwal('El producto ya fue agregado al carrito anteriormente, con la misma cantidad.','error')
            }

            else{
                const nuevaListaCarrito = carrito.map(e=>{
                    if(e.id == existeProducto[0].id){
                        e = guitarra;
                    }
                    return e;
                })
                setCarrito(nuevaListaCarrito);

                mensajeSwal('El producto ya habia sido agregado al carrito, pero se modificó la cantidad.','info');
                

            }
            return;
        }

        setCarrito([...carrito,guitarra]);
        mensajeSwal('Producto agregado al carrito con éxito.','success');
    }

    const modificarCantidadCarrito = (producto,operacion) => {

        if(operacion=='disminuir'){
            const listaActualizada = carrito.map(e=>{
                if(e.id == producto.id){
                    if(e.cantidad >= 2){
                        e.cantidad -= 1; 
                    }
                }

                return e;
            })
            setCarrito(listaActualizada)
            return;
        }

        const listaActualizada = carrito.map(e=>{
            if(e.id == producto.id){
                if(e.cantidad <= 9){
                    e.cantidad += 1; 
                }
            }

            return e;
        })
        setCarrito(listaActualizada);
    }

    const eliminarProductoCarrito = (producto) => {
        const listaActualizada = carrito.filter(e=>e.id!==producto.id);
        setCarrito(listaActualizada);
    }

    return(
        <Document>
            <Outlet context={{
                agregarCarrito,
                carrito,
                modificarCantidadCarrito,
                eliminarProductoCarrito,
                mensajeSwal,
            }}></Outlet>
        </Document>
    )

}

function Document({children}){
    return(
        <html lang="es">
            <head>
               <Meta />
               <Links />
            </head>

            <body className='bg-zinc-950'>
                <Header></Header>
                {children}
                <Footer></Footer>

                <Scripts></Scripts>
                <LiveReload></LiveReload>
            </body>
        </html>
    )
}

/* Manejo de Errores */


export function ErrorBoundary(){
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
    return(
        <Document>
            <p className='font-black text-5xl text-center text-white mt-5'>{error.status} {error.statusText}</p>
        </Document>
    )
    }
}