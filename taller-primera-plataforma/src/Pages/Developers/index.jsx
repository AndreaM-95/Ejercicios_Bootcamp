import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../../Components/Footer/footer';

export default function Developers() {
  const data = [
    {
      img: `../src/assets/Photos/perfil-brais.png`, 
      name: 'BRAIS MOURE',
      area: 'Desarrollo web y aplicaciones',
      review: 'Soy un informático freelance emprendedor y amante de la tecnología. He trabajado en grandes empresas del sector como Inditex, Indra o Altia. Ocupando mis 3 últimos años, antes de establecerme como freelance, como Arquitecto de Software del área de Logística-Comercial de Inditex. En 2014 decido crear mi propia empresa de desarrollo de software, MoureDev, dado mi profundo interés por las nuevas tendencias del sector.',
      urlLinkedin: 'https://www.linkedin.com/in/braismoure/',
      urlYouTube: 'https://www.youtube.com/@mouredev',
      urlTwitter: 'https://twitter.com/mouredev'
    },
    {
      img: `../src/assets/Photos/perfil-Luis.png`, 
      name: 'LUIS CANARY', 
      area: 'Desarrollo de videojuegos',
      review: 'Los VIDEOJUEGOS son mi PASION!! En este canal aprenderás a crear tus propios Videojuegos con Unity, Unreal Engine y Godot a través de tutoriales prácticos y sencillos para todas y todos aquellos que quieran aprender sobre el Desarrollo de Videojuegos,  asique ¡ A DARLE CAÑA !',
      urlLinkedin: 'https://luiscanary.wixsite.com/luiscanary',
      urlYouTube: 'https://www.youtube.com/@LuisCanary',
      urlTwitter: 'https://twitter.com/luiscanary'
    },
    {
      img: `../src/assets/Photos/perfil-Miguel.png`, 
      name: 'MIGUEL ÁNGEL DURÁN GARCÍA', 
      area: 'Desarrollo web y aplicaciones',
      review: 'Empecé en la programación trasteando con Locomotive BASIC con un Amstrad CPC 464 que me regaló mi padre. Así empecé mis años de autodidacta, devorando libros y tutoriales que iba encontrando. Años más tarde cursé la Ingenieria Técnica de Informática de Gestión en la UOC. Y, desde entonces, no he parado ni un momento para seguir trabajando como desarrollador y seguir aprendiendo.',
      urlLinkedin: 'https://www.linkedin.com/in/midudev/',
      urlYouTube: 'https://www.youtube.com/c/midudev',
      urlTwitter: 'https://twitter.com/midudev'
    }
  ];

  const settings = {
    dots:true,
    infinity:true,
    speed: 2000,
    slideToShow: 3,
    slideToScroll:1
  };

  const OpenPage =(urlPag)=>{
    window.open(urlPag, '_target');
  }

  return (
    <div  className="flex justify-center items-center bg-cover bg-center bg-fixed flex-col" style={{backgroundImage:"url(/Bg-Projects.jpg)"}}>
      <h1 className='text-center w-full text-white font-bold text-5xl my-7'>Devs Favoritos</h1>

      <div className='w-[600px] m-auto animate-fade-up'>
        <Slider {...settings} className='bg-gray-900 bg-opacity-95 border-2 rounded-lg my-8 rounded-xl p-5'>
          {data.map((d)=>(
            <>
              <div key={d.name}>
                <img src={d.img} alt='' className='h-56 w-56 rounded-full my-auto mx-auto'></img>
              </div>

              <div className='flex flex-col item-center justify-center gap-5 p-5'>
                <p className='text-2xl font-semibold text-white text-center'>{d.name}</p>
                <p className='text-2xl italic text-gray-400 underline text-center'>{d.area}</p>
                <p className='text-center text-lg  text-gray-300 text-justify	px-4'>{d.review}</p>
              </div>

              <div className='flex gap-5 justify-center mb-8'>
                <button className='bg-gray-600 font-bold py-3 rounded text-white hover:bg-gray-200 hover:scale-105 hover:text-black w-[100px]' onClick={()=>OpenPage(d.urlLinkedin)}>Linkedin</button>
                <button className='bg-gray-600 font-bold py-3 rounded text-white hover:bg-gray-200 hover:scale-105 hover:text-black w-[100px]' onClick={()=>OpenPage(d.urlYouTube)}>YouTube</button>
                <button className='bg-gray-600 font-bold py-3 rounded text-white hover:bg-gray-200 hover:scale-105 hover:text-black w-[100px]' onClick={()=>OpenPage(d.urlTwitter)}>Twitter</button>
              </div>
            </>
          ))}
        </Slider>
      </div>

      <Footer/>
    </div>
  )
}