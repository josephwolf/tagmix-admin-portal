
const events = (state = {events: []}, action) => {
    switch (action.type) {
        case 'EVENTS_LOADED':
            return {
                ...state,
                events: action.events
            };
        default:
            return state;
    }
};

export default events;