
export const loadPromotions = (environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let promotions = [
            {
                "id":2,
                "title":"Test Promotion 1",
                "body":"",
                "click_action":"linkCategory",
                "link_url":"www.awebsite.com",
                "venue_id":100042,
                "venue_name":"Hard Rock Hotel",
                "maximum_allocations":3,
                "users_allocated":0,
                "start_time":"2018-02-09T00:00:00.000Z",
                "end_time":"2018-02-10T00:00:00.000Z",
                "created_at":"2018-03-15T02:19:46.000Z",
                "updated_at":"2018-03-15T02:19:46.000Z",
                "promotion_type":"proximity"
            },
            {
                "id":11,
                "title":"Location test",
                "body":"",
                "click_action":"linkCategory",
                "link_url":"https://xr5igu54ai.execute-api.eu-west-2.amazonaws.com/live",
                "venue_id":100059,
                "venue_name":"Joey's House",
                "maximum_allocations":5,
                "users_allocated":1,
                "start_time":"2018-04-16T00:00:00.000Z",
                "end_time":"2018-04-18T00:00:00.000Z",
                "created_at":"2018-04-16T16:27:52.000Z",
                "updated_at":"2018-04-16T16:27:52.000Z",
                "promotion_type":"proximity"
            },
            {
                "id":12,
                "title":"Mix test",
                "body":"Thanks for mixing!!",
                "click_action":"linkCategory",
                "link_url":"https://xr5igu54ai.execute-api.eu-west-2.amazonaws.com/live",
                "venue_id":100059,
                "venue_name":"Joey's House",
                "maximum_allocations":5,
                "users_allocated":1,
                "start_time":"2018-04-16T00:00:00.000Z",
                "end_time":"2018-04-18T00:00:00.000Z",
                "created_at":"2018-04-16T16:31:00.000Z",
                "updated_at":"2018-04-16T16:31:00.000Z",
                "promotion_type":"mix"
            },
            {
                "id":13,
                "title":"Danny's Test Promotion",
                "body":"Hey, thanks for mixing!  We've got something just for you...",
                "click_action":"linkCategory",
                "link_url":"https://xr5igu54ai.execute-api.eu-west-2.amazonaws.com/live",
                "venue_id":100806,
                "venue_name":"Danny's House",
                "maximum_allocations":10,
                "users_allocated":1,
                "start_time":"2018-04-16T00:00:00.000Z",
                "end_time":"2018-04-20T00:00:00.000Z",
                "created_at":"2018-04-16T23:17:08.000Z",
                "updated_at":"2018-04-16T23:17:08.000Z",
                "promotion_type":"mix"
            },
            {
                "id":14,
                "title":"April management meeting",
                "body":"Yes, yes, yes",
                "click_action":"linkCategory",
                "link_url":"https://xr5igu54ai.execute-api.eu-west-2.amazonaws.com/live ",
                "venue_id":100807,
                "venue_name":"The Tea Building",
                "maximum_allocations":10,
                "users_allocated":0,
                "start_time":"2018-04-17T00:00:00.000Z",
                "end_time":"2018-04-20T00:00:00.000Z",
                "created_at":"2018-04-17T10:20:14.000Z",
                "updated_at":"2018-04-17T10:20:14.000Z",
                "promotion_type":"mix"
            },
            {
                "id":15,
                "title":"April management meeting",
                "body":"Hey, you got a reward!",
                "click_action":"linkCategory",
                "link_url":"https://xr5igu54ai.execute-api.eu-west-2.amazonaws.com/live",
                "venue_id":100798,
                "venue_name":"Concrete",
                "maximum_allocations":20,
                "users_allocated":3,
                "start_time":"2018-04-17T00:00:00.000Z",
                "end_time":"2018-04-20T00:00:00.000Z",
                "created_at":"2018-04-17T11:36:59.000Z",
                "updated_at":"2018-04-17T11:36:59.000Z",
                "promotion_type":"proximity"
            },
            {
                "id":16,
                "title":"Demo Award Promotion",
                "body":"Hey, you got a reward from TagMix",
                "click_action":"linkCategory",
                "link_url":"https://xr5igu54ai.execute-api.eu-west-2.amazonaws.com/live",
                "venue_id":100798,
                "venue_name":"Concrete",
                "maximum_allocations":20,
                "users_allocated":1,
                "start_time":"2018-04-17T00:00:00.000Z",
                "end_time":"2018-04-20T00:00:00.000Z",
                "created_at":"2018-04-17T11:41:55.000Z",
                "updated_at":"2018-04-17T11:41:55.000Z",
                "promotion_type":"mix"
            },
            {
                "id":17,
                "title":"You're at the Management Meeting!",
                "body":"Well done - keep up the good work...",
                "click_action":"linkCategory",
                "link_url":"https://xr5igu54ai.execute-api.eu-west-2.amazonaws.com/live",
                "venue_id":100798,
                "venue_name":"Concrete",
                "maximum_allocations":20,
                "users_allocated":5,
                "start_time":"2018-04-17T00:00:00.000Z",
                "end_time":"2018-04-20T00:00:00.000Z",
                "created_at":"2018-04-17T14:40:44.000Z",
                "updated_at":"2018-04-17T14:40:44.000Z",
                "promotion_type":"proximity"
            },
            {
                "id":18,
                "title":"Global Demo Promo 1",
                "body":"Hey, you've got a reward from TagMix!",
                "click_action":"linkCategory",
                "link_url":"https://xr5igu54ai.execute-api.eu-west-2.amazonaws.com/live",
                "venue_id":100819,
                "venue_name":"Global",
                "maximum_allocations":20,
                "users_allocated":2,
                "start_time":"2018-04-17T00:00:00.000Z",
                "end_time":"2018-04-20T00:00:00.000Z",
                "created_at":"2018-04-18T09:57:37.000Z",
                "updated_at":"2018-04-18T09:57:37.000Z",
                "promotion_type":"proximity"
            },
            {
                "id":19,
                "title":"Another test promotion",
                "body":"here's the promotion body!",
                "click_action":"linkCategory",
                "link_url":"https://google.com",
                "venue_id":100670,
                "venue_name":"Ministry Of Sound",
                "maximum_allocations":50,
                "users_allocated":0,
                "start_time":"2018-06-10T00:00:00.000Z",
                "end_time":"2018-06-17T00:00:00.000Z",
                "created_at":"2018-06-12T20:57:58.000Z",
                "updated_at":"2018-06-12T20:57:58.000Z",
                "promotion_type":"proximity"
            }
        ];

        _dispatch(
            {
                type: 'PROMOTIONS_LOADED',
                promotions: promotions
            }
        );
    };
};

export const savePromotion = (environment = 'dev', title, body, link_url, venue_id, venue_name, maximum_allocations, start_time, end_time, promotion_type) => {

    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(loadPromotions(environment));
    }
};

export const deletePromotion = (environment = 'dev', promotionId) => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(loadPromotions(environment));
    }
};
