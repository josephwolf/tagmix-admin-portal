import React from 'react'
import {connect} from 'react-redux'
import {checkPage, loadMixes} from '../actions/feedActions';
import {loadTags} from '../actions/tagActions';
import {checkAuth, logIn, logOut} from '../actions/authActions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import EventTile from './EventTile';
import MixTile from './MixTile'
import AdminPage from "./AdminPage";
import {loadAllVenues, loadVenues} from "../actions/venuesActions";
import VenueTile from "./VenueTile";
import VenuesForm from "./VenuesForm";
import ProVideoTile from "./ProVideoTile";
import ProVideoForm from "./ProVideoForm";
import {loadProVideos, loadProVideoTag, loadProVideoTags} from "../actions/proVideoActions";
import ProVideoTagForm from "./ProVideoTagForm";
import PromotionForm from "./PromotionForm";
import PromotionTile from "./PromotionTile";
import {loadPromotions} from "../actions/promotionsActions";
import ProVideoTagDeleteForm from "./ProVideoTagDeleteForm";
import Sidebar from 'react-sidebar';
import {loadCompetitions, loadCompetitionTemplates} from "../actions/competitionActions";
import CompetitionTile from "./CompetitionTile";
import CompetitionForm from "./CompetitionForm";
import InfoEventsTile from "./InfoEventsTile";
import {loadInfoEvents, loadPromoters} from "../actions/infoEventsActions";
import InfoEventsForm from "./InfoEventsForm";

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends React.Component {
    constructor(props) {
        super(props);

        let loggedInCookieStatus = this.props.onCheckAuth();
        let tagCookie = 0;
        let proVideoTagCookie = 0;
        let pageCookie = this.props.onCheckPage();
        let environmentCookie = 'dev';
        let competitionTypeCookie = 0;
        let currentPageCookie = 1;

        this.state = {
            tag: tagCookie,
            proVideoTag: proVideoTagCookie,
            env: environmentCookie,
            loggedIn: loggedInCookieStatus,
            page: pageCookie,
            mql: mql,
            docked: props.docked,
            open: props.open,
            competitionType: competitionTypeCookie,
            currentPage: currentPageCookie
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    checkPassword = () => {
        const pwd = this.refs.pwd.value;
        this.props.onLogIn(pwd);
    };

    subPageNavigation = () => {
        const {
            pageName,
            currentPage,
            lastPage,
            nextPage,
            prevPage,
            isNextPage,
            isPrevPage,
            onLoadMixes,
            onLoadProVideos,
            onLoadInfoEvents,
            onLoadCompetitions,
            pages
        } = this.props;

        return (
            <div>
                <Subheader>
                        <label>Environment:</label>
                        <DropDownMenu value={this.state.env} onChange={this.changeEnvironment} style={{"bottom": "-22px"}}>
                            <MenuItem value={'dev'} primaryText={'Development'}/>
                            <MenuItem value={'live'} primaryText={'Live'}/>
                            <MenuItem value={'staging'} primaryText={'Staging'}/>
                        </DropDownMenu>
                        <FlatButton
                            label="Prev Pg"
                            labelPosition="after"
                            disabled={isPrevPage}
                            icon={<NavigationArrowBack/>}
                            onClick={() => {
                                this.setState({ currentPage: prevPage });
                                if (pageName === 'users') {onLoadMixes(prevPage, this.state.tag, this.state.env)}
                                if (pageName === 'proVideo') {onLoadProVideos(this.state.env, this.state.proVideoTag, prevPage)}
                                if (pageName === 'infoEvents') {onLoadInfoEvents(this.state.env, prevPage)}
                                // if (pageName === 'competitions') {onLoadCompetitions(this.state.env, this.state.competitionType, prevPage)}
                            }}
                        />
                        Page:
                        <DropDownMenu maxHeight={300} value={this.state.currentPage} onChange={this.changePage} style={{"bottom": "-22px"}}>
                            {pages}
                        </DropDownMenu>
                        of {lastPage}
                        <FlatButton
                            label="Next Pg"
                            labelPosition="before"
                            disabled={isNextPage}
                            icon={<NavigationArrowForward/>}
                            onClick={() => {
                                this.setState({ currentPage: nextPage });
                                if (pageName === 'users') {onLoadMixes(nextPage, this.state.tag, this.state.env)}
                                if (pageName === 'proVideo') {onLoadProVideos(this.state.env, this.state.proVideoTag, nextPage)}
                                if (pageName === 'infoEvents') {onLoadInfoEvents(this.state.env, nextPage)}
                                // if (pageName === 'competitions') {onLoadCompetitions(this.state.env, this.state.competitionType, prevPage)}
                            }}
                        />
                </Subheader>
            </div>
        )

    };

    userFeedNavigation = () => {

        const {
            tags
        } = this.props;

        return (
            <div>
                { this.subPageNavigation() }
                    <Subheader>
                        <label>Filter by Tags:</label>
                        <DropDownMenu maxHeight={300} value={this.state.tag} onChange={this.changeTags} style={{"bottom": "-22px"}}>
                            {tags}
                        </DropDownMenu>
                    </Subheader>
            </div>
        )
    };

    onSetSidebarOpen = (open) => {
        this.setState({sidebarOpen: open});
    };
    componentWillMount = () => {
        mql.addListener(this.mediaQueryChanged);
        this.setState({mql: mql, sidebarDocked: mql.matches});
    };

    componentWillUnmount = () => {
        this.state.mql.removeListener(this.mediaQueryChanged);
    };

    mediaQueryChanged =() => {
        this.setState({sidebarDocked: this.state.mql.matches});
    };

    gridListContent = () => {
        const {
            mixes: tiles,
            pageName,
            proVideoTags,
            expandedCompetitionMixesId,
            promoters
        } = this.props;

        if (pageName == 'users') {
            return (
                <div>
                    <GridList cellHeight={"auto"} cols={1} padding={20}>
                        <div>
                            {this.userFeedNavigation()}
                            <hr />
                            <div className="center-block feed">
                                {tiles.map((tile) => (
                                    <div>
                                        <MixTile tile={tile} key={tile.id} environment={this.state.env} page={this.props.currentPage} tagId={this.state.tag}/>
                                        <hr/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </GridList>
                    {this.subPageNavigation()}
                </div>
            )
        }
        if (pageName == 'favorites') {
            return (
                <div>
                    <GridList cellHeight={"auto"} cols={1} padding={20}>
                        <div>
                            <hr/>
                            <div className="center-block feed">
                                {tiles.map((tile) => (
                                    <MixTile tile={tile} key={tile.id} />
                                ))}
                            </div>
                        </div>
                    </GridList>
                </div>
            )
        }
        if (pageName == 'events') {
            let returnEvents;

            if (tiles.length == 0) { returnEvents = (
                <div>
                <GridList cellHeight={"auto"} cols={1} padding={20}>
                    <div>
                        <hr/>
                        <div className="center-block feed">
                            <center>It seems that there are no current event listings from our partners at essentialibiza.com that are currently active.</center>
                            <center>Please contact an admin if this is in error.</center>
                        </div>
                    </div>
                </GridList>
            </div>
            )} else {
                returnEvents = (
                    <div>
                        <GridList cellHeight={"auto"} cols={1} padding={20}>
                            <div>
                                <hr/>
                                <div className="center-block feed">
                                    {tiles.map((tile) => (
                                        <EventTile tile={tile} key={tile.listing_id} />
                                    ))}
                                </div>
                            </div>
                        </GridList>
                    </div>
                )
            }
            return returnEvents;
        }
        if (pageName == 'admin') {
            return (
                <div>
                    <GridList cellHeight={"auto"} cols={1} padding={20}>
                        <div>
                            <hr/>
                            <div className="center-block feed">
                                <AdminPage mixes={tiles} />
                            </div>
                        </div>
                    </GridList>
                </div>
            )
        }
        if (pageName == 'venues') {
            return (
                <div>
                    <label>Environment:</label><DropDownMenu value={this.state.env} onChange={this.changeEnvironment}>
                        <MenuItem value={'dev'} primaryText={'Development'}/>
                        <MenuItem value={'live'} primaryText={'Live'}/>
                        <MenuItem value={'staging'} primaryText={'Staging'}/>
                    </DropDownMenu>
                    <VenuesForm environment={this.state.env} />
                    <GridList cellHeight={"auto"} cols={1} padding={20}>
                        <div>
                            <hr/>
                            <div className="center-block feed">
                                {tiles.map((tile) => (
                                    <VenueTile tile={tile} key={tile.id} environment={this.state.env} />
                                ))}
                            </div>
                        </div>
                    </GridList>
                </div>
            )
        }
        if (pageName == 'proVideo') {

            return (
                <div>
                    { this.subPageNavigation() }
                    <br/>
                    <DropDownMenu value={this.state.proVideoTag} onChange={this.changeProVideoTag} >
                        {proVideoTags}
                    </DropDownMenu>
                    <br/>
                    <ProVideoForm environment={this.state.env}/>
                    <ProVideoTagForm environment={this.state.env}/>
                    <ProVideoTagDeleteForm environment={this.state.env}/>
                    <GridList cellHeight={"auto"} cols={1} padding={20}>
                        <div>
                            <hr/>
                            <div className="center-block feed">
                                {tiles.map((tile) => (
                                    <ProVideoTile tile={tile} key={tile.id} environment={this.state.env}/>
                                ))}
                            </div>
                        </div>
                    </GridList>
                </div>
            )
        }
        if (pageName == 'promotions') {
            return (
                <div>
                    <DropDownMenu value={this.state.env} onChange={this.changeEnvironment}>
                        <MenuItem value={'dev'} primaryText={'Development'}/>
                        <MenuItem value={'live'} primaryText={'Live'}/>
                        <MenuItem value={'staging'} primaryText={'Staging'}/>
                    </DropDownMenu>
                    <PromotionForm environment={this.state.env} />
                    <GridList cellHeight={"auto"} cols={1} padding={20}>
                        <div>
                            <hr/>
                            <div className="center-block feed">
                                {tiles.map((tile) => (
                                    <PromotionTile tile={tile} key={tile.id} environment={this.state.env}/>
                                ))}
                            </div>
                        </div>
                    </GridList>
                </div>
            )
        }
        if (pageName == 'competitions') {
            return (
                <div>
                    <DropDownMenu value={this.state.env} onChange={this.changeEnvironment}>
                        <MenuItem value={'dev'} primaryText={'Development'}/>
                        <MenuItem value={'live'} primaryText={'Live'}/>
                        <MenuItem value={'staging'} primaryText={'Staging'}/>
                    </DropDownMenu>
                    <DropDownMenu value={this.state.competitionType} onChange={this.changeCompetitionFilter}>
                        <MenuItem value={0} primaryText={'All Competition Types'}/>
                        <MenuItem value={1} primaryText={"Season"} />
                        <MenuItem value={2} primaryText={"Festival"} />
                        <MenuItem value={3} primaryText={"Daily"} />
                    </DropDownMenu>
                    <CompetitionForm environment={this.state.env} />
                    <GridList cellHeight={"auto"} cols={1} padding={20}>
                        <div>
                            <hr/>
                            <div className="center-block feed">
                                {tiles.map((tile) => (
                                    <CompetitionTile tile={tile} key={tile.id} environment={this.state.env} />
                                ))}
                            </div>
                        </div>
                    </GridList>
                </div>
            )
        }
        if (pageName == 'infoEvents') {
            return (
                <div>
                    <GridList cellHeight={"auto"} cols={1} padding={20}>
                        <div>
                            { this.subPageNavigation() }
                            <br/>
                            <InfoEventsForm environment={this.state.env} page={this.state.currentPage} />
                            <hr/>
                            <div className="center-block feed">
                                {tiles.map((tile) => (
                                    <InfoEventsTile tile={tile} key={tile.id} environment={this.state.env} promoters={promoters} page={this.state.currentPage}/>
                                ))}
                            </div>
                        </div>
                    </GridList>
                </div>
            )
        }
    };

    render() {
        const {
            loggedIn
        } = this.props;

        if (!loggedIn) {
            return (
                <div className="psw-form">
                    <center>
                        <h3>Please submit password:</h3>
                        <br/>
                        <form onSubmit={this.checkPassword}>
                            <input type="password" className="form-control" ref="pwd" /><br/><br/>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </center>
                </div>
            );
        }

        let sidebarContent = <div>
            <h4>Choose a destination:</h4>
            <br/>
            <br/>
            <FlatButton
                label="Mixes"
                fullWidth={true}
                backgroundColor="#c4daff"
                onClick={() => this.props.onChangePage('users')}
            />
            <br/>
            <br/>
            <FlatButton
                label="Favourites"
                fullWidth={true}
                backgroundColor="#c4daff"
                onClick={() => this.props.onChangePage('favorites')}
            />
            <br/>
            <br/>
            <FlatButton
                label="Calendar Events"
                fullWidth={true}
                backgroundColor="#c4daff"
                onClick={() => this.props.onChangePage('events')}
            />
            <br/>
            <br/>
            <FlatButton
                label="Admin"
                fullWidth={true}
                backgroundColor="#c4daff"
                onClick={() => this.props.onChangePage('admin')}
            />
            <br/>
            <br/>
            <FlatButton
                label="Venues"
                fullWidth={true}
                backgroundColor="#c4daff"
                onClick={() => this.props.onChangePage('venues')}
            />
            <br/>
            <br/>
            <FlatButton
                label="Pro Video"
                fullWidth={true}
                backgroundColor="#c4daff"
                onClick={() => this.props.onChangePage('proVideo')}
            />
            <br/>
            <br/>
            <FlatButton
                label="Promotions"
                fullWidth={true}
                backgroundColor="#c4daff"
                onClick={() => this.props.onChangePage('promotions')}
            />
            <br/>
            <br/>
            <FlatButton
                label="Competitions"
                fullWidth={true}
                backgroundColor="#c4daff"
                onClick={() => this.props.onChangePage('competitions')}
            />
            <br/>
            <br/>
            <FlatButton
                label="Events"
                fullWidth={true}
                backgroundColor="#c4daff"
                onClick={() => this.props.onChangePage('infoEvents')}
            />
            <div style={{"bottom": "20px", "position": "absolute"}}>
                Joey Wolf made this ❤
            </div>
        </div>;

        let sidebarProps = {
            sidebar: this.state.sidebarOpen,
            docked: this.state.sidebarDocked,
            onSetOpen: this.onSetSidebarOpen
        };

        let sidebarStyle = {
            sidebar:{
                backgroundColor: 'rgba(255,255,255,1)',
                padding: '20px'
            }
        };

        return (
            <MuiThemeProvider>
                <Sidebar sidebar={sidebarContent} open={this.state.sidebarOpen} onSetOpen={this.onSetSidebarOpen} styles={sidebarStyle}>
                    <div className="tagmix-grid-container">
                        <nav className="navbar navbar-default row">
                            <div className="col-md-10 col-sm-8 row">
                                <FlatButton
                                    icon={<NavigationMenu/>}
                                    onClick={() => this.onSetSidebarOpen(true)}
                                    style={{"margin": "20px 0 0 30px"}}
                                />
                                <b style={{"fontSize": "30pt"}}>TagMix</b><span style={{"color": "grey"}}>  Admin Portal (Sharable version!)</span>
                            </div>
                            <div className="tagmixTitleBar col-md-2 col-sm-4">
                                <FlatButton
                                    label="Log Out"
                                    onClick={() => this.props.onLogout()}
                                />
                                <FlatButton
                                    label="Audio Portal"
                                    onClick={() => {window.open('http://audio-api.tagmix.me/', '_blank').focus()}}
                                />
                            </div>
                            <br/>
                        </nav>
                        <div className="container">
                            {this.gridListContent()}
                            <br/>
                            <br/>
                            <hr/>
                            <footer>© TagMix 2018</footer>
                            <br/>
                        </div>
                    </div>
                </Sidebar>
            </MuiThemeProvider>);
    }

    changePage = (event, index, page) => {
        this.setState({page});
        this.setState({ currentPage: page });
        this.props.onLoadMixes(page, this.state.tag, this.state.env);
        if (this.props.pageName == 'users') {this.props.onLoadMixes(page, this.state.tag, this.state.env)}
        if (this.props.pageName == 'proVideo') {this.props.onLoadProVideos(this.state.env, this.state.proVideoTag, page)}
        if (this.props.pageName == 'infoEvents') {this.props.onLoadInfoEvents(this.state.env, page)}
    };

    changeTags = (event, index, tag) => {
        this.setState({tag});
        this.props.onLoadMixes(1, tag, this.state.env)
    };

    changeProVideoTag = (event, index, proVideoTag, page) => {
        this.setState({proVideoTag});
        this.props.onLoadProVideos(this.state.env, proVideoTag, page)
    };

    changeEnvironment = (event, index, env) => {
        this.setState({env});
        this.props.onLoadMixes(1, this.state.tag, env);
        this.props.onLoadTags(env);
        this.props.onLoadProVideos(env);
        this.props.onLoadProVideoTags(env);
        this.props.onLoadPromotions(env);
        this.props.onLoadVenues(env);
        this.props.onLoadCompetitions(env, this.state.competitionType, this.state.currentPage);
        this.props.onLoadInfoEvents(env, this.state.currentPage);
        this.props.onLoadPromoters(env);
        this.props.onLoadAllVenues(env);
        this.props.onLoadCompetitionTemplates(env);
    };

    changeCompetitionFilter = (event, index, competitionType) => {
        this.setState({competitionType});
        this.props.onLoadCompetitions(this.state.env, competitionType);
    };
}

const mapStateToProps = (state) => {
    let currentPage;
    let lastPage;
    let nextPage;
    let prevPage;
    let feed;
    let tagList = state.tags.tags.sort(function(a, b){
        if(a.tag < b.tag) return -1;
        if(a.tag > b.tag) return 1;
        return 0;
    });
    let tags = [<MenuItem value={0} key={0} primaryText={'All Tags'}/>];
    let proVideoTagsList = state.proVideos.proVideoTags;
    let proVideoTags = [<MenuItem value={0} key={0} primaryText={'All Pro Video Tags'}/>];
    let pages = [];
    let loggedIn = state.auth.loggedIn;
    let pageName = state.feed.pageName;
    let favouritesIds = [];
    let isNextPage;
    let isPrevPage;
    let promoters = state.infoEvents.promoters;

    if (pageName == 'users') {
        feed = state.feed.mixes;
        currentPage = state.feed.pagination.current_page;
        lastPage = state.feed.pagination.last_page;
        nextPage = state.feed.pagination.current_page + 1;
        prevPage = state.feed.pagination.current_page - 1;
        isNextPage = state.feed.pagination.next_page_url == null;
        isPrevPage = state.feed.pagination.prev_page_url == null;
        for (let i = 0; i < state.feed.pagination.last_page; i++) {
            pages.push(<MenuItem value={i + 1} key={i + 1} primaryText={i + 1}/>);
        }
    }
    if (pageName == 'favorites') { feed = state.favorites.favorites }
    if (pageName == 'events') { feed = state.events.events }
    if (pageName == 'admin') { feed = state.issues.userIssues.data }
    if (pageName == 'venues') { feed = state.venues.allVenues }
    if (pageName == 'proVideo') {
        feed = state.proVideos.proVideos ;
        currentPage = state.proVideos.currentPage;
        lastPage = state.proVideos.totalPages;
        nextPage = parseInt(state.proVideos.currentPage) + 1;
        prevPage = parseInt(state.proVideos.currentPage) - 1;
        isNextPage = state.proVideos.currentPage >= state.proVideos.totalPages;
        isPrevPage = state.proVideos.currentPage <= 1;
        for (let i = 0; i < state.proVideos.totalPages; i++) {
            pages.push(<MenuItem value={i + 1} key={i + 1} primaryText={i + 1}/>);
        }
    }
    if (pageName == 'promotions') { feed = state.promotions.promotions }
    if (pageName == 'competitions') {feed = state.competitions.competitions}
    if (pageName == 'infoEvents') {
        feed = state.infoEvents.infoEvents;
        currentPage = state.infoEvents.currentPage;
        lastPage = state.infoEvents.totalPages;
        nextPage = parseInt(state.infoEvents.currentPage) + 1;
        prevPage = parseInt(state.infoEvents.currentPage) - 1;
        isNextPage = state.infoEvents.currentPage >= state.infoEvents.totalPages;
        isPrevPage = state.infoEvents.currentPage <= 1;

        for (let i = 0; i < state.infoEvents.totalPages; i++) {
            pages.push(<MenuItem value={i + 1} key={i + 1} primaryText={i + 1}/>);
        }
    }

    for (let i = 0; i < state.favorites.favorites.length; i++) {
        favouritesIds.push(parseInt(state.favorites.favorites[i].id));
    }

    if (pageName != 'favorites')  {
        for (let i = 0; i < feed.length; i++) {
            feed[i].isFavorite = favouritesIds.includes(feed[i].id);
        }
    }

    for (let i = 0; i < tagList.length; i++) {
        tags.push(<MenuItem value={tagList[i].id} key={i + 1} primaryText={tagList[i].tag}/>);
    }

    for (let i = 0; i < proVideoTagsList.length; i++) {
        proVideoTags.push(<MenuItem value={proVideoTagsList[i].id} key={i + 1} primaryText={proVideoTagsList[i].source_name}/>);
    }

    return {
        state,
        currentPage,
        lastPage,
        nextPage,
        prevPage,
        isNextPage,
        isPrevPage,
        mixes: feed,
        tagList,
        tags,
        loggedIn,
        pages,
        pageName,
        proVideoTags,
        promoters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadMixes: (page, tagId, environment) => dispatch(loadMixes(page, tagId, environment)),
        onLoadTags: (environment) => dispatch(loadTags(environment)),
        onLogIn: (pwd) => dispatch(logIn('user', pwd)),
        onCheckAuth: () => dispatch(checkAuth()),
        onLogout: () => dispatch(logOut()),
        onCheckPage: () => dispatch(checkPage()),
        onChangePage: (pageName) => dispatch({type: 'CHANGE_PAGE_TYPE', pageName}),
        onLoadProVideos: (environment, id, page) => dispatch(loadProVideos(environment, id, page)),
        onLoadProVideoTags: (environment) => dispatch(loadProVideoTags(environment)),
        onLoadPromotions: (environment) => dispatch(loadPromotions(environment)),
        onLoadVenues: (environment) => dispatch(loadVenues(environment)),
        onLoadCompetitions: (environment, competitionType) => dispatch(loadCompetitions(environment, competitionType)),
        onLoadInfoEvents: (environment, page) => dispatch(loadInfoEvents(environment, page)),
        onLoadPromoters: (environment) => dispatch(loadPromoters(environment)),
        onLoadAllVenues: (environment) => dispatch(loadAllVenues(environment)),
        onLoadCompetitionTemplates: (environment) => dispatch(loadCompetitionTemplates(environment))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
