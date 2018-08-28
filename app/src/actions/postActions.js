import {loadMixes} from "./feedActions";

export const deletePost = (environment = 'dev', mixDataId, tagId, page) => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        //there's only a delete function here. GETTING the mixes happened in feedActions. (Code rot! needed to be refactored!)
        _dispatch(loadMixes());
    }
};
