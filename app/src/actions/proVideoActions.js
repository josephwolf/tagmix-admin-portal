import ReactS3 from '../../lib/ReactS3.js';

export const loadProVideos = (environment = 'dev', id = 0, page = 1) => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let data = {
            "currentPage":"1",
            "totalPages":35,
            "data":[
                {
                    "id":2,
                    "path_to":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-7d757595-dc30-4b5b-8cd6-a4c790db103b.mp4",
                    "poster":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-7d757595-dc30-4b5b-8cd6-a4c790db103b.png",
                    "created_at":null,
                    "updated_at":"2017-06-29T16:07:46.000Z",
                    "source_id":5,
                    "duration":1,
                    "popularity":0,
                    "comment":null,
                    "event_id":null,
                    "event_title":null,
                    "event_description_short":null,
                    "event_description_long":null,
                    "height":null,
                    "width":null,
                    "orientation":"portrait"
                },
                {
                    "id":3,
                    "path_to":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-1e903062-73ce-4e74-8d9d-47dfa499b121.mp4",
                    "poster":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-1e903062-73ce-4e74-8d9d-47dfa499b121.png",
                    "created_at":null,
                    "updated_at":"2017-06-29T16:07:46.000Z",
                    "source_id":5,
                    "duration":2,
                    "popularity":0,
                    "comment":null,
                    "event_id":null,
                    "event_title":null,
                    "event_description_short":null,
                    "event_description_long":null,
                    "height":null,
                    "width":null,
                    "orientation":"portrait"
                },
                {
                    "id":4,
                    "path_to":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-6a9fa0e1-d31d-4da1-8719-db15860caa5b.mp4",
                    "poster":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-6a9fa0e1-d31d-4da1-8719-db15860caa5b.png",
                    "created_at":null,
                    "updated_at":"2017-06-29T16:07:46.000Z",
                    "source_id":5,
                    "duration":2,
                    "popularity":0,
                    "comment":null,
                    "event_id":null,
                    "event_title":null,
                    "event_description_short":null,
                    "event_description_long":null,
                    "height":null,
                    "width":null,
                    "orientation":"portrait"
                },
                {
                    "id":5,
                    "path_to":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-61278198-84c4-4e68-87eb-c698bf43f27c.mp4",
                    "poster":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-61278198-84c4-4e68-87eb-c698bf43f27c.png",
                    "created_at":null,
                    "updated_at":"2017-06-29T16:07:46.000Z",
                    "source_id":5,
                    "duration":1,
                    "popularity":0,
                    "comment":null,
                    "event_id":null,
                    "event_title":null,
                    "event_description_short":null,
                    "event_description_long":null,
                    "height":null,
                    "width":null,
                    "orientation":"portrait"
                },
                {
                    "id":6,
                    "path_to":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-29625122-5009-44c9-a72f-13c1713cb63a.mp4",
                    "poster":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-29625122-5009-44c9-a72f-13c1713cb63a.png",
                    "created_at":null,
                    "updated_at":"2017-06-29T16:07:46.000Z",
                    "source_id":5,
                    "duration":3,
                    "popularity":0,
                    "comment":null,
                    "event_id":null,
                    "event_title":null,
                    "event_description_short":null,
                    "event_description_long":null,
                    "height":null,
                    "width":null,
                    "orientation":"portrait"
                },
                {
                    "id":7,
                    "path_to":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-116731b9-a327-4ca1-9f61-69c63e7f3f71.mp4",
                    "poster":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-116731b9-a327-4ca1-9f61-69c63e7f3f71.png",
                    "created_at":null,
                    "updated_at":"2017-06-29T16:07:46.000Z",
                    "source_id":5,
                    "duration":2,
                    "popularity":0,
                    "comment":null,
                    "event_id":null,
                    "event_title":null,
                    "event_description_short":null,
                    "event_description_long":null,
                    "height":null,
                    "width":null,
                    "orientation":"portrait"
                },
                {
                    "id":8,
                    "path_to":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-cca79166-e433-4df1-8bb3-e9e574a8dc1e.mp4",
                    "poster":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-cca79166-e433-4df1-8bb3-e9e574a8dc1e.png",
                    "created_at":null,
                    "updated_at":"2017-06-29T16:07:46.000Z",
                    "source_id":5,
                    "duration":1,
                    "popularity":0,
                    "comment":null,
                    "event_id":null,
                    "event_title":null,
                    "event_description_short":null,
                    "event_description_long":null,
                    "height":null,
                    "width":null,
                    "orientation":"portrait"
                },
                {
                    "id":9,
                    "path_to":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-384a75dd-c692-4850-8485-64bd6db92d90.mp4",
                    "poster":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-384a75dd-c692-4850-8485-64bd6db92d90.png",
                    "created_at":null,
                    "updated_at":"2017-06-29T16:07:46.000Z",
                    "source_id":5,
                    "duration":2,
                    "popularity":0,
                    "comment":null,
                    "event_id":null,
                    "event_title":null,
                    "event_description_short":null,
                    "event_description_long":null,
                    "height":null,
                    "width":null,
                    "orientation":"portrait"
                },
                {
                    "id":10,
                    "path_to":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-be5e2f27-37d6-4abc-8b41-47c14d435616.mp4",
                    "poster":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-be5e2f27-37d6-4abc-8b41-47c14d435616.png",
                    "created_at":null,
                    "updated_at":"2017-06-29T16:07:46.000Z",
                    "source_id":5,
                    "duration":1,
                    "popularity":0,
                    "comment":null,
                    "event_id":null,
                    "event_title":null,
                    "event_description_short":null,
                    "event_description_long":null,
                    "height":null,
                    "width":null,
                    "orientation":"portrait"
                },
                {
                    "id":12,
                    "path_to":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-d45e9fd2-3ff2-42d4-8051-78a7864eb72e.mp4",
                    "poster":"https://s3.eu-west-2.amazonaws.com/tagmix-provideo-stage/5/DF-TEST-d45e9fd2-3ff2-42d4-8051-78a7864eb72e.png",
                    "created_at":null,
                    "updated_at":"2017-06-29T16:07:46.000Z",
                    "source_id":5,
                    "duration":4,
                    "popularity":0,
                    "comment":null,
                    "event_id":null,
                    "event_title":null,
                    "event_description_short":null,
                    "event_description_long":null,
                    "height":null,
                    "width":null,
                    "orientation":"portrait"
                }
            ]
        }

        _dispatch(
            {
                type: 'PROVIDEOS_LOADED',
                proVideos: data.data,
                currentPage: data.currentPage,
                totalPages: data.totalPages
            }
        );
    };
};

export const loadProVideoTags = (environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let proVideoTags = [
            {
                "id":5,
                "source_name":"Defected",
                "created_at":"2017-05-23T10:51:37.000Z",
                "updated_at":"2017-05-24T10:51:37.000Z"
            },
            {
                "id":6,
                "source_name":"IMS",
                "created_at":"2017-05-24T11:00:41.000Z",
                "updated_at":"2017-05-24T11:00:41.000Z"
            },
            {
                "id":8,
                "source_name":"UGC",
                "created_at":"2017-06-05T10:48:36.000Z",
                "updated_at":"2017-06-05T10:48:36.000Z"
            },
            {
                "id":9,
                "source_name":"CuckooLand",
                "created_at":"2017-06-18T11:00:39.000Z",
                "updated_at":"2017-06-18T11:00:39.000Z"
            },
            {
                "id":10,
                "source_name":"Tomorrowland",
                "created_at":"2017-06-18T11:00:40.000Z",
                "updated_at":"2017-06-18T11:00:40.000Z"
            },
            {
                "id":11,
                "source_name":"Abode",
                "created_at":"2017-06-18T11:00:40.000Z",
                "updated_at":"2017-06-18T11:00:40.000Z"
            },
            {
                "id":12,
                "source_name":"AD TEST",
                "created_at":"2018-03-07T21:06:19.000Z",
                "updated_at":"2018-03-07T21:06:19.000Z"
            },
            {
                "id":13,
                "source_name":"TagMix",
                "created_at":"2018-04-05T13:02:45.000Z",
                "updated_at":"2018-04-05T13:02:45.000Z"
            },
            {
                "id":14,
                "source_name":"Hideout",
                "created_at":"2018-04-27T19:48:02.000Z",
                "updated_at":"2018-04-27T19:48:02.000Z"
            },
            {
                "id":15,
                "source_name":"Resistance",
                "created_at":"2018-07-17T20:23:36.000Z",
                "updated_at":"2018-07-17T20:23:36.000Z"
            }
        ];

        _dispatch(
            {
                type: 'PROVIDEO_TAGS_LOADED',
                proVideoTags: proVideoTags
            }
        );
    };
};

function changeLoadingState(bool) {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(
            {
                type: 'UPLOADING_PROVIDEO',
                proVideoUploading: bool
            }
        );
    }
}

function saveProVideo(file, fileName, tagId, environment = 'dev') {
    return new Promise((resolve, reject) => {
        return resolve()
        .catch((err) => {return reject(err)})
    })
}

export const submitProVideo = (environment = 'dev', videoFile, tagId) => {
    let _dispatch, _getState;
    let newVideoFileName = `${uuidv4()}.mp4`;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        dispatch(changeLoadingState(true));
        saveProVideo(videoFile, newVideoFileName, tagId, environment).then(() => { dispatch(changeLoadingState(false)) })
    }
};

export const saveProVideoTag = (environment = 'dev', tagName) => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(loadProVideoTags(environment));
    }
};

export const deleteProVideoTag = (environment = 'dev', tagId) => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(loadProVideoTags(environment));
    }
};

export const deleteProVideo = (environment = 'dev', videoId) => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(loadProVideos(environment));
    }
};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

