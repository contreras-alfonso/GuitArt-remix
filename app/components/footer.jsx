
const Footer = () => {
  return (
    <footer className="border-t border-white mt-10">
        <h1 className="text-gray-300 font-bold text-center text-xl py-5  mx-2">Todos los derechos reservados {new Date().getFullYear()}. <span className="text-orange-400 hover:text-white"><a href="https://github.com/contreras-alfonso?tab=repositories" target="_blank">By Lino <i className="fa-brands fa-github"></i></a></span></h1>
    </footer>
  )
}

export default Footer