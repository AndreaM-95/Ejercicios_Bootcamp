import Descripcion from '../../Components/Descripcion/Descripcion';
import Experiencia from '../../Components/Experiencia/Experiencia';
import Footer from '../../Components/Footer/footer';
import Formacion from '../../Components/Formacion/Formacion';
import Skills from '../../Components/Skills/Skills';

export default function AboutMe() {
  return (
    <div className="flex justify-center items-center bg-cover bg-center bg-fixed flex-col" style={{backgroundImage:"url(/Backg.jpg)"}}>
      <Descripcion/>
      <Experiencia/>
      <Formacion/>
      <Skills/>
      <Footer/>
    </div>
  )
}