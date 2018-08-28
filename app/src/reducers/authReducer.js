const auth = (state = {loggedIn: false}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                loggedIn: true
            };
        case 'LOGGED_IN_STATUS': {
            return {
                ...state,
                loggedIn: action.loggedIn
            }
        }
        case 'LOG_OUT': {
            return {
                ...state,
                loggedIn: false
            }
        }
        default:
            return state;
    }
};

export default auth;