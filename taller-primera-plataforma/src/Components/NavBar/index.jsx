import {NavLink} from "react-router-dom";

const Navbar = () => {
    const activeStyle = 'border-b-2 border-b-amber-500 pb-2'

    return(
        <nav className="flex justify-between items-center p-5 bg-amber-900 text-white">
            <ul className="flex items-center gap-7">
                <li className="font-semibold text-lg  hover:scale-110">
                    <NavLink to='/'>
                        Inicio
                    </NavLink>
                </li>

                <li className="font-semibold text-lg hover:scale-110">
                    <NavLink 
                        to='/developers'
                        className = {({isActive}) =>
                            isActive ? activeStyle:undefined
                        }
                    >Desarrolladores
                    </NavLink>
                </li>

                <li className="font-semibold text-lg hover:scale-110">
                    <NavLink 
                        to='/exercises'
                        className = {({isActive}) =>
                            isActive ? activeStyle:undefined
                        }
                    >Ejercicios
                    </NavLink>
                </li>

                <li className="font-semibold text-lg hover:scale-110">
                    <NavLink 
                        to='/projects'
                        className = {({isActive}) =>
                            isActive ? activeStyle:undefined
                        }
                    >Proyectos
                    </NavLink>
                </li>

                <li className="font-semibold text-lg hover:scale-110">
                    <NavLink 
                        to='/about-me'
                        className = {({isActive}) =>
                            isActive ? activeStyle:undefined
                        }
                    >Sobre mi
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;