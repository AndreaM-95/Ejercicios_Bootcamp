import React, {useEffect, useState} from 'react';
import Link from "next/link"
import { NavLinks } from '../Constants';
import { usePathname } from 'next/navigation';
import Transition from './Transition';

function Navigation() {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if(isRouting){
      setPrevPath(path);
      const timeout = setTimeout(()=>{
        setisRouting(false);
      }, 1200)
      return()=> clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div className='rounded-full flex items-center'>
      {isRouting && <Transition/>}
      {NavLinks.map((nav) =>
        <Link key={nav.name} href={nav.link} className='mb-5'>

          <nav.icon
            className={`w-[16px] h-[16px] 
              ${path === nav.name ? "text-blue-500" : "text-white"}`
            }
          />
        </Link>
      )}
    </div>
  );
}

export default Navigation;
