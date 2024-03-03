import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Food helper
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sea'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Sea
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/fast-food'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Fast Food
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/colombian'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Colombian
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/asian'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Asian
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
