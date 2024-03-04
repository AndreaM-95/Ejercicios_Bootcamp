import Footer from "../../Components/Footer/footer"

export default function Projects() {
  const projects = [
    {title:'To-Do', video:'https://www.youtube.com/embed/-jZfDHNgIY4?si=lgO3iNBNLMl5E4Us', tag1:'React', tag2:'Tailwind', tag3:'Jenkins', description:'Una sencilla aplicación que te permite crear, consultar, modificar y eliminar las tareas que tengas por hacer en el día', rol:'Front-End'},
    {title:'Ajiaco Apurado', video:'https://www.youtube.com/embed/nr-d2e3c--M?si=-HLZjn3DKzXogmmy', tag1:'Unity', tag2:'C#', tag3:'GGJ', description:'Mini juego o en el que los jugadores asumen el papel de un cocinero. La misión es generar ganancias antes de que se agote el tiempo del día.', rol:'Game programmer'},
    {title:'Exploración', video:'https://www.youtube.com/embed/PL-GPcL-GOo?si=VGWnBEkS5ChRwle4', tag1:'Unity', tag2:'C#', tag3:'PlayFab', description:'Mini juego de exploración con el objetivo de encontrar cinco ítems para lograr desbloquear un cofre.', rol:'Game programmer'}
  ]
    return (
      <div className="flex justify-center items-center bg-cover bg-center bg-fixed flex-col" style={{backgroundImage:"url(/Bg-Projects.jpg)"}}>
        <h1 className='text-center w-full text-white font-bold text-5xl my-7'>Algunos proyectos</h1>

        <section className='flex flex-wrap my-[30px] space-x-9 justify-center animate-fade'>
            {projects.map((item)=>(
              <div key = {item.title} className='p-4 flex flex-wrap bg-gray-900 bg-opacity-80 w-[28%] border-2 rounded-lg'>
                <h2 className="font-medium text-white mb-4 text-center w-full text-2xl">{item.title}</h2>
                <iframe width="560" height="315" src={item.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
                <div className="w-full flex gap-3 justify-center my-3">
                  <p className="w-[15%] bg-gray-700 text-white text-center semibold rounded py-1">{item.tag1}</p>
                  <p className="w-[15%] bg-gray-700 text-white text-center semibold rounded py-1">{item.tag2}</p>
                  <p className="w-[15%] bg-gray-700 text-white text-center semibold rounded py-1">{item.tag3}</p>
                </div>
                <p className="text-xl text-gray-400">{item.description}</p>
                <p className="text-lg text-gray-300">Rol: {item.rol}</p>
              </div>
            ))}  
        </section>

        <Footer/>
      </div>
    )
}