
export const loadTags = (environment = 'dev') => {
    let _dispatch, _getState;

    return function (dispatch, getState) {
        _dispatch = dispatch;
        _getState = getState;

        let tags =[
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
                "id":117,
                "tag":"General",
                "label":"#General",
                "type":"user",
                "is_official":true,
                "mix_count":26
            },
            {
                "id":108,
                "tag":"Carl Cox",
                "label":"#Carl_Cox",
                "type":"Artist",
                "is_official":true,
                "mix_count":39
            },
            {
                "id":99,
                "tag":"Eats Everything",
                "label":"#Eats_Everything",
                "type":"Artist",
                "is_official":true,
                "mix_count":39
            },
            {
                "id":114,
                "tag":"Patrick Topping",
                "label":"#Patrick_Topping",
                "type":"Artist",
                "is_official":true,
                "mix_count":37
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
                "id":118,
                "tag":"Solomun At Tomorrowland",
                "label":"#Solomun_At_Tomorrowland",
                "type":"Name",
                "is_official":true,
                "mix_count":1
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
                "id":116,
                "tag":"Markus Schultz",
                "label":"#Markus_Schultz",
                "type":"Artist",
                "is_official":true,
                "mix_count":7
            },
            {
                "id":89,
                "tag":"Tagmix",
                "label":"#Tagmix",
                "type":"user",
                "is_official":true,
                "mix_count":80
            },
            {
                "id":115,
                "tag":"Markus Schultz",
                "label":"#Markus_Schultz",
                "type":"Name",
                "is_official":true,
                "mix_count":1
            },
            {
                "id":113,
                "tag":"Patrick Topping",
                "label":"#Patrick_Topping",
                "type":"Name",
                "is_official":true,
                "mix_count":1
            },
            {
                "id":107,
                "tag":"Carl Cox",
                "label":"#Carl_Cox",
                "type":"Name",
                "is_official":true,
                "mix_count":1
            },
            {
                "id":100,
                "tag":"Demo With Pitch Shift Detection",
                "label":"#Demo_With_Pitch_Shift_Detection",
                "type":"Name",
                "is_official":true,
                "mix_count":1
            },
            {
                "id":75,
                "tag":"D’Alt Vila",
                "label":"#D’Alt_Vila",
                "type":"user",
                "is_official":false,
                "mix_count":27
            },
            {
                "id":101,
                "tag":"Craig David",
                "label":"#Craig_David",
                "type":"Promoter",
                "is_official":true,
                "mix_count":1
            },
            {
                "id":103,
                "tag":"Nicole Moudaber",
                "label":"#Nicole_Moudaber",
                "type":"Name",
                "is_official":true,
                "mix_count":1
            },
            {
                "id":102,
                "tag":"Ibiza Rocks",
                "label":"#Ibiza_Rocks",
                "type":"Venue",
                "is_official":true,
                "mix_count":1
            },
            {
                "id":48,
                "tag":"Hard Rock Hotel Ibiza",
                "label":"#Hard_Rock_Hotel_Ibiza",
                "type":"user",
                "is_official":false,
                "mix_count":146
            },
            {
                "id":49,
                "tag":"Ims",
                "label":"#Ims",
                "type":"user",
                "is_official":false,
                "mix_count":267
            },
            {
                "id":51,
                "tag":"Hard Rock Hotel",
                "label":"#Hard_Rock_Hotel",
                "type":"user",
                "is_official":false,
                "mix_count":137
            },
            {
                "id":57,
                "tag":"Ticketmaster",
                "label":"#Ticketmaster",
                "type":"user",
                "is_official":false,
                "mix_count":39
            },
            {
                "id":50,
                "tag":"Burn #residency",
                "label":"#Burn_#residency",
                "type":"user",
                "is_official":false,
                "mix_count":75
            },
            {
                "id":74,
                "tag":"D´alt Vila 2017",
                "label":"#D´alt_Vila_2017",
                "type":"user",
                "is_official":false,
                "mix_count":27
            },
            {
                "id":56,
                "tag":"Ultra",
                "label":"#Ultra",
                "type":"user",
                "is_official":false,
                "mix_count":28
            },
            {
                "id":66,
                "tag":"Maceo Plex B2B Tale Of Us",
                "label":"#Maceo_Plex_B2B_Tale_Of_Us",
                "type":"user",
                "is_official":false,
                "mix_count":23
            },
            {
                "id":62,
                "tag":"Martinez Bros B2B Kenlou ",
                "label":"#Martinez_Bros_B2B_Kenlou_",
                "type":"user",
                "is_official":false,
                "mix_count":5
            },
            {
                "id":98,
                "tag":"Eats Everything",
                "label":"#Eats_Everything",
                "type":"Name",
                "is_official":true,
                "mix_count":1
            },
            {
                "id":92,
                "tag":"{\\type\\:\\venue\\,\\value\\:\\hard Rock Hotel\\}",
                "label":"#{\\type\\:\\venue\\,\\value\\:\\hard_Rock_Hotel\\}",
                "type":"Promoter",
                "is_official":true,
                "mix_count":4
            },
            {
                "id":93,
                "tag":"{\\type\\:\\artist\\,\\value\\:\\burn #residency\\}",
                "label":"#{\\type\\:\\artist\\,\\value\\:\\burn_#residency\\}",
                "type":"Promoter",
                "is_official":true,
                "mix_count":3
            },
            {
                "id":90,
                "tag":"Promotername",
                "label":"#Promotername",
                "type":"Promoter",
                "is_official":true,
                "mix_count":1
            },
            {
                "id":91,
                "tag":"Artistname",
                "label":"#Artistname",
                "type":"Artist",
                "is_official":true,
                "mix_count":1
            },
            {
                "id":67,
                "tag":"Defected",
                "label":"#Defected",
                "type":"user",
                "is_official":false,
                "mix_count":3
            },
            {
                "id":72,
                "tag":"We Are Defected",
                "label":"#We_Are_Defected",
                "type":"user",
                "is_official":false,
                "mix_count":1
            },
            {
                "id":73,
                "tag":"Eden",
                "label":"#Eden",
                "type":"user",
                "is_official":false,
                "mix_count":1
            },
            {
                "id":68,
                "tag":"Do Not Sleep",
                "label":"#Do_Not_Sleep",
                "type":"user",
                "is_official":false,
                "mix_count":1
            },
            {
                "id":69,
                "tag":"Do Not Sleep",
                "label":"#Do_Not_Sleep",
                "type":"user",
                "is_official":false,
                "mix_count":1
            },
            {
                "id":70,
                "tag":"Darius Syrossian B2B Detlef",
                "label":"#Darius_Syrossian_B2B_Detlef",
                "type":"user",
                "is_official":false,
                "mix_count":1
            },
            {
                "id":71,
                "tag":"Sankeys",
                "label":"#Sankeys",
                "type":"user",
                "is_official":false,
                "mix_count":1
            },
            {
                "id":58,
                "tag":"D?Alt Vila",
                "label":"#D?Alt_Vila",
                "type":"user",
                "is_official":false,
                "mix_count":57
            },
            {
                "id":60,
                "tag":"D?alt Vila 2017",
                "label":"#D?alt_Vila_2017",
                "type":"user",
                "is_official":false,
                "mix_count":55
            },
            {
                "id":65,
                "tag":"Seth Troxler B2B Miss Kittin",
                "label":"#Seth_Troxler_B2B_Miss_Kittin",
                "type":"user",
                "is_official":false,
                "mix_count":6
            },
            {
                "id":64,
                "tag":"Pete Tong B2B Nicole Moudaber",
                "label":"#Pete_Tong_B2B_Nicole_Moudaber",
                "type":"user",
                "is_official":false,
                "mix_count":8
            },
            {
                "id":63,
                "tag":"Dixon B2B Kenlou",
                "label":"#Dixon_B2B_Kenlou",
                "type":"user",
                "is_official":false,
                "mix_count":6
            },
            {
                "id":61,
                "tag":"D?lt Vila 2017",
                "label":"#D?lt_Vila_2017",
                "type":"user",
                "is_official":false,
                "mix_count":2
            },
            {
                "id":59,
                "tag":"Dalt Vila 2017",
                "label":"#Dalt_Vila_2017",
                "type":"user",
                "is_official":false,
                "mix_count":1
            }
        ]

        _dispatch(
            {
                type: 'TAGS_LOADED',
                tags
            }
        );
    };
};
