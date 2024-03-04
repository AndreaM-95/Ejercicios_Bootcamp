import {NavLink} from "react-router-dom";

const Navbar = () => {
    const activeStyle = 'border-b-2 border-b-blue-500 pb-2'

    return(
        <nav className="flex justify-between items-center bg-gray-900 p-5 text-white">
            <ul className="flex items-center gap-7">
                <li>
                    <img src='/Mi_Logo-Blanco.png' className="w-16"></img>
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