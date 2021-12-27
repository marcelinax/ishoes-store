import React from 'react';
import { ShoeProductGalleryItem } from './ShoeProductGalleryItem';

export const ShoeProductBgBox = () => {
    return (
        <div className='w-3/5 h-screen flex'>
            <div className='w-1/5 h-full'>
                <div className='flex flex-col relative left-1/3 top-1/3'>
                    <ShoeProductGalleryItem/>
                    <ShoeProductGalleryItem/>
                    <ShoeProductGalleryItem/>
                </div>
            </div>
            <div className='w-full h-full bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url(https://sklep.sizeer.com/media/cache/gallery/rc/knvz3ag4/nike-air-force-1-07-damskie-sneakersy-bialy-dd8959-100_4.jpg)' }} />
        </div>
    );
};
