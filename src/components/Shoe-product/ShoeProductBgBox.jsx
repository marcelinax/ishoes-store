import { ShoeProductGalleryItem } from '@components/Shoe-product/ShoeProductGalleryItem';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const ShoeProductBgBox = ({ photos }) => {
    
    const [activePhoto, setActivePhoto] = useState(photos[0]);

    const renderShoeProductGalleryItems = () => {
        if (photos) {
            return photos.map(photo => (
                <ShoeProductGalleryItem key={photo} photo={photo} setActivePhoto={setActivePhoto} isActive={activePhoto === photo}/>
            ));
        }
    };

    return (
        <div className='w-3/5 h-screen flex'>
            <div className='w-1/5 h-full'>
                <div className='flex flex-col relative left-2/3 top-16'>
                    {renderShoeProductGalleryItems()}
                </div>
            </div>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='w-2/3 h-2/3 bg-no-repeat bg-center bg-contain' style={{ backgroundImage: `url(${activePhoto})` }}/>
            </div>
        </div>
    );
};


ShoeProductBgBox.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.string).isRequired
};