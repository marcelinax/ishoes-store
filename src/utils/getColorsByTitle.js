import colorsTypes from '@constants/colorsTypes';


export const getColorsByTitle = (title) => {
    return colorsTypes.colors.filter(color => color.title === title).map(color => color.color);
};