
export const loadCompetitions = (environment = 'dev', competitionType = 0, page = 1) => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let competitions = [
            {
                "id":35,
                "name":"Test competition",
                "type":1,
                "start_at":"2018-07-02T09:50:16+00:00",
                "end_at":"2018-07-03T09:50:16+00:00",
                "event_info_id":0,
                "event_info_name":"",
                "info_message_template":"Msg",
                "winner_message_template":"Winner msg",
                "competition_winner_id":0,
                "info_page_template":"entering-hideout-daily.html",
                "winner_page_template":"entering-hideout-festival.html",
                "competition_effective_status":"undefined",
                "can_select_winner":true
            },
            {
                "id":28,
                "name":"Fest competition",
                "type":2,
                "start_at":"2018-06-18T00:00:00+00:00",
                "end_at":"2018-08-28T00:00:00+00:00",
                "event_info_id":1,
                "event_info_name":"Fridays at Cafe de Paris",
                "info_message_template":"message template",
                "winner_message_template":"message template ",
                "competition_winner_id":0,
                "info_page_template":"win-hideout-daily.html",
                "winner_page_template":"win-hideout-festival.html",
                "competition_effective_status":"undefined",
                "can_select_winner":true
            },
            {
                "id":27,
                "name":"Season competition",
                "type":1,
                "start_at":"2018-06-18T00:00:00+00:00",
                "end_at":"2018-08-28T00:00:00+00:00",
                "event_info_id":0,
                "event_info_name":"",
                "info_message_template":"message template",
                "winner_message_template":"message template ",
                "competition_winner_id":0,
                "info_page_template":"entering.html",
                "winner_page_template":"win.html",
                "competition_effective_status":"undefined",
                "can_select_winner":true
            },
            {
                "id":26,
                "name":"test name!",
                "type":1,
                "start_at":"2018-06-18T00:00:00+00:00",
                "end_at":"2018-08-28T00:00:00+00:00",
                "event_info_id":0,
                "event_info_name":"",
                "info_message_template":"message template",
                "winner_message_template":"message template ",
                "competition_winner_id":0,
                "info_page_template":"entering.html",
                "winner_page_template":"win.html",
                "competition_effective_status":"undefined",
                "can_select_winner":true
            },
            {
                "id":25,
                "name":"",
                "type":1,
                "start_at":"2018-07-01T15:25:35+00:00",
                "end_at":"2018-07-10T15:25:35+00:00",
                "event_info_id":0,
                "event_info_name":"",
                "info_message_template":"Some info message",
                "winner_message_template":"Some winner message",
                "competition_winner_id":0,
                "info_page_template":"entering.html",
                "winner_page_template":"win.html",
                "competition_effective_status":"undefined",
                "can_select_winner":true
            },
            {
                "id":22,
                "name":"",
                "type":1,
                "start_at":"2018-06-18T00:00:00+00:00",
                "end_at":"2018-06-25T00:00:00+00:00",
                "event_info_id":0,
                "event_info_name":"",
                "info_message_template":"Join to our New NB Competition",
                "winner_message_template":"Congratulations!",
                "competition_winner_id":0,
                "info_page_template":"entering.html",
                "winner_page_template":"win.html",
                "competition_effective_status":"undefined",
                "can_select_winner":true
            },
            {
                "id":21,
                "name":"update test",
                "type":3,
                "start_at":"2018-06-13T00:00:00+00:00",
                "end_at":"2018-06-14T00:00:00+00:00",
                "event_info_id":1131,
                "event_info_name":"quickbooks 18007541681 pos silver quickbooks contact tec-hs ",
                "info_message_template":"hi {name}",
                "winner_message_template":"you won, {name}",
                "competition_winner_id":0,
                "info_page_template":"entering-hideout-1.html",
                "winner_page_template":"win-hideout-2.html",
                "competition_effective_status":"undefined",
                "can_select_winner":true
            },
            {
                "id":20,
                "name":"Has completed winner",
                "type":2,
                "start_at":"2018-05-23T00:00:01+00:00",
                "end_at":"2018-05-23T00:00:01+00:00",
                "event_info_id":9,
                "event_info_name":"Disco 54: Slave to the Rhythm",
                "info_message_template":"message template",
                "winner_message_template":"message template ",
                "competition_winner_id":0,
                "info_page_template":"entering.html",
                "winner_page_template":"win.html",
                "competition_effective_status":"prize collected",
                "can_select_winner":false
            },
            {
                "id":18,
                "name":"",
                "type":2,
                "start_at":"2018-06-22T12:00:00+00:00",
                "end_at":"2018-06-22T12:00:01+00:00",
                "event_info_id":823,
                "event_info_name":"Rock n Roll Jive Class & Dancing",
                "info_message_template":"msg",
                "winner_message_template":"winner msg",
                "competition_winner_id":0,
                "info_page_template":"",
                "winner_page_template":"",
                "competition_effective_status":"undefined",
                "can_select_winner":true
            },
            {
                "id":17,
                "name":"",
                "type":2,
                "start_at":"2018-06-22T12:00:00+00:00",
                "end_at":"2018-06-22T12:00:01+00:00",
                "event_info_id":823,
                "event_info_name":"Rock n Roll Jive Class & Dancing",
                "info_message_template":"msg",
                "winner_message_template":"winner msg",
                "competition_winner_id":0,
                "info_page_template":"",
                "winner_page_template":"",
                "competition_effective_status":"undefined",
                "can_select_winner":true
            },
            {
                "id":16,
                "name":"",
                "type":2,
                "start_at":"2018-06-22T12:00:00+00:00",
                "end_at":"2018-06-22T12:00:01+00:00",
                "event_info_id":823,
                "event_info_name":"Rock n Roll Jive Class & Dancing",
                "info_message_template":"msg",
                "winner_message_template":"winner msg",
                "competition_winner_id":0,
                "info_page_template":"",
                "winner_page_template":"",
                "competition_effective_status":"undefined",
                "can_select_winner":true
            },
            {
                "id":15,
                "name":"",
                "type":2,
                "start_at":"2018-06-22T12:00:00+00:00",
                "end_at":"2018-06-22T12:00:01+00:00",
                "event_info_id":823,
                "event_info_name":"Rock n Roll Jive Class & Dancing",
                "info_message_template":"msg",
                "winner_message_template":"winner msg",
                "competition_winner_id":0,
                "info_page_template":"",
                "winner_page_template":"",
                "competition_effective_status":"undefined",
                "can_select_winner":true
            },
            {
                "id":14,
                "name":"",
                "type":2,
                "start_at":"2018-06-22T12:00:00+00:00",
                "end_at":"2018-06-22T12:00:01+00:00",
                "event_info_id":823,
                "event_info_name":"Rock n Roll Jive Class & Dancing",
                "info_message_template":"msg",
                "winner_message_template":"winner msg",
                "competition_winner_id":0,
                "info_page_template":"",
                "winner_page_template":"",
                "competition_effective_status":"undefined",
                "can_select_winner":true
            },
            {
                "id":13,
                "name":"",
                "type":2,
                "start_at":"2018-06-22T12:00:00+00:00",
                "end_at":"2018-06-22T12:00:01+00:00",
                "event_info_id":823,
                "event_info_name":"Rock n Roll Jive Class & Dancing",
                "info_message_template":"msg",
                "winner_message_template":"winner msg",
                "competition_winner_id":0,
                "info_page_template":"",
                "winner_page_template":"",
                "competition_effective_status":"undefined",
                "can_select_winner":true
            },
            {
                "id":12,
                "name":"",
                "type":2,
                "start_at":"2018-06-22T12:00:00+00:00",
                "end_at":"2018-06-22T12:00:01+00:00",
                "event_info_id":823,
                "event_info_name":"Rock n Roll Jive Class & Dancing",
                "info_message_template":"msg",
                "winner_message_template":"winner msg",
                "competition_winner_id":0,
                "info_page_template":"",
                "winner_page_template":"",
                "competition_effective_status":"undefined",
                "can_select_winner":true
            }
        ];

        _dispatch(
            {
                type: 'COMPETITIONS_LOADED',
                competitions
            }
        );
        loadCompetitionTemplates(environment);
    };
};

export const loadCompetitionTemplates = (environment = 'dev') => {
    let _dispatch, _getState;

    let url;
    let token;

    if (environment == 'live') {url = `https://api.tagmix.me/api/admin/competitions/page-templates`;
        token = 'lUfiMLSvLQcowgQlhnKjHTiLF3yQtFblzkONV7Ng2KRlYSi5wzvs28GIqeX8' }
    if (environment == 'staging') {url = `https://staging-api.tagmix.me/api/admin/competitions/page-templates`;
        token = 'iMmsNZBlQoWS88CjhsJNSqpyTfu2avyNeEGDWx30ezieKaEbmj4ddmEsSFkS' }
    if (environment == 'dev') { url = `https://dev-api.tagmix.me/api/admin/competitions/page-templates`;
        token = '85lWjpH4KrjKr5KEWrHnlUwmo6WcIrHunTMQn0tWBPMBxxWs1KvHOce6CSGM' }

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let templates = ["404.html","entering-hideout-daily.html","entering-hideout-festival.html","entering.html","win-hideout-daily.html","win-hideout-festival.html","win.html"]

        _dispatch(
            {
                type: 'COMPETITION_TEMPLATES_LOADED',
                templates
            }
        );
    };
};

export const changeCurrentCompetition = (competitionId) => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(
            {
                type: 'CHANGE_CURRENT_COMPETITION',
                currentCompetition: competitionId
            }
        );
    };
};

export const loadVenueEvents = (venue_id, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let venueEvents = [
            {
                "id":2242,
                "event_name":"Freaky Wednesdays",
                "description":"FreakyWednesdays we are open for 1 night only FOOTBALL TIME...IS COMING HOME   IS COMING HOME FREE ENTRY FROM 7PM TILL MIDNIGHT PARTY GOES TILL 4AM",
                "start_at":"2018-07-11T19:00:00+00:00",
                "end_at":"2018-07-12T04:00:00+00:00",
                "image_url":"https://d31fr2pwly4c4s.cloudfront.net/f/e/2/1077927_0_freaky-wednesdays_th.jpg",
                "link":"https://www.skiddle.com/whats-on/London/Club-Aquarium-/Freaky-Wednesdays/13273323/",
                "venue_id":101015,
                "is_partner_event":false
            },
            {
                "id":3103,
                "event_name":"freaky wednesdays ",
                "description":"The Ultimate Night For Students And Tourists In Shoreditch DJ URBANO DJ PP+ Guesst Playing  Hip-Hop > R&B > Charts Commercial> House all night long",
                "start_at":"2018-08-29T23:00:00+00:00",
                "end_at":"2018-08-30T04:00:00+00:00",
                "image_url":"https://d31fr2pwly4c4s.cloudfront.net/f/3/3/1091096_1_freaky-wednesdays-_th.jpg",
                "link":"https://www.skiddle.com/whats-on/London/Club-Aquarium-/freaky-wednesdays-/13305415/",
                "venue_id":101015,
                "is_partner_event":false
            }
        ]

        _dispatch(
            {
                type: 'VENUE_EVENTS_LOADED',
                venueEvents
            }
        );
    };
};

export const getCompetitionDetails = (competition_id, environment = 'dev', page = 1) => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let competitionPaginationDetails = {
            "total":134,
            "per_page":"10",
            "current_page":1,
            "last_page":14,
            "next_page_url":"http://api.tagmix.me/api/admin/competitions/mixes?page=2",
            "prev_page_url":null
        }

        let competitionMixDetails = [
            {
                "id":3570,
                "link":"https://s3-eu-west-2.amazonaws.com/tagmix-prod/1177/59881ab5608c2ebd7d1f672e36235a9d.mp4",
                "preview_image":"https://cdn.tagmix.me/1177/d18c89ffe904c737477e2dedd5294ffe.jpeg",
                "shareable_link":"https://cdn.tagmix.me/1177/59881ab5608c2ebd7d1f672e36235a9d.mp4",
                "preview_image_full":"https://cdn.tagmix.me/1177/edabf6890050ba2afa0be8a5d6d52a5a.jpeg",
                "status":"accepted",
                "orientation":"portrait",
                "likes_count":0,
                "comments_count":0,
                "is_liked":false,
                "created_at":"2018-06-27T14:09:43+00:00",
                "author":{
                    "id":1177,
                    "email":"xxx@hotmail.co.uk",
                    "user_type":"user",
                    "name":"Stephanie Whitfield",
                    "first_name":"Stephanie",
                    "last_name":"Whitfield",
                    "gender":"female",
                    "avatar":"https://graph.facebook.com/v2.8/10211819251343012/picture?type=normal",
                    "birthday":"1997-09-26",
                    "max_local_user_status":"undefined",
                    "max_global_user_status":"undefined"
                },
                "max_global_mix_status":"undefined",
                "local_mix_status":"undefined"
            },
            {
                "id":3571,
                "link":"https://s3-eu-west-2.amazonaws.com/tagmix-prod/1519/d714b310238feb29d496395c8f814eae.mp4",
                "preview_image":"https://cdn.tagmix.me/1519/605b111a4f1b1b6dee2522a983847db0.jpeg",
                "shareable_link":"https://cdn.tagmix.me/1519/d714b310238feb29d496395c8f814eae.mp4",
                "preview_image_full":"https://cdn.tagmix.me/1519/107381f08e51d9713402e60cf56df49c.jpeg",
                "status":"accepted",
                "orientation":"portrait",
                "likes_count":0,
                "comments_count":0,
                "is_liked":false,
                "created_at":"2018-06-27T14:12:37+00:00",
                "author":{
                    "id":1519,
                    "email":"xxx@hotmail.com",
                    "user_type":"user",
                    "name":"琪琪 Man",
                    "first_name":"琪琪",
                    "last_name":"Man",
                    "gender":"female",
                    "avatar":"https://tagmix-prod.s3.eu-west-2.amazonaws.com/1519/avatar/de03d78b3c4397366f1b773b0704365c.jpeg",
                    "birthday":"1985-09-07",
                    "max_local_user_status":"expired",
                    "max_global_user_status":"undefined"
                },
                "max_global_mix_status":"undefined",
                "local_mix_status":"expired"
            },
            {
                "id":3574,
                "link":"https://s3-eu-west-2.amazonaws.com/tagmix-prod/1558/9dc11b41db00a3dc1ca0d16d1b9b22d3.mp4",
                "preview_image":"https://cdn.tagmix.me/1558/804b7e4fb332386960c5ea01b8209b7f.jpeg",
                "shareable_link":"https://cdn.tagmix.me/1558/9dc11b41db00a3dc1ca0d16d1b9b22d3.mp4",
                "preview_image_full":"https://cdn.tagmix.me/1558/b15d805dd3fad0ba64500c6530f089f5.jpeg",
                "status":"accepted",
                "orientation":"landscape",
                "likes_count":0,
                "comments_count":0,
                "is_liked":false,
                "created_at":"2018-06-27T14:35:50+00:00",
                "author":{
                    "id":1558,
                    "email":"xxx@gmail.com",
                    "user_type":"user",
                    "name":"Hallam Smith",
                    "first_name":"Hallam",
                    "last_name":"Smith",
                    "gender":"male",
                    "avatar":"https://graph.facebook.com/v2.8/1822503861160943/picture?type=normal",
                    "birthday":"1997-09-20",
                    "max_local_user_status":"undefined",
                    "max_global_user_status":"undefined"
                },
                "max_global_mix_status":"undefined",
                "local_mix_status":"undefined"
            },
            {
                "id":3578,
                "link":"https://s3-eu-west-2.amazonaws.com/tagmix-prod/1230/50a3b8afcb1e44549cbbeb6119c2f4ba.mp4",
                "preview_image":"https://cdn.tagmix.me/1230/833046a148cb6a74821a3433f20a896b.jpeg",
                "shareable_link":"https://cdn.tagmix.me/1230/50a3b8afcb1e44549cbbeb6119c2f4ba.mp4",
                "preview_image_full":"https://cdn.tagmix.me/1230/62219317662f98973a5453683c4e7900.jpeg",
                "status":"accepted",
                "orientation":"landscape",
                "likes_count":0,
                "comments_count":0,
                "is_liked":false,
                "created_at":"2018-06-27T14:45:54+00:00",
                "author":{
                    "id":1230,
                    "email":"xxx@hotmail.com",
                    "user_type":"user",
                    "name":"sam ripley",
                    "first_name":"sam",
                    "last_name":"ripley",
                    "gender":"female",
                    "avatar":"https://graph.facebook.com/v2.8/10156504849199740/picture?type=normal",
                    "birthday":"1987-06-11",
                    "max_local_user_status":"undefined",
                    "max_global_user_status":"undefined"
                },
                "max_global_mix_status":"undefined",
                "local_mix_status":"undefined"
            },
            {
                "id":3579,
                "link":"https://s3-eu-west-2.amazonaws.com/tagmix-prod/1230/99e9d4c96aa8b6d83719282b16d0cc06.mp4",
                "preview_image":"https://cdn.tagmix.me/1230/101a925e266c0f8735dedb54aa0952b2.jpeg",
                "shareable_link":"https://cdn.tagmix.me/1230/99e9d4c96aa8b6d83719282b16d0cc06.mp4",
                "preview_image_full":"https://cdn.tagmix.me/1230/2461cd754f2717bba68f7d332310fd7c.jpeg",
                "status":"accepted",
                "orientation":"landscape",
                "likes_count":0,
                "comments_count":0,
                "is_liked":false,
                "created_at":"2018-06-27T14:46:48+00:00",
                "author":{
                    "id":1230,
                    "email":"xxx@hotmail.com",
                    "user_type":"user",
                    "name":"sam ripley",
                    "first_name":"sam",
                    "last_name":"ripley",
                    "gender":"female",
                    "avatar":"https://graph.facebook.com/v2.8/10156504849199740/picture?type=normal",
                    "birthday":"1987-06-11",
                    "max_local_user_status":"undefined",
                    "max_global_user_status":"undefined"
                },
                "max_global_mix_status":"undefined",
                "local_mix_status":"undefined"
            },
            {
                "id":3582,
                "link":"https://s3-eu-west-2.amazonaws.com/tagmix-prod/1724/36ff1b35a129477aa55b80c4430f80f0.mp4",
                "preview_image":"https://cdn.tagmix.me/1724/4a910b19ac3b96025b64770c0a3c0de4.jpeg",
                "shareable_link":"https://cdn.tagmix.me/1724/36ff1b35a129477aa55b80c4430f80f0.mp4",
                "preview_image_full":"https://cdn.tagmix.me/1724/4d6f345b00dad4047fe9f023294b6cca.jpeg",
                "status":"accepted",
                "orientation":"portrait",
                "likes_count":0,
                "comments_count":0,
                "is_liked":false,
                "created_at":"2018-06-27T15:08:07+00:00",
                "author":{
                    "id":1724,
                    "email":"xxx@hotmail.co.uk",
                    "user_type":"user",
                    "name":"Dizz Logongo",
                    "first_name":"Dizz",
                    "last_name":"Logongo",
                    "gender":"male",
                    "avatar":"https://graph.facebook.com/v2.8/1736885513096553/picture?type=normal",
                    "birthday":null,
                    "max_local_user_status":"undefined",
                    "max_global_user_status":"undefined"
                },
                "max_global_mix_status":"undefined",
                "local_mix_status":"undefined"
            },
            {
                "id":3586,
                "link":"https://s3-eu-west-2.amazonaws.com/tagmix-prod/944/35dc9d4ec12a444d88664035ca14500b.mp4",
                "preview_image":"https://cdn.tagmix.me/944/78ec6584ad1c8ad2f11b5be8edb24b8e.jpeg",
                "shareable_link":"https://cdn.tagmix.me/944/35dc9d4ec12a444d88664035ca14500b.mp4",
                "preview_image_full":"https://cdn.tagmix.me/944/f9a97574aa2e47f711b761cfb48cad37.jpeg",
                "status":"accepted",
                "orientation":"portrait",
                "likes_count":0,
                "comments_count":0,
                "is_liked":false,
                "created_at":"2018-06-27T15:19:01+00:00",
                "author":{
                    "id":944,
                    "email":"xxx@hotmail.co.uk",
                    "user_type":"user",
                    "name":"kirsty hoare",
                    "first_name":"kirsty",
                    "last_name":"hoare",
                    "gender":"female",
                    "avatar":"",
                    "birthday":"1994-10-08",
                    "max_local_user_status":"undefined",
                    "max_global_user_status":"undefined"
                },
                "max_global_mix_status":"undefined",
                "local_mix_status":"undefined"
            },
            {
                "id":3588,
                "link":"https://s3-eu-west-2.amazonaws.com/tagmix-prod/1521/0c91de576b0a27ed9225d60aed24ce08.mp4",
                "preview_image":"https://cdn.tagmix.me/1521/8da28e5bd5a0c8ffa0d8b091dccf95d7.jpeg",
                "shareable_link":"https://cdn.tagmix.me/1521/0c91de576b0a27ed9225d60aed24ce08.mp4",
                "preview_image_full":"https://cdn.tagmix.me/1521/7bfa3011e6992248761abfa1b3331082.jpeg",
                "status":"accepted",
                "orientation":"portrait",
                "likes_count":0,
                "comments_count":0,
                "is_liked":false,
                "created_at":"2018-06-27T15:22:42+00:00",
                "author":{
                    "id":1521,
                    "email":"xxx@yahoo.co.uk",
                    "user_type":"user",
                    "name":"Stephen Watson",
                    "first_name":"Stephen",
                    "last_name":"Watson",
                    "gender":"male",
                    "avatar":"https://graph.facebook.com/v2.8/10155885633548650/picture?type=normal",
                    "birthday":"1987-05-19",
                    "max_local_user_status":"undefined",
                    "max_global_user_status":"undefined"
                },
                "max_global_mix_status":"undefined",
                "local_mix_status":"undefined"
            },
            {
                "id":3589,
                "link":"https://s3-eu-west-2.amazonaws.com/tagmix-prod/1614/e303949928f6d20b9712064331768c98.mp4",
                "preview_image":"https://cdn.tagmix.me/1614/250e83024217b46ca0fca7f2776dd137.jpeg",
                "shareable_link":"https://cdn.tagmix.me/1614/e303949928f6d20b9712064331768c98.mp4",
                "preview_image_full":"https://cdn.tagmix.me/1614/eb2c0b395962729beb91feec5f872180.jpeg",
                "status":"accepted",
                "orientation":"portrait",
                "likes_count":0,
                "comments_count":0,
                "is_liked":false,
                "created_at":"2018-06-27T15:24:01+00:00",
                "author":{
                    "id":1614,
                    "email":"xxx@hotmail.co.uk",
                    "user_type":"user",
                    "name":"Max James",
                    "first_name":"Max",
                    "last_name":"James",
                    "gender":"male",
                    "avatar":"https://graph.facebook.com/v2.8/10156051418079442/picture?type=normal",
                    "birthday":null,
                    "max_local_user_status":"undefined",
                    "max_global_user_status":"undefined"
                },
                "max_global_mix_status":"undefined",
                "local_mix_status":"undefined"
            },
            {
                "id":3590,
                "link":"https://s3-eu-west-2.amazonaws.com/tagmix-prod/6/f55f18e59ccf3ff9caf99d8014132376.mp4",
                "preview_image":"https://cdn.tagmix.me/6/2be0e00115ed67f2026cbc1a26b2b6d9.jpeg",
                "shareable_link":"https://cdn.tagmix.me/6/f55f18e59ccf3ff9caf99d8014132376.mp4",
                "preview_image_full":"https://cdn.tagmix.me/6/9c7e5b2a29c41254c5089eff72aff805.jpeg",
                "status":"accepted",
                "orientation":"landscape",
                "likes_count":0,
                "comments_count":0,
                "is_liked":false,
                "created_at":"2018-06-27T15:24:28+00:00",
                "author":{
                    "id":6,
                    "email":null,
                    "user_type":"user",
                    "name":"Andy Dean",
                    "first_name":"Andy",
                    "last_name":"Dean",
                    "gender":"male",
                    "avatar":"https://graph.facebook.com/v2.8/10158511491235441/picture?type=normal",
                    "birthday":"1963-07-15",
                    "max_local_user_status":"undefined",
                    "max_global_user_status":"prize collected"
                },
                "max_global_mix_status":"undefined",
                "local_mix_status":"undefined"
            }
        ]


        _dispatch(
            {
                type: 'COMPETITION_MIX_DETAILS_LOADED',
                competitionMixDetails
            }
        );
        _dispatch(
            {
                type: 'COMPETITION_PAGINATION_DETAILS_LOADED',
                competitionPaginationDetails
            }
        );
    };
};

export const getCompetitionWinners = (competition_id, environment = 'dev', page = 1) => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let competitionMixWinners = [
            {
                "id":13,
                "status":"expired",
                "expired_at":"2018-06-28T15:39:03+00:00",
                "collected_at":null,
                "contact_details":"",
                "competition_user_id":264,
                "can_select_winner":true,
                "mix_id":3571,
                "mix":{
                    "id":3571,
                    "link":"https://s3-eu-west-2.amazonaws.com/tagmix-prod/1519/d714b310238feb29d496395c8f814eae.mp4",
                    "preview_image":"https://cdn.tagmix.me/1519/605b111a4f1b1b6dee2522a983847db0.jpeg",
                    "shareable_link":"https://cdn.tagmix.me/1519/d714b310238feb29d496395c8f814eae.mp4",
                    "preview_image_full":"https://cdn.tagmix.me/1519/107381f08e51d9713402e60cf56df49c.jpeg",
                    "status":"accepted",
                    "orientation":"portrait",
                    "likes_count":0,
                    "comments_count":0,
                    "is_liked":false,
                    "created_at":"2018-06-27T14:12:37+00:00",
                    "author":{
                        "id":1519,
                        "email":"xxx@hotmail.com",
                        "user_type":"user",
                        "name":"琪琪 Man",
                        "first_name":"琪琪",
                        "last_name":"Man",
                        "gender":"female",
                        "avatar":"https://tagmix-prod.s3.eu-west-2.amazonaws.com/1519/avatar/de03d78b3c4397366f1b773b0704365c.jpeg",
                        "birthday":"1985-09-07",
                        "is_new":false
                    }
                }
            }
        ]

        let competitionPaginationWinners = {
            "total":1,
            "per_page":15,
            "current_page":1,
            "last_page":1,
            "next_page_url":null,
            "prev_page_url":null
        }

        _dispatch(
            {
                type: 'COMPETITION_MIX_WINNERS_LOADED',
                competitionMixWinners
            }
        );
        _dispatch(
            {
                type: 'COMPETITION_PAGINATION_WINNER_LOADED',
                competitionPaginationWinners
            }
        );
    };
};

export const saveCompetition = (type, start_time, end_time, info_message_template, winner_message_template, competition_name, info_page_template, winner_page_template, event_info_id, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(loadCompetitions());
    }
};

export const deleteCompetition = (competitionId, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(loadCompetitions());
    }
};

export const chooseWinner = (competitionId, mixId, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(getCompetitionWinners(competitionId, environment, 1));
    }
};

export const editCompetition = (competitionId, competition_name, start_time, end_time, info_message_template, winner_message_template, infoTemplate, winnerTemplate, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(loadCompetitions());
    }
};

export const winnerSelected = (winner_id, competition_id, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(getCompetitionWinners(competition_id, environment, 1));
    }
};

export const winnerApproved = (winner_id, competition_id, winnerDetails, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(getCompetitionWinners(competition_id, environment, 1));
    }
};

export const winnerCollectedPrize = (winner_id, competition_id, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(getCompetitionWinners(competition_id, environment, 1));
    }
};
