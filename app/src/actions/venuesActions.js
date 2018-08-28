
export const loadVenues = (environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let venues = [
            {
                "id":100631,
                "venue_name":"Souk",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-07 09:29:27",
                "latitude":51.4621,
                "longitude":-0.137165,
                "venue_type":"club"
            },
            {
                "id":100689,
                "venue_name":"Scala",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 15:33:44",
                "latitude":51.5306,
                "longitude":-0.120704,
                "venue_type":"club"
            },
            {
                "id":100670,
                "venue_name":"Ministry Of Sound",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-15 01:29:27",
                "latitude":51.4978,
                "longitude":-0.099489,
                "venue_type":"club"
            },
            {
                "id":101104,
                "venue_name":"The Curtain ",
                "date_added":"2018-08-26",
                "last_event_data_at":"2018-08-26 12:00:02",
                "latitude":51.524,
                "longitude":-0.0806547,
                "venue_type":"club"
            },
            {
                "id":100627,
                "venue_name":"Cargo",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-07 09:29:27",
                "latitude":51.5263,
                "longitude":-0.078728,
                "venue_type":"club"
            },
            {
                "id":100626,
                "venue_name":"XOYO",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-07 09:29:27",
                "latitude":51.5255,
                "longitude":-0.085632,
                "venue_type":"club"
            },
            {
                "id":100630,
                "venue_name":"The Roxy",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-07 09:29:27",
                "latitude":51.5166,
                "longitude":-0.133026,
                "venue_type":"club"
            },
            {
                "id":100652,
                "venue_name":"SO.UK",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-11 15:29:27",
                "latitude":51.4615,
                "longitude":-0.138076,
                "venue_type":"club"
            },
            {
                "id":101014,
                "venue_name":"Lotus Bar",
                "date_added":"2018-07-11",
                "last_event_data_at":"2018-08-13 00:00:02",
                "latitude":51.4636,
                "longitude":-0.133489,
                "venue_type":"club"
            },
            {
                "id":100625,
                "venue_name":"Egg London",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-07 09:29:27",
                "latitude":51.5418,
                "longitude":-0.125269,
                "venue_type":"club"
            },
            {
                "id":100633,
                "venue_name":"Piccadilly Institute",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-07 07:29:27",
                "latitude":51.5107,
                "longitude":-0.138053,
                "venue_type":"club"
            },
            {
                "id":101015,
                "venue_name":"Club Aquarium ",
                "date_added":"2018-07-11",
                "last_event_data_at":"2018-08-13 00:00:02",
                "latitude":51.526,
                "longitude":-0.085458,
                "venue_type":"club"
            },
            {
                "id":100632,
                "venue_name":"Union Club Vauxhall",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-07 09:29:27",
                "latitude":51.4869,
                "longitude":-0.12321,
                "venue_type":"club"
            },
            {
                "id":101054,
                "venue_name":"Queen Of Hoxton",
                "date_added":"2018-08-08",
                "last_event_data_at":"2018-08-23 12:00:02",
                "latitude":51.5223,
                "longitude":-0.0811886,
                "venue_type":"club"
            },
            {
                "id":101085,
                "venue_name":"Popworld Guildford",
                "date_added":"2018-08-19",
                "last_event_data_at":"2018-08-27 00:00:03",
                "latitude":51.2365,
                "longitude":-0.578031,
                "venue_type":"club"
            },
            {
                "id":100637,
                "venue_name":"Fest Camden",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-08 11:29:28",
                "latitude":51.542,
                "longitude":-0.14736,
                "venue_type":"club"
            },
            {
                "id":100963,
                "venue_name":"Dalston Roof Park",
                "date_added":"2018-06-17",
                "last_event_data_at":"2018-07-11 00:00:02",
                "latitude":51.547,
                "longitude":-0.0747556,
                "venue_type":"club"
            },
            {
                "id":100713,
                "venue_name":"The Prince Of Wales",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 13:29:28",
                "latitude":51.4616,
                "longitude":-0.115087,
                "venue_type":"club"
            },
            {
                "id":100904,
                "venue_name":"The Sunborn Yacht",
                "date_added":"2018-05-24",
                "last_event_data_at":"2018-06-08 00:00:02",
                "latitude":51.5082,
                "longitude":0.0271199,
                "venue_type":"club"
            },
            {
                "id":827,
                "venue_name":"Grow",
                "date_added":"2018-04-20",
                "last_event_data_at":null,
                "latitude":51.5442,
                "longitude":-0.0236325,
                "venue_type":"club"
            },
            {
                "id":101098,
                "venue_name":"Westminster Party Boats Ltd",
                "date_added":"2018-08-25",
                "last_event_data_at":"2018-08-28 00:00:03",
                "latitude":51.5017,
                "longitude":-0.12326,
                "venue_type":"club"
            },
            {
                "id":100649,
                "venue_name":"Floripa",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-09 11:29:28",
                "latitude":51.526,
                "longitude":-0.083602,
                "venue_type":"club"
            },
            {
                "id":100686,
                "venue_name":"The Lighthouse Bar And Club",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 15:33:44",
                "latitude":51.5262,
                "longitude":-0.0788466,
                "venue_type":"club"
            },
            {
                "id":100674,
                "venue_name":"Apples And Pears",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 15:48:53",
                "latitude":51.5169,
                "longitude":-0.0699414,
                "venue_type":"club"
            },
            {
                "id":101000,
                "venue_name":"Rolling Stock London",
                "date_added":"2018-07-06",
                "last_event_data_at":"2018-08-04 12:00:03",
                "latitude":51.5284,
                "longitude":-0.0772552,
                "venue_type":"club"
            },
            {
                "id":100741,
                "venue_name":"ZOO BAR",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 09:29:28",
                "latitude":51.5109,
                "longitude":-0.129004,
                "venue_type":"club"
            },
            {
                "id":101060,
                "venue_name":"Barrio Soho",
                "date_added":"2018-08-11",
                "last_event_data_at":"2018-08-27 12:00:02",
                "latitude":51.5142,
                "longitude":-0.136564,
                "venue_type":"club"
            },
            {
                "id":101058,
                "venue_name":"Barrio Brixton",
                "date_added":"2018-08-11",
                "last_event_data_at":"2018-08-24 00:00:03",
                "latitude":51.461,
                "longitude":-0.117317,
                "venue_type":"club"
            },
            {
                "id":100956,
                "venue_name":"The Venue Bromley Football Club",
                "date_added":"2018-06-10",
                "last_event_data_at":"2018-07-08 12:00:02",
                "latitude":51.3868,
                "longitude":0.017756,
                "venue_type":"club"
            },
            {
                "id":100653,
                "venue_name":"Paradise By Way Of Kensal Green",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-11 15:29:27",
                "latitude":51.5187,
                "longitude":-0.221945,
                "venue_type":"club"
            },
            {
                "id":100775,
                "venue_name":"Winning Post",
                "date_added":"2018-04-10",
                "last_event_data_at":"2018-04-26 21:29:28",
                "latitude":51.4478,
                "longitude":-0.355943,
                "venue_type":"club"
            },
            {
                "id":101034,
                "venue_name":"Oslo",
                "date_added":"2018-07-29",
                "last_event_data_at":"2018-08-17 12:00:03",
                "latitude":51.5472,
                "longitude":-0.055618,
                "venue_type":"club"
            },
            {
                "id":100717,
                "venue_name":"DogStar",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 07:29:28",
                "latitude":51.4616,
                "longitude":-0.112273,
                "venue_type":"club"
            },
            {
                "id":100835,
                "venue_name":"Shaka Zulu",
                "date_added":"2018-05-02",
                "last_event_data_at":"2018-05-20 12:00:03",
                "latitude":51.5415,
                "longitude":-0.146825,
                "venue_type":"club"
            },
            {
                "id":100645,
                "venue_name":"Karma",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-09 15:29:27",
                "latitude":51.5278,
                "longitude":-0.303138,
                "venue_type":"club"
            },
            {
                "id":100814,
                "venue_name":"St Moritz Club",
                "date_added":"2018-04-17",
                "last_event_data_at":"2018-05-19 00:00:03",
                "latitude":51.5145,
                "longitude":-0.135028,
                "venue_type":"club"
            },
            {
                "id":100849,
                "venue_name":"The Macbeth Of Hoxton",
                "date_added":"2018-05-06",
                "last_event_data_at":"2018-05-22 00:00:02",
                "latitude":51.5303,
                "longitude":-0.08013,
                "venue_type":"club"
            },
            {
                "id":101068,
                "venue_name":"Grosvenor Casino Luton ",
                "date_added":"2018-08-16",
                "last_event_data_at":"2018-08-27 00:00:03",
                "latitude":51.8771,
                "longitude":-0.412872,
                "venue_type":"club"
            },
            {
                "id":885,
                "venue_name":"The Venue",
                "date_added":"2018-04-26",
                "last_event_data_at":null,
                "latitude":51.4761,
                "longitude":-0.036718,
                "venue_type":"club"
            },
            {
                "id":100988,
                "venue_name":"The Dead Dolls House",
                "date_added":"2018-06-30",
                "last_event_data_at":"2018-07-28 00:00:03",
                "latitude":51.5421,
                "longitude":-0.103159,
                "venue_type":"club"
            },
            {
                "id":100944,
                "venue_name":"229 The Venue Great Portland Street W1W 5PN",
                "date_added":"2018-06-03",
                "last_event_data_at":"2018-07-03 12:00:03",
                "latitude":51.5235,
                "longitude":-0.144435,
                "venue_type":"club"
            },
            {
                "id":100719,
                "venue_name":"Fire And Lightbox Complex",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 07:29:28",
                "latitude":51.4848,
                "longitude":-0.123488,
                "venue_type":"club"
            },
            {
                "id":101108,
                "venue_name":"Club Makossa",
                "date_added":"2018-08-26",
                "last_event_data_at":"2018-08-27 00:00:03",
                "latitude":51.5495,
                "longitude":-0.0755559,
                "venue_type":"club"
            },
            {
                "id":100676,
                "venue_name":"KOKO",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 15:48:53",
                "latitude":51.5348,
                "longitude":-0.138152,
                "venue_type":"club"
            },
            {
                "id":101018,
                "venue_name":"Hoxton Square Bar And Kitchen",
                "date_added":"2018-07-15",
                "last_event_data_at":"2018-08-16 00:00:03",
                "latitude":51.5275,
                "longitude":-0.081725,
                "venue_type":"club"
            },
            {
                "id":100733,
                "venue_name":"The Victoria Dalston",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 11:29:28",
                "latitude":51.5457,
                "longitude":-0.069975,
                "venue_type":"club"
            },
            {
                "id":100677,
                "venue_name":"Cafe De Paris",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 15:48:53",
                "latitude":51.5105,
                "longitude":-0.131883,
                "venue_type":"club"
            },
            {
                "id":100691,
                "venue_name":"Fabric",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 15:33:44",
                "latitude":51.5196,
                "longitude":-0.102474,
                "venue_type":"club"
            },
            {
                "id":100642,
                "venue_name":"O2 Academy Islington",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-09 15:29:27",
                "latitude":51.5344,
                "longitude":-0.105959,
                "venue_type":"club"
            },
            {
                "id":100766,
                "venue_name":" CLF Art Cafe",
                "date_added":"2018-04-08",
                "last_event_data_at":"2018-04-26 23:29:27",
                "latitude":51.4699,
                "longitude":-0.0679964,
                "venue_type":"club"
            }
        ]

        _dispatch(
            {
                type: 'VENUES_LOADED',
                venues
            }
        );
    };
};

export const loadAllVenues = (environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let allVenues = [
            {
                "id":100631,
                "venue_name":"Souk",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-07 09:29:27",
                "latitude":51.4621,
                "longitude":-0.137165,
                "venue_type":"club"
            },
            {
                "id":100689,
                "venue_name":"Scala",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 15:33:44",
                "latitude":51.5306,
                "longitude":-0.120704,
                "venue_type":"club"
            },
            {
                "id":100670,
                "venue_name":"Ministry Of Sound",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-15 01:29:27",
                "latitude":51.4978,
                "longitude":-0.099489,
                "venue_type":"club"
            },
            {
                "id":101104,
                "venue_name":"The Curtain ",
                "date_added":"2018-08-26",
                "last_event_data_at":"2018-08-26 12:00:02",
                "latitude":51.524,
                "longitude":-0.0806547,
                "venue_type":"club"
            },
            {
                "id":100627,
                "venue_name":"Cargo",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-07 09:29:27",
                "latitude":51.5263,
                "longitude":-0.078728,
                "venue_type":"club"
            },
            {
                "id":100626,
                "venue_name":"XOYO",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-07 09:29:27",
                "latitude":51.5255,
                "longitude":-0.085632,
                "venue_type":"club"
            },
            {
                "id":100630,
                "venue_name":"The Roxy",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-07 09:29:27",
                "latitude":51.5166,
                "longitude":-0.133026,
                "venue_type":"club"
            },
            {
                "id":100652,
                "venue_name":"SO.UK",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-11 15:29:27",
                "latitude":51.4615,
                "longitude":-0.138076,
                "venue_type":"club"
            },
            {
                "id":101014,
                "venue_name":"Lotus Bar",
                "date_added":"2018-07-11",
                "last_event_data_at":"2018-08-13 00:00:02",
                "latitude":51.4636,
                "longitude":-0.133489,
                "venue_type":"club"
            },
            {
                "id":100625,
                "venue_name":"Egg London",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-07 09:29:27",
                "latitude":51.5418,
                "longitude":-0.125269,
                "venue_type":"club"
            },
            {
                "id":100633,
                "venue_name":"Piccadilly Institute",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-07 07:29:27",
                "latitude":51.5107,
                "longitude":-0.138053,
                "venue_type":"club"
            },
            {
                "id":101015,
                "venue_name":"Club Aquarium ",
                "date_added":"2018-07-11",
                "last_event_data_at":"2018-08-13 00:00:02",
                "latitude":51.526,
                "longitude":-0.085458,
                "venue_type":"club"
            },
            {
                "id":100632,
                "venue_name":"Union Club Vauxhall",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-07 09:29:27",
                "latitude":51.4869,
                "longitude":-0.12321,
                "venue_type":"club"
            },
            {
                "id":101054,
                "venue_name":"Queen Of Hoxton",
                "date_added":"2018-08-08",
                "last_event_data_at":"2018-08-23 12:00:02",
                "latitude":51.5223,
                "longitude":-0.0811886,
                "venue_type":"club"
            },
            {
                "id":101085,
                "venue_name":"Popworld Guildford",
                "date_added":"2018-08-19",
                "last_event_data_at":"2018-08-27 00:00:03",
                "latitude":51.2365,
                "longitude":-0.578031,
                "venue_type":"club"
            },
            {
                "id":100637,
                "venue_name":"Fest Camden",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-08 11:29:28",
                "latitude":51.542,
                "longitude":-0.14736,
                "venue_type":"club"
            },
            {
                "id":100963,
                "venue_name":"Dalston Roof Park",
                "date_added":"2018-06-17",
                "last_event_data_at":"2018-07-11 00:00:02",
                "latitude":51.547,
                "longitude":-0.0747556,
                "venue_type":"club"
            },
            {
                "id":100713,
                "venue_name":"The Prince Of Wales",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 13:29:28",
                "latitude":51.4616,
                "longitude":-0.115087,
                "venue_type":"club"
            },
            {
                "id":100904,
                "venue_name":"The Sunborn Yacht",
                "date_added":"2018-05-24",
                "last_event_data_at":"2018-06-08 00:00:02",
                "latitude":51.5082,
                "longitude":0.0271199,
                "venue_type":"club"
            },
            {
                "id":827,
                "venue_name":"Grow",
                "date_added":"2018-04-20",
                "last_event_data_at":null,
                "latitude":51.5442,
                "longitude":-0.0236325,
                "venue_type":"club"
            },
            {
                "id":101098,
                "venue_name":"Westminster Party Boats Ltd",
                "date_added":"2018-08-25",
                "last_event_data_at":"2018-08-28 00:00:03",
                "latitude":51.5017,
                "longitude":-0.12326,
                "venue_type":"club"
            },
            {
                "id":100649,
                "venue_name":"Floripa",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-09 11:29:28",
                "latitude":51.526,
                "longitude":-0.083602,
                "venue_type":"club"
            },
            {
                "id":100686,
                "venue_name":"The Lighthouse Bar And Club",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 15:33:44",
                "latitude":51.5262,
                "longitude":-0.0788466,
                "venue_type":"club"
            },
            {
                "id":100674,
                "venue_name":"Apples And Pears",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 15:48:53",
                "latitude":51.5169,
                "longitude":-0.0699414,
                "venue_type":"club"
            },
            {
                "id":101000,
                "venue_name":"Rolling Stock London",
                "date_added":"2018-07-06",
                "last_event_data_at":"2018-08-04 12:00:03",
                "latitude":51.5284,
                "longitude":-0.0772552,
                "venue_type":"club"
            },
            {
                "id":100741,
                "venue_name":"ZOO BAR",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 09:29:28",
                "latitude":51.5109,
                "longitude":-0.129004,
                "venue_type":"club"
            },
            {
                "id":101060,
                "venue_name":"Barrio Soho",
                "date_added":"2018-08-11",
                "last_event_data_at":"2018-08-27 12:00:02",
                "latitude":51.5142,
                "longitude":-0.136564,
                "venue_type":"club"
            },
            {
                "id":101058,
                "venue_name":"Barrio Brixton",
                "date_added":"2018-08-11",
                "last_event_data_at":"2018-08-24 00:00:03",
                "latitude":51.461,
                "longitude":-0.117317,
                "venue_type":"club"
            },
            {
                "id":100956,
                "venue_name":"The Venue Bromley Football Club",
                "date_added":"2018-06-10",
                "last_event_data_at":"2018-07-08 12:00:02",
                "latitude":51.3868,
                "longitude":0.017756,
                "venue_type":"club"
            },
            {
                "id":100653,
                "venue_name":"Paradise By Way Of Kensal Green",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-11 15:29:27",
                "latitude":51.5187,
                "longitude":-0.221945,
                "venue_type":"club"
            },
            {
                "id":100775,
                "venue_name":"Winning Post",
                "date_added":"2018-04-10",
                "last_event_data_at":"2018-04-26 21:29:28",
                "latitude":51.4478,
                "longitude":-0.355943,
                "venue_type":"club"
            },
            {
                "id":101034,
                "venue_name":"Oslo",
                "date_added":"2018-07-29",
                "last_event_data_at":"2018-08-17 12:00:03",
                "latitude":51.5472,
                "longitude":-0.055618,
                "venue_type":"club"
            },
            {
                "id":100717,
                "venue_name":"DogStar",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 07:29:28",
                "latitude":51.4616,
                "longitude":-0.112273,
                "venue_type":"club"
            },
            {
                "id":100835,
                "venue_name":"Shaka Zulu",
                "date_added":"2018-05-02",
                "last_event_data_at":"2018-05-20 12:00:03",
                "latitude":51.5415,
                "longitude":-0.146825,
                "venue_type":"club"
            },
            {
                "id":100645,
                "venue_name":"Karma",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-09 15:29:27",
                "latitude":51.5278,
                "longitude":-0.303138,
                "venue_type":"club"
            },
            {
                "id":100814,
                "venue_name":"St Moritz Club",
                "date_added":"2018-04-17",
                "last_event_data_at":"2018-05-19 00:00:03",
                "latitude":51.5145,
                "longitude":-0.135028,
                "venue_type":"club"
            },
            {
                "id":100849,
                "venue_name":"The Macbeth Of Hoxton",
                "date_added":"2018-05-06",
                "last_event_data_at":"2018-05-22 00:00:02",
                "latitude":51.5303,
                "longitude":-0.08013,
                "venue_type":"club"
            },
            {
                "id":101068,
                "venue_name":"Grosvenor Casino Luton ",
                "date_added":"2018-08-16",
                "last_event_data_at":"2018-08-27 00:00:03",
                "latitude":51.8771,
                "longitude":-0.412872,
                "venue_type":"club"
            },
            {
                "id":885,
                "venue_name":"The Venue",
                "date_added":"2018-04-26",
                "last_event_data_at":null,
                "latitude":51.4761,
                "longitude":-0.036718,
                "venue_type":"club"
            },
            {
                "id":100988,
                "venue_name":"The Dead Dolls House",
                "date_added":"2018-06-30",
                "last_event_data_at":"2018-07-28 00:00:03",
                "latitude":51.5421,
                "longitude":-0.103159,
                "venue_type":"club"
            },
            {
                "id":100944,
                "venue_name":"229 The Venue Great Portland Street W1W 5PN",
                "date_added":"2018-06-03",
                "last_event_data_at":"2018-07-03 12:00:03",
                "latitude":51.5235,
                "longitude":-0.144435,
                "venue_type":"club"
            },
            {
                "id":100719,
                "venue_name":"Fire And Lightbox Complex",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 07:29:28",
                "latitude":51.4848,
                "longitude":-0.123488,
                "venue_type":"club"
            },
            {
                "id":101108,
                "venue_name":"Club Makossa",
                "date_added":"2018-08-26",
                "last_event_data_at":"2018-08-27 00:00:03",
                "latitude":51.5495,
                "longitude":-0.0755559,
                "venue_type":"club"
            },
            {
                "id":100676,
                "venue_name":"KOKO",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 15:48:53",
                "latitude":51.5348,
                "longitude":-0.138152,
                "venue_type":"club"
            },
            {
                "id":101018,
                "venue_name":"Hoxton Square Bar And Kitchen",
                "date_added":"2018-07-15",
                "last_event_data_at":"2018-08-16 00:00:03",
                "latitude":51.5275,
                "longitude":-0.081725,
                "venue_type":"club"
            },
            {
                "id":100733,
                "venue_name":"The Victoria Dalston",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 11:29:28",
                "latitude":51.5457,
                "longitude":-0.069975,
                "venue_type":"club"
            },
            {
                "id":100677,
                "venue_name":"Cafe De Paris",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 15:48:53",
                "latitude":51.5105,
                "longitude":-0.131883,
                "venue_type":"club"
            },
            {
                "id":100691,
                "venue_name":"Fabric",
                "date_added":"2018-04-04",
                "last_event_data_at":"2018-04-27 15:33:44",
                "latitude":51.5196,
                "longitude":-0.102474,
                "venue_type":"club"
            },
            {
                "id":100642,
                "venue_name":"O2 Academy Islington",
                "date_added":"2018-04-03",
                "last_event_data_at":"2018-04-09 15:29:27",
                "latitude":51.5344,
                "longitude":-0.105959,
                "venue_type":"club"
            },
            {
                "id":100766,
                "venue_name":" CLF Art Cafe",
                "date_added":"2018-04-08",
                "last_event_data_at":"2018-04-26 23:29:27",
                "latitude":51.4699,
                "longitude":-0.0679964,
                "venue_type":"club"
            }
        ]

        _dispatch(
            {
                type: 'ALL_VENUES_LOADED',
                allVenues
            }
        );
    };
};

export const saveVenue = (venue_name, venue_type, latitude, longitude, start_time, end_time, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(loadVenues());
    }
};

export const deleteVenue = (venueId, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        _dispatch(loadVenues());
    }
};
