import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const { user } = useAuth();
    // if (!user) {
    //     return (
    //         <>
    //             {/* can create separate navbar or add to return below  */}
    //         </>
    //     )
    // }
  return (
    <header
        className='fixed top-0 w-full bg-white h-[4rem] md:h-[4.5rem] lg:h-[5rem] flex-center px-3 md:px-5'
    >
        <nav
            className='flex-between w-full relative'
        >
            <NavLink 
                to='/dashboard' 
                className="flex justify-center"
            >
                {/* <img 
                    src={logo} 
                    alt="Logo" 
                    className="w-40 md:w-52" 
                /> */}
                logo here
            </NavLink>
            <span>menu here</span>
        </nav>
    </header>
  )
}

export default Navigation