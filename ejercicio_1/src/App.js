import './App.css';
import Perfil from './componentes/Perfil';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Mis programadores referentes</h1>
        <Perfil
          imagen='brais'
          nombre='Brais Moure'
          pais='España'
          cargo='Ingeniero de software'
          empresa='Fundador de Moure Dev'
          resena='Soy un informático freelance emprendedor y amante de la tecnología.
          He trabajado en grandes empresas del sector como Inditex, Indra o Altia. Ocupando mis 3 últimos años, antes de establecerme como freelance, como Arquitecto de Software del área de Logística-Comercial de Inditex.
          En 2014 decido crear mi propia empresa de desarrollo de software, MoureDev, dado mi profundo interés por las nuevas tendencias del sector. Finalmente, en 2015, paso a dedicarme fulltime a MoureDev, orientando mi carrera al desarrollo de aplicaciones móviles.
          Actualmente dirijo MoureDev, soy Co-Fundador de Pilbeo y asesoro y desarrollo para empresas y startups como Mr Jeff o Vippter, entre otras.'>
        </Perfil>

        <Perfil
          imagen='Miguel'
          nombre='Miguel Ángel Durán García'
          pais='España'
          cargo='Ingeniero de software'
          empresa='Midudev Divulgador de contenido'
          resena='Empecé en la programación trasteando con Locomotive BASIC con un Amstrad CPC 464 que me regaló mi padre. De ahí hasta el día de hoy he tocado muchas tecnologías y lenguajes muy diferentes.
          Una de mis mayores motivaciones es aprender. Así empecé mis años de autodidacta, devorando libros y tutoriales que iba encontrando. Años más tarde cursé la Ingenieria Técnica de Informática de Gestión en la UOC. Y, desde entonces, no he parado ni un momento para seguir trabajando como desarrollador y seguir aprendiendo.'>
        </Perfil>

        <Perfil
          imagen='Jean'
          nombre='Jean Marie Quijada'
          pais='Brasil'
          cargo='Ingeniera de sistemas'
          empresa='Alura Latam'
          resena='Soy Ingeniera de Sistemas y desarrolladora de software Full Stack con experiencia en desarrollo web front-end en construcción de aplicaciones web con HTML, CSS, JavaScript, Angular, base de datos con MySQL y backend con Node.Js. También cuento con 5 años de experiencia trabajando en soporte técnico T.I. 
          Actualmente me desempeño como instructora en Alura Latam, formando parte del equipo de instructores del programa Oracle Next Education. '>
        </Perfil>
      </div>
    </div>
  );
}

export default App;