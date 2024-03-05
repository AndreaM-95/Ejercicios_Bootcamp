import { NavLinks } from "@/app/Constants";
import Image from "next/image";

const Navbar = () => {
    const activeStyle = 'border-b-2 border-b-gray-400 pb-2'

    return(
        <nav className="flex justify-between items-center bg-gray-900 p-5 text-white">
            <div className='flex flex-row mb-2 gap-5'>
                {NavLinks.map((nav) => (
                    <a key= {nav.name} href={nav.link}>
                        <button className="{({isActive}) => isActive ? activeStyle:undefined} hover:scale-110">
                            {nav.name}
                        </button>
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;