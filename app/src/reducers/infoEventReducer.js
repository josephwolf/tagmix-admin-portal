const infoEvents = (state = {infoEvents: [], currentPage: 1, totalPages: 1, promoters: []}, action) => {
    switch (action.type) {
        case 'INFO_EVENTS_LOADED':
        case 'INFO_EVENT_SAVED':
        case 'INFO_EVENT_DELETED':
            return {
                ...state,
                infoEvents: action.infoEvents,
                currentPage: action.currentPage,
                totalPages: action.totalPages
            };
        case 'PROMOTERS_LOADED':
            return {
                ...state,
                promoters: action.promoters
            };
        default:
            return state;
    }
};

export default infoEvents;