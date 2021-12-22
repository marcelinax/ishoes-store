import { Navbar } from '../components/compositional/Navbar';
import React from 'react';

export const DefaultLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};
