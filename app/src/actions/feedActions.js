import {push} from 'react-router-redux'
import Cookies from 'js-cookie'

export const loadMixes = (page = 1, tagId = 0, environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        Cookies.set('page', page, {expires: 7});

        let mixes = {
            "pagination":{
                "total":494,
                "per_page":10,
                "current_page":1,
                "last_page":50,
                "next_page_url":"http://dev-api.tagmix.me/api/v1/mixes?page=2",
                "prev_page_url":null
            },
            "data":[
                {
                    "id":1229,
                    "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/113/5196ad1143f41898e9cb462a6f5c5efe.mp4",
                    "shareable_link":"https://dev-cdn.tagmix.me/113/5196ad1143f41898e9cb462a6f5c5efe.mp4",
                    "preview_image":"https://dev-cdn.tagmix.me/113/529c80a33a07d76c54e3ef73088f5ba3.jpeg",
                    "preview_image_full":"https://dev-cdn.tagmix.me/113/b0e4b87874395fbbd7b952eff7624dff.jpeg",
                    "status":"accepted",
                    "likes_count":0,
                    "is_liked":false,
                    "created_at":"2018-06-20T12:38:52+00:00",
                    "author":{
                        "id":113,
                        "email":"xxx@gmail.com",
                        "user_type":"user",
                        "name":"mike test",
                        "first_name":"mike",
                        "last_name":"test",
                        "gender":"other",
                        "avatar":"https://tagmix-stage.s3.eu-west-2.amazonaws.com/113/avatar/f4d6273a0e2bb2f154d2d85fc3a163d0.jpeg",
                        "birthday":"2001-07-15",
                        "is_new":false
                    },
                    "comments_count":1,
                    "orientation":"portrait",
                    "caption":"hehehe",
                    "comments":[
                        {
                            "id":829,
                            "comment":"hey ",
                            "created_at":"2018-06-22T17:48:01+00:00",
                            "author":{
                                "id":68,
                                "name":"",
                                "avatar":""
                            }
                        }
                    ],
                    "friends":[

                    ],
                    "tags":[
                        {
                            "id":110,
                            "tag":"Claude Vonstroke",
                            "label":"#Claude_Vonstroke",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":44
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
                            "id":110,
                            "tag":"Claude Vonstroke",
                            "label":"#Claude_Vonstroke",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":44
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
                        "latitude":"51.517501449502",
                        "longitude":"-0.124080247800",
                        "started_at":"2018-04-25 15:53:31",
                        "session_name":"Claude VonStroke",
                        "session_artist":"Claude VonStroke",
                        "session_thumbnail":"https://audio-api.tagmix.me/thumbnails/thumb_tomorrowland.jpg",
                        "session_start":"2017-08-04 23:24:07",
                        "session_end":"2017-08-05 00:24:07",
                        "session_venue":"Tomorrowland",
                        "session_promoter":"Tomorrowland",
                        "track_name":"This Place (Nic Fanciulli Remix)",
                        "track_artist":"Subb-an",
                        "album":"Watergate 15",
                        "spotify":"",
                        "youtube":""
                    }
                },
                {
                    "id":1228,
                    "link":"https://d350e5612ktldd.cloudfront.net/113/b3adec4115d93aab941e5eafe0cd8e9f.m3u8",
                    "shareable_link":"https://dev-cdn.tagmix.me/113/b3adec4115d93aab941e5eafe0cd8e9f.mp4",
                    "preview_image":"https://dev-cdn.tagmix.me/113/2d54dce7b24bc980bac80138c2bdc1bd.jpeg",
                    "preview_image_full":"https://dev-cdn.tagmix.me/113/c91fa653a1f25d26d078c27765d5c23b.jpeg",
                    "status":"accepted",
                    "likes_count":0,
                    "is_liked":false,
                    "created_at":"2018-06-17T14:39:40+00:00",
                    "author":{
                        "id":113,
                        "email":"xxx@gmail.com",
                        "user_type":"user",
                        "name":"mike test",
                        "first_name":"mike",
                        "last_name":"test",
                        "gender":"other",
                        "avatar":"https://tagmix-stage.s3.eu-west-2.amazonaws.com/113/avatar/f4d6273a0e2bb2f154d2d85fc3a163d0.jpeg",
                        "birthday":"2001-07-15",
                        "is_new":false
                    },
                    "comments_count":0,
                    "orientation":"portrait",
                    "caption":"hehehe",
                    "comments":[

                    ],
                    "friends":[

                    ],
                    "tags":[
                        {
                            "id":110,
                            "tag":"Claude Vonstroke",
                            "label":"#Claude_Vonstroke",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":44
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
                            "id":110,
                            "tag":"Claude Vonstroke",
                            "label":"#Claude_Vonstroke",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":44
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
                        "latitude":"51.517501449502",
                        "longitude":"-0.124080247800",
                        "started_at":"2018-04-25 15:53:31",
                        "session_name":"Claude VonStroke",
                        "session_artist":"Claude VonStroke",
                        "session_thumbnail":"https://audio-api.tagmix.me/thumbnails/thumb_tomorrowland.jpg",
                        "session_start":"2017-08-04 23:24:07",
                        "session_end":"2017-08-05 00:24:07",
                        "session_venue":"Tomorrowland",
                        "session_promoter":"Tomorrowland",
                        "track_name":"This Place (Nic Fanciulli Remix)",
                        "track_artist":"Subb-an",
                        "album":"Watergate 15",
                        "spotify":"",
                        "youtube":""
                    }
                },
                {
                    "id":1227,
                    "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/113/aec7552cf1e64f1e81668fa6190a8a60.mp4",
                    "shareable_link":"https://dev-cdn.tagmix.me/113/aec7552cf1e64f1e81668fa6190a8a60.mp4",
                    "preview_image":"https://dev-cdn.tagmix.me/113/4ddad168b819fe7a6e1bdd5de76e7e02.jpeg",
                    "preview_image_full":"https://dev-cdn.tagmix.me/113/49a5c0a621590bce2340dd4c31e95edf.jpeg",
                    "status":"accepted",
                    "likes_count":0,
                    "is_liked":false,
                    "created_at":"2018-06-17T14:24:38+00:00",
                    "author":{
                        "id":113,
                        "email":"xxx@gmail.com",
                        "user_type":"user",
                        "name":"mike test",
                        "first_name":"mike",
                        "last_name":"test",
                        "gender":"other",
                        "avatar":"https://tagmix-stage.s3.eu-west-2.amazonaws.com/113/avatar/f4d6273a0e2bb2f154d2d85fc3a163d0.jpeg",
                        "birthday":"2001-07-15",
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
                            "id":110,
                            "tag":"Claude Vonstroke",
                            "label":"#Claude_Vonstroke",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":44
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
                            "id":110,
                            "tag":"Claude Vonstroke",
                            "label":"#Claude_Vonstroke",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":44
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
                        "latitude":"51.517501449502",
                        "longitude":"-0.124080247800",
                        "started_at":"2018-04-25 15:53:31",
                        "session_name":"Claude VonStroke",
                        "session_artist":"Claude VonStroke",
                        "session_thumbnail":"https://audio-api.tagmix.me/thumbnails/thumb_tomorrowland.jpg",
                        "session_start":"2017-08-04 23:24:07",
                        "session_end":"2017-08-05 00:24:07",
                        "session_venue":"Tomorrowland",
                        "session_promoter":"Tomorrowland",
                        "track_name":"This Place (Nic Fanciulli Remix)",
                        "track_artist":"Subb-an",
                        "album":"Watergate 15",
                        "spotify":"",
                        "youtube":""
                    }
                },
                {
                    "id":1226,
                    "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/113/b67ba9a06a026b605dfb6c95f1335abd.mp4",
                    "shareable_link":"https://dev-cdn.tagmix.me/113/b67ba9a06a026b605dfb6c95f1335abd.mp4",
                    "preview_image":"https://dev-cdn.tagmix.me/113/8dd67734426bcb16b91033157b74e62c.jpeg",
                    "preview_image_full":"https://dev-cdn.tagmix.me/113/f7f9d4bea6dd4ee7c5e88a322eccafa1.jpeg",
                    "status":"accepted",
                    "likes_count":0,
                    "is_liked":false,
                    "created_at":"2018-06-17T14:12:50+00:00",
                    "author":{
                        "id":113,
                        "email":"xxx@gmail.com",
                        "user_type":"user",
                        "name":"mike test",
                        "first_name":"mike",
                        "last_name":"test",
                        "gender":"other",
                        "avatar":"https://tagmix-stage.s3.eu-west-2.amazonaws.com/113/avatar/f4d6273a0e2bb2f154d2d85fc3a163d0.jpeg",
                        "birthday":"2001-07-15",
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
                            "id":110,
                            "tag":"Claude Vonstroke",
                            "label":"#Claude_Vonstroke",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":44
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
                            "id":110,
                            "tag":"Claude Vonstroke",
                            "label":"#Claude_Vonstroke",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":44
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
                        "latitude":"51.517501449502",
                        "longitude":"-0.124080247800",
                        "started_at":"2018-04-25 15:53:31",
                        "session_name":"Claude VonStroke",
                        "session_artist":"Claude VonStroke",
                        "session_thumbnail":"https://audio-api.tagmix.me/thumbnails/thumb_tomorrowland.jpg",
                        "session_start":"2017-08-04 23:24:07",
                        "session_end":"2017-08-05 00:24:07",
                        "session_venue":"Tomorrowland",
                        "session_promoter":"Tomorrowland",
                        "track_name":"This Place (Nic Fanciulli Remix)",
                        "track_artist":"Subb-an",
                        "album":"Watergate 15",
                        "spotify":"",
                        "youtube":""
                    }
                },
                {
                    "id":1225,
                    "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/113/011c9956f820408e91aec758736c7d0f.mp4",
                    "shareable_link":"https://dev-cdn.tagmix.me/113/011c9956f820408e91aec758736c7d0f.mp4",
                    "preview_image":"https://dev-cdn.tagmix.me/113/c86c81a6362045af1ea53ed280003340.jpeg",
                    "preview_image_full":"https://dev-cdn.tagmix.me/113/8ee88236da573c4c2875e02bb6153189.jpeg",
                    "status":"accepted",
                    "likes_count":0,
                    "is_liked":false,
                    "created_at":"2018-06-15T10:57:12+00:00",
                    "author":{
                        "id":113,
                        "email":"xxx@gmail.com",
                        "user_type":"user",
                        "name":"mike test",
                        "first_name":"mike",
                        "last_name":"test",
                        "gender":"other",
                        "avatar":"https://tagmix-stage.s3.eu-west-2.amazonaws.com/113/avatar/f4d6273a0e2bb2f154d2d85fc3a163d0.jpeg",
                        "birthday":"2001-07-15",
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
                            "id":110,
                            "tag":"Claude Vonstroke",
                            "label":"#Claude_Vonstroke",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":44
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
                            "id":110,
                            "tag":"Claude Vonstroke",
                            "label":"#Claude_Vonstroke",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":44
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
                        "latitude":"51.517501449502",
                        "longitude":"-0.124080247800",
                        "started_at":"2018-04-25 15:53:31",
                        "session_name":"Claude VonStroke",
                        "session_artist":"Claude VonStroke",
                        "session_thumbnail":"https://audio-api.tagmix.me/thumbnails/thumb_tomorrowland.jpg",
                        "session_start":"2017-08-04 23:24:07",
                        "session_end":"2017-08-05 00:24:07",
                        "session_venue":"Tomorrowland",
                        "session_promoter":"Tomorrowland",
                        "track_name":"This Place (Nic Fanciulli Remix)",
                        "track_artist":"Subb-an",
                        "album":"Watergate 15",
                        "spotify":"",
                        "youtube":""
                    }
                },
                {
                    "id":1224,
                    "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/113/8f1415239defbfe36b0a86bea51f1880.mp4",
                    "shareable_link":"https://dev-cdn.tagmix.me/113/8f1415239defbfe36b0a86bea51f1880.mp4",
                    "preview_image":"https://dev-cdn.tagmix.me/113/38aa049362147a806ea592debc15a278.jpeg",
                    "preview_image_full":"https://dev-cdn.tagmix.me/113/fd1df7d749a29fd8f1498b96824bfb18.jpeg",
                    "status":"accepted",
                    "likes_count":0,
                    "is_liked":false,
                    "created_at":"2018-05-29T08:32:35+00:00",
                    "author":{
                        "id":113,
                        "email":"xxx@gmail.com",
                        "user_type":"user",
                        "name":"mike test",
                        "first_name":"mike",
                        "last_name":"test",
                        "gender":"other",
                        "avatar":"https://tagmix-stage.s3.eu-west-2.amazonaws.com/113/avatar/f4d6273a0e2bb2f154d2d85fc3a163d0.jpeg",
                        "birthday":"2001-07-15",
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
                            "id":110,
                            "tag":"Claude Vonstroke",
                            "label":"#Claude_Vonstroke",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":44
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
                            "id":110,
                            "tag":"Claude Vonstroke",
                            "label":"#Claude_Vonstroke",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":44
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
                        "latitude":"51.517501449502",
                        "longitude":"-0.124080247800",
                        "started_at":"2018-04-25 15:53:31",
                        "session_name":"Claude VonStroke",
                        "session_artist":"Claude VonStroke",
                        "session_thumbnail":"https://audio-api.tagmix.me/thumbnails/thumb_tomorrowland.jpg",
                        "session_start":"2017-08-04 23:24:07",
                        "session_end":"2017-08-05 00:24:07",
                        "session_venue":"Tomorrowland",
                        "session_promoter":"Tomorrowland",
                        "track_name":"This Place (Nic Fanciulli Remix)",
                        "track_artist":"Subb-an",
                        "album":"Watergate 15",
                        "spotify":"",
                        "youtube":""
                    }
                },
                {
                    "id":1223,
                    "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/113/7906368fe2b58acb1b4c088487f9614d.mp4",
                    "shareable_link":"https://dev-cdn.tagmix.me/113/7906368fe2b58acb1b4c088487f9614d.mp4",
                    "preview_image":"https://dev-cdn.tagmix.me/113/191774576fa3f522ec59323835344726.jpeg",
                    "preview_image_full":"https://dev-cdn.tagmix.me/113/3e81e414937957f9be41d1680494a3db.jpeg",
                    "status":"accepted",
                    "likes_count":0,
                    "is_liked":false,
                    "created_at":"2018-05-23T10:40:22+00:00",
                    "author":{
                        "id":113,
                        "email":"xxx@gmail.com",
                        "user_type":"user",
                        "name":"mike test",
                        "first_name":"mike",
                        "last_name":"test",
                        "gender":"other",
                        "avatar":"https://tagmix-stage.s3.eu-west-2.amazonaws.com/113/avatar/f4d6273a0e2bb2f154d2d85fc3a163d0.jpeg",
                        "birthday":"2001-07-15",
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
                            "id":110,
                            "tag":"Claude Vonstroke",
                            "label":"#Claude_Vonstroke",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":44
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
                            "id":110,
                            "tag":"Claude Vonstroke",
                            "label":"#Claude_Vonstroke",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":44
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
                        "latitude":"51.517501449502",
                        "longitude":"-0.124080247800",
                        "started_at":"2018-04-25 15:53:31",
                        "session_name":"Claude VonStroke",
                        "session_artist":"Claude VonStroke",
                        "session_thumbnail":"https://audio-api.tagmix.me/thumbnails/thumb_tomorrowland.jpg",
                        "session_start":"2017-08-04 23:24:07",
                        "session_end":"2017-08-05 00:24:07",
                        "session_venue":"Tomorrowland",
                        "session_promoter":"Tomorrowland",
                        "track_name":"This Place (Nic Fanciulli Remix)",
                        "track_artist":"Subb-an",
                        "album":"Watergate 15",
                        "spotify":"",
                        "youtube":""
                    }
                },
                {
                    "id":1222,
                    "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/113/8866821d2a1489f323d9da4afb567687.mp4",
                    "shareable_link":"https://dev-cdn.tagmix.me/113/8866821d2a1489f323d9da4afb567687.mp4",
                    "preview_image":"https://dev-cdn.tagmix.me/113/a577da2156118f2f9f3988054ac3d67e.jpeg",
                    "preview_image_full":"https://dev-cdn.tagmix.me/113/e87058d3a2ce460bc5ecdc55265a7756.jpeg",
                    "status":"accepted",
                    "likes_count":0,
                    "is_liked":false,
                    "created_at":"2018-05-23T10:35:41+00:00",
                    "author":{
                        "id":113,
                        "email":"xxx@gmail.com",
                        "user_type":"user",
                        "name":"mike test",
                        "first_name":"mike",
                        "last_name":"test",
                        "gender":"other",
                        "avatar":"https://tagmix-stage.s3.eu-west-2.amazonaws.com/113/avatar/f4d6273a0e2bb2f154d2d85fc3a163d0.jpeg",
                        "birthday":"2001-07-15",
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
                            "id":96,
                            "tag":"Jamie Jones",
                            "label":"#Jamie_Jones",
                            "type":"Artist",
                            "is_official":true,
                            "mix_count":58
                        },
                        {
                            "id":112,
                            "tag":"Claptone",
                            "label":"#Claptone",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":39
                        },
                        {
                            "id":112,
                            "tag":"Claptone",
                            "label":"#Claptone",
                            "type":"Promoter",
                            "is_official":true,
                            "mix_count":39
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
                        "latitude":"51.517501449502",
                        "longitude":"-0.124080247800",
                        "started_at":"2018-04-25 15:53:31",
                        "session_name":"Claptone",
                        "session_artist":"Claptone",
                        "session_thumbnail":"https://audio-api.tagmix.me/thumbnails/thumb_tomorrowland.jpg",
                        "session_start":"2017-08-04 23:32:54",
                        "session_end":"2017-08-05 00:32:54",
                        "session_venue":"Tomorrowland",
                        "session_promoter":"Tomorrowland",
                        "track_name":"We Got The Power (feat. Jehnny Beth) [Claptone Remix]",
                        "track_artist":"Gorillaz",
                        "album":"We Got The Power (feat. Jehnny Beth) [Claptone Remix]",
                        "spotify":"",
                        "youtube":""
                    }
                },
                {
                    "id":1221,
                    "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/113/7366a8792d81f7c9d50008a9432b772a.mp4",
                    "shareable_link":"https://dev-cdn.tagmix.me/113/7366a8792d81f7c9d50008a9432b772a.mp4",
                    "preview_image":"https://dev-cdn.tagmix.me/113/28ba05b7a11a90d223e401a2c75c7cdb.jpeg",
                    "preview_image_full":"https://dev-cdn.tagmix.me/113/316f3b37ea032ae429f458129237ebe6.jpeg",
                    "status":"accepted",
                    "likes_count":0,
                    "is_liked":false,
                    "created_at":"2018-05-23T10:29:17+00:00",
                    "author":{
                        "id":113,
                        "email":"xxx@gmail.com",
                        "user_type":"user",
                        "name":"mike test",
                        "first_name":"mike",
                        "last_name":"test",
                        "gender":"other",
                        "avatar":"https://tagmix-stage.s3.eu-west-2.amazonaws.com/113/avatar/f4d6273a0e2bb2f154d2d85fc3a163d0.jpeg",
                        "birthday":"2001-07-15",
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

                    ],
                    "meta":{
                        "latitude":"51.517501449502",
                        "longitude":"-0.124080247800",
                        "started_at":"2018-04-25 15:53:31",
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
                },
                {
                    "id":1220,
                    "link":"https://s3-eu-west-2.amazonaws.com/tagmix-stage/113/d580e123069809d3597d8c5c439362ee.mp4",
                    "shareable_link":"https://dev-cdn.tagmix.me/113/d580e123069809d3597d8c5c439362ee.mp4",
                    "preview_image":"https://dev-cdn.tagmix.me/113/68689b19b64fab188370ce7221f190cd.jpe",
                    "preview_image_full":"https://dev-cdn.tagmix.me/113/19346ee81f9030b21e718080e03c6c5f.jpe",
                    "status":"accepted",
                    "likes_count":0,
                    "is_liked":false,
                    "created_at":"2018-05-21T13:28:10+00:00",
                    "author":{
                        "id":113,
                        "email":"xxx@gmail.com",
                        "user_type":"user",
                        "name":"mike test",
                        "first_name":"mike",
                        "last_name":"test",
                        "gender":"other",
                        "avatar":"https://tagmix-stage.s3.eu-west-2.amazonaws.com/113/avatar/f4d6273a0e2bb2f154d2d85fc3a163d0.jpeg",
                        "birthday":"2001-07-15",
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
                        "latitude":"51.517501449502",
                        "longitude":"-0.124080247800",
                        "started_at":"2018-04-25 15:53:31",
                        "session_name":"Jamie Jones",
                        "session_artist":"Jamie Jones",
                        "session_thumbnail":"https://audio-api.tagmix.me/thumbnails/tomorrowland.jpg",
                        "session_start":"2017-08-04 23:11:02",
                        "session_end":"2017-08-05 00:11:02",
                        "session_venue":"Tomorrowland",
                        "session_promoter":"Tomorrowland",
                        "track_name":"Acid Vibes",
                        "track_artist":"Kydus, Moji",
                        "album":"Acid Vibes",
                        "spotify":"http://open.spotify.com/track/7jx5XTVfTEdLGsb3pRv3G5",
                        "youtube":""
                    }
                }
            ]
        }

        _dispatch(push('/home'));

        _dispatch(
            {
                type: 'MIXES_LOADED',
                mixes
            }
        );
    };
};

export const checkPage = () => {
    let page;

    if (Cookies.get('page')) {
        page = Cookies.get('page')
    } else {
        page = 1;
    }

    return {
        type: 'CHECK_PAGE',
        page
    }
};
