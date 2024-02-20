import './App.css';
import Perfil from './componentes/Perfil';

const devs =[
  {
    nombre: 'Brais Moure',
    pais:'España',
    imagen:'brais',
    cargo:'Ingeniero de Software',
    empresa:' MoureDev',
    perfil:'Soy un informático freelance emprendedor y amante de la tecnología. He trabajado en grandes empresas del sector como Inditex, Indra o Altia. Ocupando mis 3 últimos años, antes de establecerme como freelance, como Arquitecto de Software del área de Logística-Comercial de Inditex. En 2014 decido crear mi propia empresa de desarrollo de software, MoureDev, dado mi profundo interés por las nuevas tendencias del sector. Finalmente, en 2015, paso a dedicarme fulltime a MoureDev, orientando mi carrera al desarrollo de aplicaciones móviles. Actualmente dirijo MoureDev, soy Co-Fundador de Pilbeo y asesoro y desarrollo para empresas y startups como Mr Jeff o Vippter, entre otras.',
    linkedin:'https://www.linkedin.com/in/braismoure/',
    youtube:'https://www.youtube.com/@mouredev',
    twitter:'https://twitter.com/mouredev'
  },
  {
    nombre: 'Jean Marie Quijada',
    pais:'Brasil',
    imagen:'Jean',
    cargo:'Ingeniera de Sistemas',
    empresa:' Alura Latam',
    perfil:'Soy Ingeniera de Sistemas y desarrolladora de software Full Stack con experiencia en desarrollo web front-end en construcción de aplicaciones web con HTML, CSS, JavaScript, Angular, base de datos con MySQL y backend con Node.Js. También cuento con 5 años de experiencia trabajando en soporte técnico T.I. Actualmente me desempeño como instructora en Alura Latam, formando parte del equipo de instructores del programa Oracle Next Education. ',
    linkedin:'https://www.linkedin.com/in/jeanmariequijada/',
    youtube:'https://www.youtube.com/@AluraLatam',
    twitter:'https://www.instagram.com/code.jeanmarie/'
  },
  {
    nombre: 'Miguel Ángel Durán García',
    pais:'España',
    imagen:'Miguel',
    cargo:'Ingeniero de Software',
    empresa:' Midudev Divulgador de contenido',
    perfil:'Empecé en la programación trasteando con Locomotive BASIC con un Amstrad CPC 464 que me regaló mi padre. De ahí hasta el día de hoy he tocado muchas tecnologías y lenguajes muy diferentes.Una de mis mayores motivaciones es aprender. Así empecé mis años de autodidacta, devorando libros y tutoriales que iba encontrando. Años más tarde cursé la Ingenieria Técnica de Informática de Gestión en la UOC. Y, desde entonces, no he parado ni un momento para seguir trabajando como desarrollador y seguir aprendiendo.',
    linkedin:'https://www.linkedin.com/in/midudev/',
    youtube:'https://www.youtube.com/c/midudev',
    twitter:'https://twitter.com/midudev'
  }
]

function App() {
  return (
    <div className="App">
      <h1 className='titulo'>MIS DESARROLLADORES FAVORITOS</h1>
      {
        devs.map(({imagen, nombre, pais, cargo, empresa, perfil, linkedin, youtube, twitter})=> (
          <Perfil
            key ={nombre}
            nombre={nombre}
            pais={pais}
            imagen={imagen}
            cargo= {cargo}
            empresa= {empresa}
            perfil= {perfil}
            linkedin={linkedin}
            youtube= {youtube}
            twitter= {twitter}
          ></Perfil>
        ))
      }
    </div>
  );
}

export default App;