import { useRoutes , BrowserRouter } from 'react-router-dom';
import Navbar from '../../Components/NavBar';
import Exercises from '../Exercises';
import Developers from '../Developers'
import Projects from '../Projects';
import AboutMe from '../About-Me';
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/Developers', element: <Developers /> },
    { path: '/Exercises', element: <Exercises /> },
    { path: '/Projects', element: <Projects /> },
    { path: '/About-Me', element: <AboutMe /> },
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}
export default App
