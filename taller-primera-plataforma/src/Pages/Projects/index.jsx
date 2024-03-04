import Footer from "../../Components/Footer/footer"
import Proyectos from "../../Components/Proyectos/Proyectos"

export default function Projects() {
    return (
      <div className="flex justify-center items-center bg-cover bg-center bg-fixed flex-col" style={{backgroundImage:"url(/Bg-Projects.jpg)"}}>
        <h1 className='text-center w-full text-white font-bold text-5xl my-7'>Algunos proyectos</h1>
        <Proyectos/>
        <Footer/>
      </div>
    )
}