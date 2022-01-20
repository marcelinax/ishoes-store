import {IoIosStar, IoIosStarOutline} from 'react-icons/io';

import React from 'react';

export const StarItem = ({isEmpty}) => {
    return (
        <div>
            {isEmpty ? <IoIosStarOutline fill='#facc15' size={22}/> : <IoIosStar fill='#facc15' size={22}/>}
        </div>
    );
};
