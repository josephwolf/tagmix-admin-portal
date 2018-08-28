
export const loadUserFlags = (page = 1, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let userIssues = {
                "pagination":{
                    "total":8,
                    "per_page":10,
                    "current_page":1,
                    "last_page":1,
                    "next_page_url":null,
                    "prev_page_url":null
                },
                "data":[
                    {
                        "id":8,
                        "issue":"others",
                        "created_at":{
                            "date":"2018-03-16 13:27:14.000000",
                            "timezone_type":3,
                            "timezone":"UTC"
                        },
                        "reporter":{
                            "id":105,
                            "email":"xxx@b.nm",
                            "user_type":"user",
                            "name":"kir5 test",
                            "first_name":"kir5",
                            "last_name":"test",
                            "gender":"other",
                            "avatar":"",
                            "birthday":"1985-01-01",
                            "is_new":false
                        },
                        "reported":{
                            "id":67,
                            "email":null,
                            "user_type":"user",
                            "name":"Liraz Axelrad",
                            "first_name":"Liraz",
                            "last_name":"Axelrad",
                            "gender":"female",
                            "avatar":"https://graph.facebook.com/v2.8/10155023982382927/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        }
                    },
                    {
                        "id":7,
                        "issue":null,
                        "created_at":{
                            "date":"2017-12-14 14:52:57.000000",
                            "timezone_type":3,
                            "timezone":"UTC"
                        },
                        "reporter":{
                            "id":42,
                            "email":null,
                            "user_type":"user",
                            "name":"Jacob McGeen",
                            "first_name":"Jacob",
                            "last_name":"McGeen",
                            "gender":"male",
                            "avatar":"https://graph.facebook.com/v2.8/1868997223424826/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        },
                        "reported":{
                            "id":52,
                            "email":null,
                            "user_type":"user",
                            "name":"Mykhailo  Tymoschenko",
                            "first_name":"Mykhailo",
                            "last_name":"Tymoschenko",
                            "gender":"male",
                            "avatar":"https://graph.facebook.com/v2.8/1512706148797127/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        }
                    },
                    {
                        "id":6,
                        "issue":null,
                        "created_at":{
                            "date":"2017-12-13 14:03:17.000000",
                            "timezone_type":3,
                            "timezone":"UTC"
                        },
                        "reporter":{
                            "id":51,
                            "email":null,
                            "user_type":"user",
                            "name":"Viktor Konstantinov",
                            "first_name":"Viktor",
                            "last_name":"Konstantinov",
                            "gender":"",
                            "avatar":"https://graph.facebook.com/v2.8/487075971676854/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        },
                        "reported":{
                            "id":52,
                            "email":null,
                            "user_type":"user",
                            "name":"Mykhailo  Tymoschenko",
                            "first_name":"Mykhailo",
                            "last_name":"Tymoschenko",
                            "gender":"male",
                            "avatar":"https://graph.facebook.com/v2.8/1512706148797127/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        }
                    },
                    {
                        "id":5,
                        "issue":null,
                        "created_at":{
                            "date":"2017-09-21 17:04:51.000000",
                            "timezone_type":3,
                            "timezone":"UTC"
                        },
                        "reporter":{
                            "id":40,
                            "email":null,
                            "user_type":"user",
                            "name":"Yalantis Tester",
                            "first_name":"Yalantis",
                            "last_name":"Tester",
                            "gender":"male",
                            "avatar":"https://graph.facebook.com/v2.8/476603446004478/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        },
                        "reported":{
                            "id":41,
                            "email":"red_w13@mail.ua",
                            "user_type":"user",
                            "name":"Ira Galata",
                            "first_name":"Ira",
                            "last_name":"Galata",
                            "gender":"female",
                            "avatar":"https://graph.facebook.com/v2.8/1973356832943634/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        }
                    },
                    {
                        "id":4,
                        "issue":null,
                        "created_at":{
                            "date":"2017-07-27 08:31:14.000000",
                            "timezone_type":3,
                            "timezone":"UTC"
                        },
                        "reporter":{
                            "id":33,
                            "email":null,
                            "user_type":"user",
                            "name":"Artem Havriushov",
                            "first_name":"Artem",
                            "last_name":"Havriushov",
                            "gender":"male",
                            "avatar":"https://graph.facebook.com/v2.8/1678014322215303/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        },
                        "reported":{
                            "id":37,
                            "email":null,
                            "user_type":"user",
                            "name":"Andrew Dean",
                            "first_name":"Andrew",
                            "last_name":"Dean",
                            "gender":"male",
                            "avatar":"https://graph.facebook.com/v2.8/10158511491235441/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        }
                    },
                    {
                        "id":3,
                        "issue":null,
                        "created_at":{
                            "date":"2017-07-12 16:25:04.000000",
                            "timezone_type":3,
                            "timezone":"UTC"
                        },
                        "reporter":{
                            "id":43,
                            "email":null,
                            "user_type":"user",
                            "name":"Anton  Vodolazkyi",
                            "first_name":"Anton",
                            "last_name":"Vodolazkyi",
                            "gender":"male",
                            "avatar":"https://graph.facebook.com/v2.8/1879740155648880/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        },
                        "reported":{
                            "id":42,
                            "email":null,
                            "user_type":"user",
                            "name":"Jacob McGeen",
                            "first_name":"Jacob",
                            "last_name":"McGeen",
                            "gender":"male",
                            "avatar":"https://graph.facebook.com/v2.8/1868997223424826/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        }
                    },
                    {
                        "id":2,
                        "issue":null,
                        "created_at":{
                            "date":"2017-07-12 14:04:08.000000",
                            "timezone_type":3,
                            "timezone":"UTC"
                        },
                        "reporter":{
                            "id":27,
                            "email":"tov.suhov@rambler.ru",
                            "user_type":"user",
                            "name":"??????? ???????",
                            "first_name":"???????",
                            "last_name":"???????",
                            "gender":"male",
                            "avatar":"https://graph.facebook.com/v2.8/1391374520882906/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        },
                        "reported":{
                            "id":29,
                            "email":null,
                            "user_type":"user",
                            "name":"Kelly Henderson",
                            "first_name":"Kelly",
                            "last_name":"Henderson",
                            "gender":"",
                            "avatar":"https://graph.facebook.com/v2.8/10158769783720204/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        }
                    },
                    {
                        "id":1,
                        "issue":null,
                        "created_at":{
                            "date":"2017-07-11 15:18:17.000000",
                            "timezone_type":3,
                            "timezone":"UTC"
                        },
                        "reporter":{
                            "id":27,
                            "email":"tov.suhov@rambler.ru",
                            "user_type":"user",
                            "name":"??????? ???????",
                            "first_name":"???????",
                            "last_name":"???????",
                            "gender":"male",
                            "avatar":"https://graph.facebook.com/v2.8/1391374520882906/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        },
                        "reported":{
                            "id":28,
                            "email":null,
                            "user_type":"user",
                            "name":"Joe Bloggs",
                            "first_name":"Joe",
                            "last_name":"Bloggs",
                            "gender":"male",
                            "avatar":"https://graph.facebook.com/v2.8/10213086991875726/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        }
                    }
                ]
            };

        _dispatch(
            {
                type: 'USER_ISSUES_LOADED',
                userIssues
            }
        );
    };
};

export const loadMixFlags = (page = 1, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let mixIssues = {
                "pagination":{
                    "total":29,
                    "per_page":10,
                    "current_page":1,
                    "last_page":3,
                    "next_page_url":"http://dev-api.tagmix.me/api/admin/reports/mix?page=2",
                    "prev_page_url":null
                },
                "data":[
                    {
                        "id":29,
                        "issue":"others",
                        "created_at":{
                            "date":"2018-04-16 12:32:19.000000",
                            "timezone_type":3,
                            "timezone":"UTC"
                        },
                        "reporter":{
                            "id":79,
                            "email":null,
                            "user_type":"user",
                            "name":"Maria Luchesko",
                            "first_name":"Maria",
                            "last_name":"Luchesko",
                            "gender":"female",
                            "avatar":"https://graph.facebook.com/v2.8/1769945353321699/picture?type=normal",
                            "birthday":"1989-01-01",
                            "is_new":false
                        },
                        "mix":{
                            "id":1099,
                            "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/79/5fa9ec2560c00b75c11810ed9f789e1f.mp4",
                            "shareable_link":"https://dev-cdn.tagmix.me/79/5fa9ec2560c00b75c11810ed9f789e1f.mp4",
                            "preview_image":"https://dev-cdn.tagmix.me/79/de664781c0c1e51c9c40de1be8c751be.jpeg",
                            "preview_image_full":"https://dev-cdn.tagmix.me/79/71fc74fde0ebd143682d00a9dfed2956.jpeg",
                            "status":"accepted",
                            "likes_count":3,
                            "is_liked":false,
                            "created_at":"2018-04-16T12:31:52+00:00",
                            "author":{
                                "id":79,
                                "email":null,
                                "user_type":"user",
                                "name":"Maria Luchesko",
                                "first_name":"Maria",
                                "last_name":"Luchesko",
                                "gender":"female",
                                "avatar":"https://graph.facebook.com/v2.8/1769945353321699/picture?type=normal",
                                "birthday":"1989-01-01",
                                "is_new":false
                            },
                            "comments_count":15,
                            "orientation":"portrait",
                            "caption":"",
                            "comments":[
                                {
                                    "id":546,
                                    "comment":"   1   ",
                                    "created_at":"2018-04-17T09:26:17+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":545,
                                    "comment":"I am very fond of music and whenever I get a chance I attend a concert.It doesn't not happen very often, because I am rather busy with my studies these days. Besides, our town is small and famous singers or bands rarely attent us.",
                                    "created_at":"2018-04-17T08:58:05+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":544,
                                    "comment":"123456789012345678901234567890123456789012345678001234567890",
                                    "created_at":"2018-04-17T08:00:07+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":543,
                                    "comment":"1234567890123456789012345678901234",
                                    "created_at":"2018-04-17T07:59:39+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":542,
                                    "comment":"                                                                            50",
                                    "created_at":"2018-04-17T07:58:06+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":541,
                                    "comment":"       5space",
                                    "created_at":"2018-04-17T07:57:28+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":540,
                                    "comment":"Д",
                                    "created_at":"2018-04-17T07:51:00+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":539,
                                    "comment":".",
                                    "created_at":"2018-04-17T07:50:32+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":538,
                                    "comment":":-) :) ;)",
                                    "created_at":"2018-04-17T07:49:52+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":537,
                                    "comment":"Sixth",
                                    "created_at":"2018-04-17T07:48:22+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":536,
                                    "comment":"Fifth",
                                    "created_at":"2018-04-17T07:48:16+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":535,
                                    "comment":"Fourth",
                                    "created_at":"2018-04-17T07:48:02+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":534,
                                    "comment":"Third",
                                    "created_at":"2018-04-17T07:47:57+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":533,
                                    "comment":" Second",
                                    "created_at":"2018-04-17T07:40:12+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":532,
                                    "comment":"First",
                                    "created_at":"2018-04-16T14:14:05+00:00",
                                    "author":{
                                        "id":79,
                                        "name":"Maria Luchesko",
                                        "avatar":"https://graph.facebook.com/v2.8/1769945353321699/picture?type=normal"
                                    }
                                }
                            ],
                            "friends":[

                            ],
                            "tags":[
                                {
                                    "id":117,
                                    "tag":"General",
                                    "label":"#General",
                                    "type":"user",
                                    "is_official":true,
                                    "mix_count":26
                                }
                            ],
                            "meta":{
                                "latitude":"48.451403369998",
                                "longitude":"35.068678100663",
                                "started_at":"2018-04-16 09:31:45",
                                "session_name":"",
                                "session_artist":"",
                                "session_thumbnail":"",
                                "session_start":"",
                                "session_end":"",
                                "session_venue":"",
                                "session_promoter":"",
                                "track_name":"",
                                "track_artist":"",
                                "album":"",
                                "spotify":"",
                                "youtube":""
                            }
                        }
                    },
                    {
                        "id":28,
                        "issue":"others",
                        "created_at":{
                            "date":"2018-03-29 15:02:59.000000",
                            "timezone_type":3,
                            "timezone":"UTC"
                        },
                        "reporter":{
                            "id":110,
                            "email":"dntgoof@hotmail.com",
                            "user_type":"user",
                            "name":"Lil Wayne",
                            "first_name":"Lil",
                            "last_name":"Wayne",
                            "gender":"male",
                            "avatar":"",
                            "birthday":"1985-01-01",
                            "is_new":false
                        },
                        "mix":{
                            "id":1068,
                            "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/108/7255311c43c6f098ca1e06624d4dd205.mp4",
                            "shareable_link":"https://dev-cdn.tagmix.me/108/7255311c43c6f098ca1e06624d4dd205.mp4",
                            "preview_image":"https://dev-cdn.tagmix.me/108/9e5be83743e0d8d51c52a98f207716e2.jpeg",
                            "preview_image_full":"https://dev-cdn.tagmix.me/108/68fb7686d10028c76f63de31ff09fd2f.jpeg",
                            "status":"accepted",
                            "likes_count":1,
                            "is_liked":false,
                            "created_at":"2018-03-28T04:33:15+00:00",
                            "author":{
                                "id":108,
                                "email":"andydean@tagmix.me",
                                "user_type":"user",
                                "name":"Andy Dean",
                                "first_name":"Andy",
                                "last_name":"Dean",
                                "gender":"male",
                                "avatar":"",
                                "birthday":"1963-07-15",
                                "is_new":false
                            },
                            "comments_count":2,
                            "orientation":"portrait",
                            "caption":"",
                            "comments":[
                                {
                                    "id":522,
                                    "comment":"Wow",
                                    "created_at":"2018-03-29T15:07:19+00:00",
                                    "author":{
                                        "id":110,
                                        "name":"Lil Wayne",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":519,
                                    "comment":"I’m enjoying this new app",
                                    "created_at":"2018-03-28T04:34:28+00:00",
                                    "author":{
                                        "id":108,
                                        "name":"Andy Dean",
                                        "avatar":""
                                    }
                                }
                            ],
                            "friends":[

                            ],
                            "tags":[
                                {
                                    "id":104,
                                    "tag":"Nicole Moudaber",
                                    "label":"#Nicole_Moudaber",
                                    "type":"Artist",
                                    "is_official":true,
                                    "mix_count":25
                                },
                                {
                                    "id":97,
                                    "tag":"Tomorrowland",
                                    "label":"#Tomorrowland",
                                    "type":"Venue",
                                    "is_official":true,
                                    "mix_count":311
                                },
                                {
                                    "id":104,
                                    "tag":"Nicole Moudaber",
                                    "label":"#Nicole_Moudaber",
                                    "type":"Artist",
                                    "is_official":true,
                                    "mix_count":25
                                },
                                {
                                    "id":97,
                                    "tag":"Tomorrowland",
                                    "label":"#Tomorrowland",
                                    "type":"Venue",
                                    "is_official":true,
                                    "mix_count":311
                                }
                            ],
                            "meta":{
                                "latitude":"38.993502340000",
                                "longitude":"1.450452310000",
                                "started_at":"2018-03-28 04:33:02",
                                "session_name":"Nicole Moudaber",
                                "session_artist":"Nicole Moudaber",
                                "session_thumbnail":"https://audio-api.tagmix.me/thumbnails/tomorrowland.jpg",
                                "session_start":"2017-08-04 23:21:18",
                                "session_end":"2017-08-05 00:21:18",
                                "session_venue":"Tomorrowland",
                                "session_promoter":"Tomorrowland",
                                "track_name":"",
                                "track_artist":"",
                                "album":"",
                                "spotify":"",
                                "youtube":""
                            }
                        }
                    },
                    {
                        "id":27,
                        "issue":"sex or violence",
                        "created_at":{
                            "date":"2018-03-29 12:58:25.000000",
                            "timezone_type":3,
                            "timezone":"UTC"
                        },
                        "reporter":{
                            "id":53,
                            "email":null,
                            "user_type":"user",
                            "name":"test se",
                            "first_name":"test",
                            "last_name":"se",
                            "gender":"male",
                            "avatar":"",
                            "birthday":"2024-01-01",
                            "is_new":false
                        },
                        "mix":{
                            "id":1072,
                            "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/64/c4a5f692069437a17ebd18a9d35e3c3d.mp4",
                            "shareable_link":"https://dev-cdn.tagmix.me/64/c4a5f692069437a17ebd18a9d35e3c3d.mp4",
                            "preview_image":"https://dev-cdn.tagmix.me/64/a2b1e8cff4c49dc4dddbf29765e88703.jpeg",
                            "preview_image_full":"https://dev-cdn.tagmix.me/64/fdaa9f316c7494253074f8850516000a.jpeg",
                            "status":"accepted",
                            "likes_count":0,
                            "is_liked":false,
                            "created_at":"2018-03-29T12:55:31+00:00",
                            "author":{
                                "id":64,
                                "email":null,
                                "user_type":"user",
                                "name":"Kirill  Alexeyenko",
                                "first_name":"Kirill",
                                "last_name":"Alexeyenko",
                                "gender":"male",
                                "avatar":"https://graph.facebook.com/v2.8/1345682942225910/picture?type=normal",
                                "birthday":null,
                                "is_new":false
                            },
                            "comments_count":6,
                            "orientation":"portrait",
                            "caption":"",
                            "comments":[
                                {
                                    "id":529,
                                    "comment":"Weoew",
                                    "created_at":"2018-03-30T09:18:27+00:00",
                                    "author":{
                                        "id":110,
                                        "name":"Lil Wayne",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":528,
                                    "comment":"Nice",
                                    "created_at":"2018-03-30T09:18:19+00:00",
                                    "author":{
                                        "id":110,
                                        "name":"Lil Wayne",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":527,
                                    "comment":"Wow",
                                    "created_at":"2018-03-30T09:18:12+00:00",
                                    "author":{
                                        "id":110,
                                        "name":"Lil Wayne",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":526,
                                    "comment":"Ho",
                                    "created_at":"2018-03-30T09:18:07+00:00",
                                    "author":{
                                        "id":110,
                                        "name":"Lil Wayne",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":525,
                                    "comment":"Hi",
                                    "created_at":"2018-03-30T09:18:05+00:00",
                                    "author":{
                                        "id":110,
                                        "name":"Lil Wayne",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":521,
                                    "comment":"Teerst",
                                    "created_at":"2018-03-29T12:56:33+00:00",
                                    "author":{
                                        "id":64,
                                        "name":"Kirill  Alexeyenko",
                                        "avatar":"https://graph.facebook.com/v2.8/1345682942225910/picture?type=normal"
                                    }
                                }
                            ],
                            "friends":[
                                {
                                    "id":65,
                                    "name":"Constantine Shturm",
                                    "first_name":"Constantine",
                                    "last_name":"Shturm",
                                    "avatar":"https://graph.facebook.com/v2.8/1515637428490308/picture?type=normal",
                                    "following_status":"undefined",
                                    "follower_status":"undefined"
                                }
                            ],
                            "tags":[
                                {
                                    "id":96,
                                    "tag":"Jamie Jones",
                                    "label":"#Jamie_Jones",
                                    "type":"Artist",
                                    "is_official":true,
                                    "mix_count":58
                                },
                                {
                                    "id":97,
                                    "tag":"Tomorrowland",
                                    "label":"#Tomorrowland",
                                    "type":"Venue",
                                    "is_official":true,
                                    "mix_count":311
                                },
                                {
                                    "id":96,
                                    "tag":"Jamie Jones",
                                    "label":"#Jamie_Jones",
                                    "type":"Artist",
                                    "is_official":true,
                                    "mix_count":58
                                },
                                {
                                    "id":97,
                                    "tag":"Tomorrowland",
                                    "label":"#Tomorrowland",
                                    "type":"Venue",
                                    "is_official":true,
                                    "mix_count":311
                                }
                            ],
                            "meta":{
                                "latitude":"48.451621274203",
                                "longitude":"35.068221608095",
                                "started_at":"2018-03-29 12:55:19",
                                "session_name":"Jamie Jones",
                                "session_artist":"Jamie Jones",
                                "session_thumbnail":"https://audio-api.tagmix.me/thumbnails/tomorrowland.jpg",
                                "session_start":"2017-08-04 23:11:02",
                                "session_end":"2017-08-05 00:11:02",
                                "session_venue":"Tomorrowland",
                                "session_promoter":"Tomorrowland",
                                "track_name":"",
                                "track_artist":"",
                                "album":"",
                                "spotify":"",
                                "youtube":""
                            }
                        }
                    },
                    {
                        "id":26,
                        "issue":"spam",
                        "created_at":{
                            "date":"2018-03-28 13:21:52.000000",
                            "timezone_type":3,
                            "timezone":"UTC"
                        },
                        "reporter":{
                            "id":107,
                            "email":"test1@test.com",
                            "user_type":"user",
                            "name":"kirtedt testistedt",
                            "first_name":"kirtedt",
                            "last_name":"testistedt",
                            "gender":"female",
                            "avatar":"",
                            "birthday":"1985-01-01",
                            "is_new":false
                        },
                        "mix":{
                            "id":1070,
                            "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/54/740eb34adf38660e546c5792a32fac65.mp4",
                            "shareable_link":"https://dev-cdn.tagmix.me/54/740eb34adf38660e546c5792a32fac65.mp4",
                            "preview_image":"https://dev-cdn.tagmix.me/54/67ef7d5f524146b3abc28adb6dc5fa2d.jpeg",
                            "preview_image_full":"https://dev-cdn.tagmix.me/54/39d69e689805a047370c23d7d3a4c545.jpeg",
                            "status":"accepted",
                            "likes_count":0,
                            "is_liked":false,
                            "created_at":"2018-03-28T10:46:36+00:00",
                            "author":{
                                "id":54,
                                "email":null,
                                "user_type":"user",
                                "name":"tester3 test",
                                "first_name":"tester3",
                                "last_name":"test",
                                "gender":"female",
                                "avatar":"https://graph.facebook.com/v2.8/1723728874603560/picture?type=normal",
                                "birthday":"1985-01-01",
                                "is_new":false
                            },
                            "comments_count":0,
                            "orientation":"portrait",
                            "caption":"",
                            "comments":[

                            ],
                            "friends":[
                                {
                                    "id":42,
                                    "name":"Jacob McGeen",
                                    "first_name":"Jacob",
                                    "last_name":"McGeen",
                                    "avatar":"https://graph.facebook.com/v2.8/1868997223424826/picture?type=normal",
                                    "following_status":"undefined",
                                    "follower_status":"undefined"
                                }
                            ],
                            "tags":[
                                {
                                    "id":106,
                                    "tag":"Solomun",
                                    "label":"#Solomun",
                                    "type":"Name",
                                    "is_official":true,
                                    "mix_count":19
                                },
                                {
                                    "id":97,
                                    "tag":"Tomorrowland",
                                    "label":"#Tomorrowland",
                                    "type":"Venue",
                                    "is_official":true,
                                    "mix_count":311
                                },
                                {
                                    "id":106,
                                    "tag":"Solomun",
                                    "label":"#Solomun",
                                    "type":"Name",
                                    "is_official":true,
                                    "mix_count":19
                                },
                                {
                                    "id":97,
                                    "tag":"Tomorrowland",
                                    "label":"#Tomorrowland",
                                    "type":"Venue",
                                    "is_official":true,
                                    "mix_count":311
                                }
                            ],
                            "meta":{
                                "latitude":"48.451494012943",
                                "longitude":"35.068339881787",
                                "started_at":"2018-03-28 10:46:18",
                                "session_name":"Solomun",
                                "session_artist":"Solomun",
                                "session_thumbnail":"https://audio-api.tagmix.me/thumbnails/tomorrowland.jpg",
                                "session_start":"2017-08-04 23:12:55",
                                "session_end":"2017-08-05 00:12:55",
                                "session_venue":"Tomorrowland",
                                "session_promoter":"Tomorrowland",
                                "track_name":"",
                                "track_artist":"",
                                "album":"",
                                "spotify":"",
                                "youtube":""
                            }
                        }
                    },
                    null,
                    null,
                    null,
                    null,
                    {
                        "id":21,
                        "issue":"harassment or bullying",
                        "created_at":{
                            "date":"2018-03-12 14:32:37.000000",
                            "timezone_type":3,
                            "timezone":"UTC"
                        },
                        "reporter":{
                            "id":64,
                            "email":null,
                            "user_type":"user",
                            "name":"Kirill  Alexeyenko",
                            "first_name":"Kirill",
                            "last_name":"Alexeyenko",
                            "gender":"male",
                            "avatar":"https://graph.facebook.com/v2.8/1345682942225910/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        },
                        "mix":{
                            "id":926,
                            "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/65/bc9975ad7ef02194bcb69a3152f7a5a3.mp4",
                            "shareable_link":"https://dev-cdn.tagmix.me/65/bc9975ad7ef02194bcb69a3152f7a5a3.mp4",
                            "preview_image":"https://dev-cdn.tagmix.me/65/37a8bf010a29638679952caf30c179ff.jpeg",
                            "preview_image_full":"https://dev-cdn.tagmix.me/65/60dc9f9425d0e1c39edaafdcafe63f36.jpeg",
                            "status":"accepted",
                            "likes_count":1,
                            "is_liked":false,
                            "created_at":"2018-01-12T15:47:50+00:00",
                            "author":{
                                "id":65,
                                "email":null,
                                "user_type":"user",
                                "name":"Constantine Shturm",
                                "first_name":"Constantine",
                                "last_name":"Shturm",
                                "gender":"male",
                                "avatar":"https://graph.facebook.com/v2.8/1515637428490308/picture?type=normal",
                                "birthday":null,
                                "is_new":false
                            },
                            "comments_count":0,
                            "orientation":"portrait",
                            "caption":"",
                            "comments":[

                            ],
                            "friends":[

                            ],
                            "tags":[
                                {
                                    "id":117,
                                    "tag":"General",
                                    "label":"#General",
                                    "type":"user",
                                    "is_official":true,
                                    "mix_count":26
                                }
                            ],
                            "meta":{
                                "latitude":"48.452185955903",
                                "longitude":"35.068784858341",
                                "started_at":"2018-01-12 15:47:49",
                                "session_name":"",
                                "session_artist":"",
                                "session_thumbnail":"",
                                "session_start":"",
                                "session_end":"",
                                "session_venue":"",
                                "session_promoter":"",
                                "track_name":"",
                                "track_artist":"",
                                "album":"",
                                "spotify":"",
                                "youtube":""
                            }
                        }
                    },
                    {
                        "id":20,
                        "issue":"sex or violence",
                        "created_at":{
                            "date":"2018-03-12 14:32:31.000000",
                            "timezone_type":3,
                            "timezone":"UTC"
                        },
                        "reporter":{
                            "id":64,
                            "email":null,
                            "user_type":"user",
                            "name":"Kirill  Alexeyenko",
                            "first_name":"Kirill",
                            "last_name":"Alexeyenko",
                            "gender":"male",
                            "avatar":"https://graph.facebook.com/v2.8/1345682942225910/picture?type=normal",
                            "birthday":null,
                            "is_new":false
                        },
                        "mix":{
                            "id":928,
                            "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/54/320f2216b35b1d73e0b8b4c574ceed5f.mp4",
                            "shareable_link":"https://dev-cdn.tagmix.me/54/320f2216b35b1d73e0b8b4c574ceed5f.mp4",
                            "preview_image":"https://dev-cdn.tagmix.me/54/e97c9b095bc30acd08f9cbf7fe3f2a92.jpeg",
                            "preview_image_full":"https://dev-cdn.tagmix.me/54/0ff08dad9f6c36ea2895283347182ec9.jpeg",
                            "status":"accepted",
                            "likes_count":3,
                            "is_liked":false,
                            "created_at":"2018-01-12T16:26:29+00:00",
                            "author":{
                                "id":54,
                                "email":null,
                                "user_type":"user",
                                "name":"tester3 test",
                                "first_name":"tester3",
                                "last_name":"test",
                                "gender":"female",
                                "avatar":"https://graph.facebook.com/v2.8/1723728874603560/picture?type=normal",
                                "birthday":"1985-01-01",
                                "is_new":false
                            },
                            "comments_count":3,
                            "orientation":"portrait",
                            "caption":"",
                            "comments":[
                                {
                                    "id":464,
                                    "comment":"Testibg",
                                    "created_at":"2018-03-01T07:53:14+00:00",
                                    "author":{
                                        "id":81,
                                        "name":"li ax",
                                        "avatar":""
                                    }
                                },
                                {
                                    "id":349,
                                    "comment":"Hdjdjb",
                                    "created_at":"2018-02-26T16:32:39+00:00",
                                    "author":{
                                        "id":79,
                                        "name":"Maria Luchesko",
                                        "avatar":"https://graph.facebook.com/v2.8/1769945353321699/picture?type=normal"
                                    }
                                },
                                {
                                    "id":341,
                                    "comment":"Vicv",
                                    "created_at":"2018-02-26T16:09:29+00:00",
                                    "author":{
                                        "id":53,
                                        "name":"test se",
                                        "avatar":""
                                    }
                                }
                            ],
                            "friends":[

                            ],
                            "tags":[
                                {
                                    "id":117,
                                    "tag":"General",
                                    "label":"#General",
                                    "type":"user",
                                    "is_official":true,
                                    "mix_count":26
                                }
                            ],
                            "meta":{
                                "latitude":"48.451709133251",
                                "longitude":"35.068435682502",
                                "started_at":"2018-01-12 16:26:27",
                                "session_name":"",
                                "session_artist":"",
                                "session_thumbnail":"",
                                "session_start":"",
                                "session_end":"",
                                "session_venue":"",
                                "session_promoter":"",
                                "track_name":"",
                                "track_artist":"",
                                "album":"",
                                "spotify":"",
                                "youtube":""
                            }
                        }
                    }
                ]
            };

        _dispatch(
            {
                type: 'MIX_ISSUES_LOADED',
                mixIssues
            }
        );
    };
};

export const blockUser = (userId, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let response = [{"response": "Dummy response!"}];

        _dispatch(
            {
                type: 'USER_BLOCKED',
                response
            }
        );
    };
};

export const deleteMix = (mixId, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let response = [{"response": "Dummy response!"}];

        _dispatch(
            {
                type: 'MIX_DELETED',
                response
            }
        );
    };
};
