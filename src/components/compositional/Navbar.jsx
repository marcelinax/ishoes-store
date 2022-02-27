import { Button } from '@components/Global/Button';
import { NavbarLink } from '@components/Global/NavbarLink';
import { Search } from '@components/Global/Search';
import buttonTypes from '@constants/buttonTypes';
import locales from '@constants/locales';
import React, { useState } from 'react';
import { BiSearchAlt2, BiUserCircle, BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [toggleShowSearch, setToggleShowSearch] = useState(false);
   
    return (
        <div className='w-full flex bg-white shadow-lg'>
            <div className='w-full p-10 flex items-center'>
                <div className='flex-1'>
                    <Link to='/' className='font-extrabold text-xl'>{locales.ISHOES}</Link>
                </div>
                <div className='items-center flex'>
                    <NavbarLink title={locales.NEW} linkTo=''/>
                    <NavbarLink title={locales.MEN} linkTo=''/>
                    <NavbarLink title={locales.WOMEN} linkTo=''/>
                    <NavbarLink title={locales.KIDS} linkTo=''/>
                    <NavbarLink title={locales.SALE} className='text-red-500 red-link' linkTo=''/>
                </div>
                <div className='flex flex-1 items-center justify-end'>
                    <Search isShown={toggleShowSearch} />
                    <Button type={buttonTypes.ICON_BUTTON} icon={<BiSearchAlt2 size={24}/>} onClick={()=>{return setToggleShowSearch(!toggleShowSearch);}} className='mr-3'/>
                    <Button type={buttonTypes.ICON_BUTTON} icon={<BiUserCircle size={24}/>} className='mr-3'/>
                    <Button type={buttonTypes.ICON_BUTTON} icon={<BiCart size={24}/>} onClick={()=>{return setToggleShowSearch(!toggleShowSearch);}} isLink linkTo='/shopping-cart'/>
                </div>
            </div>
        </div>
    );
};
