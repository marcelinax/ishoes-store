import { COLORS } from '../Constants';

export const getColorsByTitle = (title) => {
    return COLORS.colors.filter(color => color.title === title).map(color => color.color);
};