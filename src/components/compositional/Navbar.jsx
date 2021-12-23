import React, { useState } from 'react';

import { BiCart } from 'react-icons/bi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { ButtonWithIcon } from '../global/ButtonWithIcon';
import { Link } from 'react-router-dom';
import { NavbarLink } from '../global/NavbarLink';
import { Search } from '../global/Search';

export const Navbar = () => {

    const [toggleShowSearch, setToggleShowSearch] = useState(false);
    
   
    return (
        <div className='w-full flex bg-white shadow-lg'>
            <div className='w-full p-10 flex items-center'>
                <div className='flex-1'>
                    <Link to='/' className='font-extrabold text-xl'>IShoes</Link>
                </div>
                <div className='items-center flex'>
                    <NavbarLink title='New' to=''/>
                    <NavbarLink title='Men' to=''/>
                    <NavbarLink title='Women' to=''/>
                    <NavbarLink title='Kids' to=''/>
                    <NavbarLink title='Sale' className='text-red-500 red-link' to=''/>
                </div>
                <div className='flex flex-1 items-center justify-end'>
                    <Search isShown={toggleShowSearch}/>
                    <ButtonWithIcon icon={<BiSearchAlt2 size={24}/>} className='mr-3' onClick={()=>{return setToggleShowSearch(!toggleShowSearch);}}/>
                    <ButtonWithIcon icon={<BiUserCircle size={24}/>} className='mr-3' />
                    <ButtonWithIcon icon={<BiCart size={24}/>} isLink to='shopping-cart'/>
                </div>
            </div>
        </div>
    );
};
