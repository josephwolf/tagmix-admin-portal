const venues = (state = {venues: [], allVenues: []}, action) => {
    switch (action.type) {
        case 'VENUES_LOADED':
        case 'VENUE_SAVED':
        case 'VENUE_DELETED':
            return {
                ...state,
                venues: action.venues
            };
        case 'ALL_VENUES_LOADED':
            return {
                ...state,
                allVenues: action.allVenues
            };
        default:
            return state;
    }
};

export default venues;