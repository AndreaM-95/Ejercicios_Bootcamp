//import { useRoutes } from 'react-router-dom'
/*import Table from '../../Components/Table.jsx'*/
import Developers from '../Developers'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css'


function App() {
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
    <>
      <h1 className='font-bold text-4xl text-amber-900 my-7'>MY FAVORITE DEVELOPERS</h1>
      
      <div className='w-[450px] m-auto'>
        <div className='mt-30'>
          <Slider {...settings} className='bg-orange-200 my-8 rounded-xl p-5 shadow-lg shadow-indigo-900/60'>
            {data.map((d)=>(
              <>
                <div key={d.name}>
                  <img src={d.img} alt='' className='h-56 w-56 rounded-full my-auto mx-auto'></img>
                </div>

                <div className='flex flex-col item-center justify-center gap-5 p-5'>
                  <p className='text-2xl font-semibold text-amber-700'>{d.name}</p>
                  <p className='text-center text-lg italic font-semibold text-orange-500 underline'>{d.review}</p>
                  <button className='bg-amber-800 font-bold py-3 px-4 my-4 rounded text-white hover:bg-amber-600 hover:scale-105' onClick={()=>OpenPage(d.urlTutorials)}>My Tutorials</button>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>

      <Developers/>
    </>
  )
}

const data = [
  {
    img: `../src/assets/Photos/perfil-brais.png`, 
    name: 'BRAIS MOURE', 
    review: 'Developer',
    urlTutorials: 'https://www.youtube.com/@mouredev'
  },
  {
    img: `../src/assets/Photos/perfil-Luis.png`, 
    name: 'LUIS CANARY', 
    review: 'Game Developer',
    urlTutorials: 'https://www.youtube.com/@LuisCanary'
  },{
    name: 'MIGUEL ANGEL DURAN', 
    img: `../src/assets/Photos/perfil-Miguel.png`, 
    review: 'Developer',
    urlTutorials: 'https://www.youtube.com/c/midudev'
  }
];

export default App;