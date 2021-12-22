import { BiCart } from 'react-icons/bi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { ButtonWithIcon } from '../global/ButtonWithIcon';
import { Link } from 'react-router-dom';
import { NavbarLink } from '../global/NavbarLink';
import React from 'react';

export const Navbar = () => {

   
    return (
        <div className='w-full flex bg-white shadow-lg'>
            <div className='w-full p-10 flex justify-between items-center'>
                <div>
                    <Link to='/' className='font-extrabold text-xl'>IShoes</Link>
                </div>
                <div className='items-center flex'>
                    <NavbarLink title='New'/>
                    <NavbarLink title='Men'/>
                    <NavbarLink title='Women'/>
                    <NavbarLink title='Kids'/>
                    <NavbarLink title='Sale'/>
                </div>
                <div className='flex items-center'>
                    <ButtonWithIcon icon={<BiSearchAlt2 size={24}/>} className='mr-3'/>
                    <ButtonWithIcon icon={<BiUserCircle size={24}/>} className='mr-3'/>
                    <ButtonWithIcon icon={<BiCart size={24}/>}/>
                </div>
            </div>
        </div>
    );
};
