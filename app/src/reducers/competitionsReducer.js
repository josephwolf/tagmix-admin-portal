const competitions = (state = {
    competitions: [],
    venueEvents: [],
    competitionMixTiles: [],
    competitionMixDetails:[],
    competitionPaginationDetails:[],
    competitionMixWinners:[],
    competitionPaginationWinners:[],
    currentCompetition: 0,
    templates: []
}, action) => {
    switch (action.type) {
        case 'COMPETITIONS_LOADED':
        case 'COMPETITION_SAVED':
        case 'COMPETITION_DELETED':
            return {
                ...state,
                competitions: action.competitions
            };
        case 'VENUE_EVENTS_LOADED':
            return {
                ...state,
                venueEvents: action.venueEvents
            };
        case 'COMPETITION_MIX_DETAILS_LOADED':
            return {
                ...state,
                competitionMixDetails: action.competitionMixDetails
            };
        case 'COMPETITION_PAGINATION_DETAILS_LOADED':
            return {
                ...state,
                competitionPaginationDetails: action.competitionPaginationDetails
            };
        case 'COMPETITION_MIX_WINNERS_LOADED':
            return {
                ...state,
                competitionMixWinners: action.competitionMixWinners
            };
        case 'COMPETITION_PAGINATION_WINNERS_LOADED':
            return {
                ...state,
                competitionPaginationWinners: action.competitionPaginationWinners
            };
        case 'CHANGE_CURRENT_COMPETITION':
            return {
                ...state,
                currentCompetition: action.currentCompetition
            };
        case 'COMPETITION_TEMPLATES_LOADED':
            return {
                ...state,
                templates: action.templates
            };
        default:
            return state;
    }
};

export default competitions;