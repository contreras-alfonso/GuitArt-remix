import { Link, useLocation } from "@remix-run/react"
import logo from '../../public/img/logo.svg'

const Header = () => {

    const location = useLocation();
    
  return (
    <header className="bg-zinc-950 border-b p-5 sticky">
        <div className="flex max-md:flex-col md:justify-between items-center max-md:gap-4">

            <Link to='/'>
                <h1 className="font-black text-white text-4xl">Guit<span className="text-orange-400">Art </span></h1>
            </Link>

            <nav className="flex md:gap-10 max-md:w-full max-md:justify-between">
                <Link className={`text-gray-300 font-semibold hover:opacity-100 text-lg hover:text-orange-400 ${location.pathname==='/' && 'text-orange-400'}`} to="/">Inicio</Link>
                <Link className={`text-gray-300 font-semibold hover:opacity-100 text-lg hover:text-orange-400 ${location.pathname==='/nosotros' && 'text-orange-400'}`} to="/nosotros">Nosotros</Link>
                <Link className={`text-gray-300 font-semibold hover:opacity-100 text-lg hover:text-orange-400 ${location.pathname=='/tienda' && 'text-orange-400'}`} to="/tienda">Tienda</Link>
                <Link className={`text-gray-300 font-semibold hover:opacity-100 text-lg hover:text-orange-400 ${location.pathname==='/blog' && 'text-orange-400'}`} to="/blog">Blog</Link>
                <Link className={`text-gray-300 font-semibold hover:opacity-100 text-lg hover:text-orange-400 ${location.pathname==='/carrito' && 'text-orange-400'}`} to="/carrito"><i className="fa-regular fa-cart-shopping"></i></Link>
            </nav>
        </div>
    </header>
  )
}

export default Header