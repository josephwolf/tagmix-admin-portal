
const feed = (state = {pagination: {}, mixes: [], pageName: 'users'}, action) => {
    switch (action.type) {
        case 'MIXES_LOADED':
            return {
                ...state,
                pagination: action.mixes.pagination,
                mixes: action.mixes.data
            };

        case  'CHANGE_PAGE_TYPE':
            return{
                ...state,
                pageName: action.pageName
            };
        case 'CHECK_PAGE':
            return {
                ...state,
                page: action.page
            };
        default:
            return state;
    }
};

export default feed;