const favorites = (state = {favorites: []}, action) => {
    switch (action.type) {
        case 'FAVORITES_LOADED':
        case 'FAVORITE_SAVED':
        case 'FAVORITE_DELETED':
            return {
                ...state,
                favorites: action.favorites
            };
        default:
            return state;
    }
};

export default favorites;