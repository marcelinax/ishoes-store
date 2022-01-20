import PropTypes from 'prop-types';
import React from 'react';

export const ShoeProductGalleryItem = ({ setActivePhoto, photo, isActive }) => {
    
    return (
        <div className='w-[90px] h-[90px] mb-4 cursor-pointer hover:scale-95 transition-all' onClick={() => {
            setActivePhoto(photo);
        }}>
            <div className={`w-full h-full bg-no-repeat bg-contain bg-center ${isActive && 'border-b-2 border-zinc-200'}`} style={{ backgroundImage: `url(${photo})` }} />
        </div>
    );
};

ShoeProductGalleryItem.propTypes = {
    photo: PropTypes.string.isRequired
};