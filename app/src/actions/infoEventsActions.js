
export const loadPromoters = (environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let promoters = [
            {
                "id":20,
                "name":"Boiler Room",
                "created_at":"2018-04-19T12:08:45.000Z",
                "updated_at":"2018-04-19T12:08:45.000Z"
            },
            {
                "id":44,
                "name":"Craig David",
                "created_at":"2018-04-19T12:08:45.000Z",
                "updated_at":"2018-04-19T12:08:45.000Z"
            },
            {
                "id":24,
                "name":"Defected",
                "created_at":"2018-04-19T12:08:45.000Z",
                "updated_at":"2018-04-19T12:08:45.000Z"
            },
            {
                "id":21,
                "name":"DJ Mag",
                "created_at":"2018-04-19T12:08:45.000Z",
                "updated_at":"2018-04-19T12:08:45.000Z"
            },
            {
                "id":23,
                "name":"Emerging Ibiza",
                "created_at":"2018-04-19T12:08:45.000Z",
                "updated_at":"2018-04-19T12:08:45.000Z"
            },
            {
                "id":22,
                "name":"IMS",
                "created_at":"2018-04-19T12:08:45.000Z",
                "updated_at":"2018-04-19T12:08:45.000Z"
            },
            {
                "id":19,
                "name":"promoter_01",
                "created_at":"2018-04-19T12:08:45.000Z",
                "updated_at":"2018-04-19T12:08:45.000Z"
            },
            {
                "id":37,
                "name":"Tomorrowland",
                "created_at":"2018-04-19T12:08:45.000Z",
                "updated_at":"2018-04-19T12:08:45.000Z"
            }
        ]

        _dispatch(
            {
                type: 'PROMOTERS_LOADED',
                promoters: promoters
            }
        );
    };
};

export const loadInfoEvents = (environment = 'dev', page = 1) => {
    let _dispatch, _getState;


    let url;
    let token;
    if (environment == 'live') {url = `https://81nbkn6u38.execute-api.eu-west-2.amazonaws.com/live?page=${page}`;
        token = 'lUfiMLSvLQcowgQlhnKjHTiLF3yQtFblzkONV7Ng2KRlYSi5wzvs28GIqeX8' }
    if (environment == 'staging') {url = `https://81nbkn6u38.execute-api.eu-west-2.amazonaws.com/staging?page=${page}`;
        token = 'iMmsNZBlQoWS88CjhsJNSqpyTfu2avyNeEGDWx30ezieKaEbmj4ddmEsSFkS' }
    if (environment == 'dev') { url = `https://81nbkn6u38.execute-api.eu-west-2.amazonaws.com/development?page=${page}`;
        token = '85lWjpH4KrjKr5KEWrHnlUwmo6WcIrHunTMQn0tWBPMBxxWs1KvHOce6CSGM' }

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let infoEvents = {
            "currentPage":"1",
            "totalPages":319,
            "data":[
                {
                    "id":3179,
                    "source_id":13269244,
                    "source_name":"event_skiddle",
                    "event_name":"Student Night at Cafe de Paris",
                    "description":"Free Drink Before Midnight! 50% Off Drinks ALL NIGHT! Join hundreds of Students this Friday and party at one London's most iconic venues! ",
                    "image_url":"https://d31fr2pwly4c4s.cloudfront.net/7/c/9/1076157_1_student-night-at-cafe-de-paris_th.jpg",
                    "link":"https://www.skiddle.com/whats-on/London/Cafe-De-Paris/Student-Night-at-Cafe-de-Paris/13269244/",
                    "venue_id":100677,
                    "venue_source_id":971,
                    "venue_source":"skiddle",
                    "start_at":"2018-09-07T22:30:00.000Z",
                    "end_at":"2018-09-08T03:00:00.000Z",
                    "promoter_id":0,
                    "is_partner_event":0,
                    "venue_name":"Cafe De Paris"
                },
                {
                    "id":3178,
                    "source_id":13295421,
                    "source_name":"event_skiddle",
                    "event_name":"Blissful Thinking ",
                    "description":"Blissful Thinking begin their AW18 residency at: The Kings Head Members Club.",
                    "image_url":"https://d31fr2pwly4c4s.cloudfront.net/9/9/8/1087140_1_blissful-thinking-_th.jpg",
                    "link":"https://www.skiddle.com/whats-on/London/The-Kings-Head-Members-Club/Blissful-Thinking-/13295421/",
                    "venue_id":101111,
                    "venue_source_id":88951,
                    "venue_source":"skiddle",
                    "start_at":"2018-09-01T22:00:00.000Z",
                    "end_at":"2018-09-02T05:00:00.000Z",
                    "promoter_id":0,
                    "is_partner_event":0,
                    "venue_name":"The Kings Head Members Club"
                },
                {
                    "id":3177,
                    "source_id":13283802,
                    "source_name":"event_skiddle",
                    "event_name":"The Reflex",
                    "description":"We're embarking on a journey back to the 60&#8217;s for a Summer Of Love party with The Reflex, showcasing all things Funk, Soul, Disco, House & more!",
                    "image_url":"https://d31fr2pwly4c4s.cloudfront.net/1/d/c/1081885_1_brixtons-summer-of-love-w-the-reflex_th.jpg",
                    "link":"https://www.skiddle.com/whats-on/London/Brixton-Jamm/The-Reflex/13283802/",
                    "venue_id":100640,
                    "venue_source_id":11337,
                    "venue_source":"skiddle",
                    "start_at":"2018-09-08T16:00:00.000Z",
                    "end_at":"2018-09-09T05:00:00.000Z",
                    "promoter_id":0,
                    "is_partner_event":0,
                    "venue_name":"Brixton Jamm"
                },
                {
                    "id":3176,
                    "source_id":13271306,
                    "source_name":"event_skiddle",
                    "event_name":"Not Another Indie Disco - 80s v 90s Special",
                    "description":"London's favourite weekly indie disco host a 80s v 90s throwback night!",
                    "image_url":"https://d31fr2pwly4c4s.cloudfront.net/6/b/a/1076851_1_not-another-indie-disco-_th.jpg",
                    "link":"https://www.skiddle.com/whats-on/London/O2-Academy-2-Islington/Not-Another-Indie-Disco---80s-v-90s-Special/13271306/",
                    "venue_id":100641,
                    "venue_source_id":42240,
                    "venue_source":"skiddle",
                    "start_at":"2018-09-01T22:30:00.000Z",
                    "end_at":"2018-09-02T03:30:00.000Z",
                    "promoter_id":0,
                    "is_partner_event":0,
                    "venue_name":"O2 Academy 2 Islington"
                },
                {
                    "id":3175,
                    "source_id":13255595,
                    "source_name":"event_skiddle",
                    "event_name":"Made Camden: Sexy R&B, Old Skool & Anthems",
                    "description":"M.A.D.E Camden, each & every Friday Playing the best in R&B, Hip Hop, Afro beats, UK Funky, UKG House, Reggaeton & Club Classics",
                    "image_url":"https://d31fr2pwly4c4s.cloudfront.net/d/4/d/1071843_2_made-camden-rb-trap-hip-hop-bashment_th.jpg",
                    "link":"https://www.skiddle.com/whats-on/London/Fest-Camden/Made-Camden-Sexy-RB-Old-Skool--Anthems/13255595/",
                    "venue_id":100637,
                    "venue_source_id":85092,
                    "venue_source":"skiddle",
                    "start_at":"2018-09-07T22:00:00.000Z",
                    "end_at":"2018-09-08T02:30:00.000Z",
                    "promoter_id":0,
                    "is_partner_event":0,
                    "venue_name":"Fest Camden"
                }
            ]
        };

        _dispatch(
            {
                type: 'INFO_EVENTS_LOADED',
                infoEvents: infoEvents.data,
                currentPage: infoEvents.currentPage,
                totalPages: infoEvents.totalPages
            }
        );
    };
};

export const saveInfoEvent = (event_name, description, image_url, link, venue_id, start_time, end_time, promoter_id, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        //this would normally reload the data quick enough as to make the toggle seem to be instantly reactive.
        _dispatch(loadInfoEvents(environment));
    }
};

export const deleteInfoEvent = (event_id, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        //this would normally reload the data quick enough as to make the toggle seem to be instantly reactive.
        _dispatch(loadInfoEvents(environment));
    }
};

export const togglePartnerEvent = (eventId, environment = 'dev', infoEventsPage) => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        //this would normally reload the data quick enough as to make the toggle seem to be instantly reactive.
        _dispatch(loadInfoEvents(environment));
    }
};
