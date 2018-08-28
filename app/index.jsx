import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore, routerMiddleware, push} from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

import reducers from './src/reducers'

import Spinner from './src/components/Spinner'
import App from './src/components/App'

import "script-loader!../node_modules/jquery/dist/jquery.min";

import './stylus/main.styl'
import {checkPage, loadMixes} from "./src/actions/feedActions";
import {loadTags} from "./src/actions/tagActions";
import {loadFavorites} from "./src/actions/favoritesActions"
import {loadEvents} from "./src/actions/eventsActions";
import {loadMixFlags, loadUserFlags} from "./src/actions/adminActions";
import {loadAllVenues, loadVenues} from "./src/actions/venuesActions";
import {loadProVideos, loadProVideoTags} from "./src/actions/proVideoActions";
import {loadPromotions} from "./src/actions/promotionsActions";
import {loadCompetitions, loadCompetitionTemplates} from "./src/actions/competitionActions";
import {loadInfoEvents, loadPromoters} from "./src/actions/infoEventsActions";

let initialState = {}; //{auth: initAuthState()};
const middlewareForRouter = routerMiddleware(browserHistory);

//https://github.com/zalmoxisus/redux-devtools-extension#1-with-redux
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            actionsBlacklist: []
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk, middlewareForRouter)
);

const store = createStore(
    reducers,
    initialState,
    enhancer
);

//https://github.com/reactjs/react-router-redux
const history = syncHistoryWithStore(browserHistory, store);

//https://www.npmjs.com/package/material-ui
injectTapEventPlugin();

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/">
                <IndexRoute component={Spinner}/>
                <Route path="/home" component={App}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

setTimeout(function () {
    store.dispatch(loadMixes());
    store.dispatch(checkPage());
    store.dispatch(loadTags());
    store.dispatch(loadFavorites());
    store.dispatch(loadEvents());
    store.dispatch(loadUserFlags());
    store.dispatch(loadMixFlags());
    store.dispatch(loadVenues());
    store.dispatch(loadProVideos());
    store.dispatch(loadProVideoTags());
    store.dispatch(loadPromotions());
    store.dispatch(loadCompetitions());
    store.dispatch(loadInfoEvents());
    store.dispatch(loadPromoters());
    store.dispatch(loadAllVenues());
    store.dispatch(loadCompetitionTemplates());
});