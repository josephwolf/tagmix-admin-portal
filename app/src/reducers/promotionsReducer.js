const promotions = (state = {promotions: []}, action) => {
    switch (action.type) {
        case 'PROMOTIONS_LOADED':
        case 'PROMOTION_SAVED':
        case 'PROMOTION_DELETED':
            return {
                ...state,
                promotions: action.promotions
            };
        default:
            return state;
    }
};

export default promotions;