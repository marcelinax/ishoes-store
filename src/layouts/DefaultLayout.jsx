import { Navbar } from '@components/Compositional/Navbar';
import React from 'react';

export const DefaultLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};
