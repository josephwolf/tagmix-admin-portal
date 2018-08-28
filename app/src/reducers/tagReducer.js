
const tags = (state = {tags: []}, action) => {
    switch (action.type) {
        case 'TAGS_LOADED':
            return {
                ...state,
                tags: action.tags
            };
        default:
            return state;
    }
};

export default tags;