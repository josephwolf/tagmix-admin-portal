import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import feed from './feedReducer'
import tags from './tagReducer'
import auth from './authReducer'
import favorites from './favoritesReducer'
import events from './eventsReducer'
import issues from "./adminReducer";
import venues from "./vesnuesReducer";
import proVideos from "./proVideoReducer";
import promotions from "./promotionsReducer";
import competitions from "./competitionsReducer";
import infoEvents from "./infoEventReducer";

const reducers = combineReducers({
    feed,
    tags,
    auth,
    favorites,
    events,
    issues,
    venues,
    proVideos,
    promotions,
    competitions,
    infoEvents,
    routing: routerReducer
});

export default reducers;
