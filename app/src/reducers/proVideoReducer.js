const proVideos = (state = {proVideos: [], proVideoTags: [], currentPage: 1, totalPages: 1, proVideoUploading: false}, action) => {
    switch (action.type) {
        case 'PROVIDEOS_LOADED':
        case 'PROVIDEOS_SAVED':
        case 'PROVIDEOS_DELETED':
            return {
                ...state,
                proVideos: action.proVideos,
                currentPage: action.currentPage,
                totalPages: action.totalPages
            };
        case 'PROVIDEO_TAGS_LOADED' :
            return {
                ...state,
                proVideoTags: action.proVideoTags
            };
        case 'UPLOADING_PROVIDEO' :
            return {
                ...state,
                proVideoUploading: action.proVideoUploading
            };
        default:
            return state;
    }
};

export default proVideos;