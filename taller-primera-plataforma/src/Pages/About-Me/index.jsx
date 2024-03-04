import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Components/Footer/footer';

export default function AboutMe() {
  const hardSkills = [
    {hard: 'Unity'},
    {hard: 'C#'},
    {hard: 'React'},
    {hard: 'Javascript'},
    {hard: 'Html'},
    {hard: 'Css'},
    {hard: 'Bootstrap'},
    {hard: 'Tailwind'},
    {hard: 'Next js'},
    {hard: 'Git/Github'},
    {hard: 'Ilustrator'},
    {hard: 'Blender'}
  ];

  const softSkills = [
    {soft: 'Empatía'},
    {soft: 'Liderazgo'},
    {soft: 'Comunicación'},
    {soft: 'Adaptabilidad'},
    {soft: 'Trabajo en equipo'},
    {soft: 'Persistencia'},
    {soft: 'Gestión del tiempo'},
    {soft: 'Orientación al futuro'},
    {soft: 'Orientación al detalle'},
    {soft: 'Mentalidad de crecimiento'}
  ];

  const experiencia = [
    {cargo: 'Programador de videojuegos web', empresa: 'Books & Books Ltda', tiempo: '8 meses',descripción: 'Participé en la elaboración de simuladores interactivos 3D con el motor de Unity en donde cree el simulador de televisión y radio. Realicé la programación de todas las mecánicas con C# y/o javascript, la integración de la UI, audio, efectos especiales; también realicé la creación de todos los entornos de las 6 escenas que cada simulador contiene.'},

    {cargo: 'Modelador 3D', empresa: 'Workobot', tiempo: '3 meses',descripción: 'Realicé el modelado de edificios y otros elementos arquitectónicos en donde hice uso de la herramienta 3DMax para modelar todos los volumes que el proyecto requería, y el motor gráfico de Unity en donde se integraban los .fbx creados.'},
  ];

  const estudios = [
    {titulo: 'Desarrollo web full Stack', fecha: 'En proceso', institucion: 'Cimetrya'},
    {titulo: 'Desarrollador jr en unity', fecha: '2022-2023', institucion: 'Generation'},
    {titulo: 'Diplomado en aplicaciones web', fecha: '2022', institucion: 'Universidad tecnológica de Pereira'},
    {titulo: 'Diplomado en desarrollo de software', fecha: '2022', institucion: 'Universidad tecnológica de Pereira'},
    {titulo: 'Front End', fecha: '2022', institucion: 'Oracle + Alura latam'},
    {titulo: 'Tecnólogo en procesamiento de alimentos', fecha: '2020-2022', institucion: 'Sena'}
  ];

    return (
      <div className="flex justify-center items-center bg-cover bg-center bg-fixed flex-col" style={{backgroundImage:"url(/Backg.jpg)"}}>

        <div className='bg-gray-900 bg-opacity-90 mt-5 flex flex-wrap items-center justify-center py-5'>
          <h1 className='text-center w-full text-white font-bold text-5xl'>Andrea Mejia</h1>
          <img src="./public/Mi Foto.jpg" className="w-[15%] rounded-full"></img>
          <p className="p-8 text-gray-400 w-[42%] ml-4 text-lg">
            Estoy formada como desarrolladora de sofware junior en la Universidad Tecnológica de Pereira y Alura Latam. Empecé mi trayectoria profesional con el procesamiento de alimentos. Hice parte del primer grupo en Colombia del programa Desarrollador Jr en Unity realizado por Generation y Unity donde tuve la oportunidad de presentarme en diferentes jams y crear diversos juegos.
            <br></br>
            Referente al desarrollo de software, como Front end, también he podido programar diferentes plataformas con distintos lenguajes de programación, dichos proyectos los pueden visualizar en la sección de proyectos pero mencionando algunos que me llenan de orgullo son los videojuegos Mystical World, Rescue at sea, y las páginas Rescatando patitas y Tocando el alma.
          </p>
        </div>

        
        
        <section className='flex flex-wrap mt-[30px] space-x-9 justify-center'>
          <h2 className='text-white bold w-full text-center py-4 text-4xl font-bold'>Experiencia laboral</h2>
            {experiencia.map((row)=>(
              <div key = {row.hard} className='p-4 flex flex-wrap bg-gray-900 bg-opacity-80 w-[28%] border-2 rounded-lg'>
                <h2 className="font-medium text-white mb-4 text-center w-full text-2xl">{row.cargo}</h2>
                <h3 className='text-gray-200 w-full text-center text-xl'>{row.empresa}</h3>
                <h4 className='text-gray-300 w-full text-center text-xl'>{row.tiempo}</h4>
                <p className='text-gray-400 text-lg'>{row.descripción}</p>
              </div>
            ))}  
        </section>

        <section className='flex flex-wrap mt-[30px] space-x-4 space-y-4 justify-center bg-gray-900 bg-opacity-90 pb-6'>
          <h2 className='text-white bold w-full text-center py-4 text-3xl font-bold'>Formación</h2>
            {estudios.map((row)=>(
              <div key = {row.titulo} className='p-4 flex flex-wrap  w-[25%] border-2 rounded-lg'>
                <h2 className="font-medium text-white mb-4 text-center w-full text-2xl">{row.titulo}</h2>
                <h3 className='text-gray-200 w-full text-center text-xl'>{row.institucion}</h3>
                <h4 className='text-gray-300 w-full text-center text-lg'>{row.fecha}</h4>
                <img className='' src={row.img}/>
              </div>
            ))}  
        </section>

        <section className="text-gray-400 w-full mt-[30px] flex m-auto space-x-9 justify-center">
          <div className="p-4 flex flex-wrap bg-gray-900 bg-opacity-80 w-[20%] border-2 rounded-lg">
            <h2 className="font-medium  text-white mb-4 text-2xl text-center w-full">Hard Skills</h2>
              {hardSkills.map((row)=>(
                <a key = {row.hard} className="w-full text-lg">
                    <FontAwesomeIcon icon={faCircleCheck} className='icon mr-2'/>
                    {row.hard}
                </a>
              ))}
          </div>

          <div className="p-4 flex flex-wrap bg-gray-900 bg-opacity-80 w-[20%] border-2 rounded-lg">
            <h2 className="font-medium  text-white mb-4 text-2xl text-center w-full">Soft Skills</h2>
              {softSkills.map((row)=>(
                <a key = {row.soft} className="w-full text-lg">
                    <FontAwesomeIcon icon={faCircleCheck} className='icon mr-2'/>
                    {row.soft}
                </a>
            ))}
          </div>
        </section>
        <Footer/>
      </div>
    )
}