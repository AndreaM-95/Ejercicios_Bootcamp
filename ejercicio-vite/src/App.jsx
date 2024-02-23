import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [catFact, setCatFat] = useState('');
  const [catImageUrl, setCatImageUrl] = useState('');

  //Define un efecto que se ejecuta después de que el componente se haya renderizado
  useEffect(() =>{
    const fetchCatFact = async() => {   //Solicitud a la Api
      try{
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        setCatFat(data.fact);
      } catch(error){               //Si nos surge un error
        console.error(error);
      }
    };
    
    fetchCatFact();
  }, []);      //El array vacío dice que se ejecutará sólo una vez

  //Define un efecto que se ejecuta cada vez que catFat cambia
  useEffect(()=>{
    if(catFact){         //Si catFact no está vacío
      const generateCatImage = async()=>{
        try{
          const firstWord = catFact.split(' ', 3).join(' ');                              //Obtendrá las tres primeras palabras
          const response = await fetch(`https://cataas.com/cat/says/${firstWord}`);       //Solicitud al servidor para obtener la imágen del gato

          if(response.ok){
            const data = await response.blob();                                           //Represanta datos binarios como imágenes
            const imageUrl = URL.createObjectURL(data);
            setCatImageUrl(imageUrl);
          }else{
            console.error("Error fetching cat image: " + response.statusText);
          }
        }catch(error){
          console.error(error);
        }
      };
      generateCatImage();
    }
  }, [catFact]);        //Este efecto se sejecutará cada vez que catFact cambie

  return(
    <section className="md:flex bg-sky-700 rounded-xl p-8 md:p-0 dark:bg-slate-800 font-serif shadow-lg shadow-indigo-900/60">
      {catImageUrl && (<img src={catImageUrl} alt="random cat" className="w-24 h-24 md:w-48 md:h-auto md:rounded rounded-full mx-auto"/>)}
      <div className='pt-6 md:p-8 text-center space-y-4'>
        <h1 className="text-3xl font-bold underline text-lime-400">Random Cat Fact</h1>
        {catFact && <p className='text-lg text-base text-lime-100'>{catFact}</p>}     {/* Si catFact no está vacío */}
        {catImageUrl && <p className='text-cyan-100 italic text-xs'>Image generated based on the first word of the fact.</p>}
      </div>
    </section>
  );
}

export default App