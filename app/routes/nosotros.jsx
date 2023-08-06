import imagen from '../../public/img/nosotros.jpg'

export function meta(){
  return[
    {title:'Nosotros | GuitArt'},
    {description: 'Venta de guitarras, blog de música'}
  ]
}

const Nosotros = () => {
  return (
    <main className="container mx-auto">
      <h2 className='text-center font-black text-4xl md:text-6xl text-white my-10'>Nosotros</h2>
      <div className='space-y-10 max-md:mx-4'>
          <div className=''>
            <img className='mx-auto rounded-lg' src={imagen} alt="imagen nosotros" />
          </div>

          <div className='mx-5'>
            <p className='text-justify text-white text-lg whitespace-pre-wrap'>Aenean porta volutpat imperdiet. Vivamus ac purus aliquet, aliquet odio sed, placerat ante. Vestibulum sollicitudin ex faucibus, euismod dui sit amet, venenatis nunc. Proin vitae sem at ipsum luctus finibus. Sed lobortis nec elit at feugiat. Nullam sagittis a justo non maximus. Integer tincidunt molestie tincidunt. Curabitur mi sem, maximus eu luctus non, gravida sed diam. Maecenas consectetur augue quis blandit dapibus. Aliquam sit amet lectus in ante interdum gravida. Nulla vel lorem quis ipsum efficitur pellentesque sit amet et massa. Phasellus vestibulum laoreet metus, sit amet interdum lacus consequat a.

            Donec consequat lectus a egestas finibus. Ut posuere sollicitudin orci, blandit consectetur arcu blandit ac. Aenean libero nulla, euismod eget vulputate vitae, dignissim sit amet risus. Quisque tortor diam, volutpat maximus bibendum quis, dignissim ut tortor. Aliquam placerat turpis iaculis turpis blandit posuere. Ut sagittis, neque varius elementum luctus, metus nibh ultricies tortor, ac pulvinar ligula libero eu odio. Suspendisse semper elit turpis, non pulvinar lacus rhoncus at. Sed fringilla purus nunc, feugiat pulvinar mauris malesuada sit amet. Fusce auctor nisl vel imperdiet dignissim. Aliquam id ipsum enim.</p>
          </div>
      </div>
    </main>
  )
}

export default Nosotros