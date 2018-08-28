
const issues = (state = {subpage: 'userIssues'}, action) => {
    switch (action.type) {
        case 'CHANGE_SUBPAGE':
            return {
                ...state,
                subpage: action.subpage
            };
        case 'USER_ISSUES_LOADED':
            return {
                ...state,
                userIssues: action.userIssues
            };
        case 'MIX_ISSUES_LOADED':
            return {
                ...state,
                mixIssues: action.mixIssues
            };
        case 'USER_BLOCKED':
            return {
                ...state,
                blockedStatusOfUser: action.blockedStatusOfUser
            };
        case 'MIX_DELETED':
            return {
                ...state
            };
        default:
            return state;
    }
};

export default issues;