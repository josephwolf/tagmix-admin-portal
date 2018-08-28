import React from 'react'
import {connect} from 'react-redux'
import {
    FlatButton,
    GridList,
    GridTile,
    Card,
    CardHeader,
    CardText,
    MenuItem,
    DropDownMenu,
    Dialog,
    TextField
} from "material-ui";
import {
    changeCurrentCompetition,
    deleteCompetition,
    editCompetition,
    getCompetitionDetails,
    getCompetitionWinners
} from "../actions/competitionActions";
import CompetitionMixTile from "./CompetitionMixTile";
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import CompetitionWinnerTile from "./CompetitionWinnerTile";
import Datetime from 'react-datetime';
import '../../../app/stylus/datetime.styl'
import { withStyles } from 'material-ui/styles';

class CompetitionTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: null,
            editBoxOpen: false,
            edited_competition_name: this.props.tile.name,
            start_time_formatted: new Date(this.props.tile.start_at),
            start_time: this.props.tile.start_at,
            end_time_formatted: new Date(this.props.tile.end_at),
            end_time: this.props.tile.end_at,
            info_message_template: this.props.tile.info_message_template,
            winner_message_template: this.props.tile.winner_message_template,
            page: 1,
            infoTemplate: this.props.tile.info_page_template,
            winnerTemplate: this.props.tile.winner_page_template,
            errorMessage: ''
        };

        this.changeInfoMessage = this.changeInfoMessage.bind(this);
        this.changeCompetitionName = this.changeCompetitionName.bind(this);
        this.changeStartTime = this.changeStartTime.bind(this);
        this.changeEndTime = this.changeEndTime.bind(this);
        this.changeInfoTemplate = this.changeInfoTemplate.bind(this);
        this.changeWinnerTemplate = this.changeWinnerTemplate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOpen = () => {
        this.setState({editBoxOpen: true});
    };

    handleClose = () => {
        this.setState({editBoxOpen: false});
    };

    confirmDelete = (tile, environment) => {
        if (window.confirm("Are you sure you want to delete this competition?")) {
            this.removeCompetitionFromCompetitions(tile, environment);
        }
    };

    removeCompetitionFromCompetitions = (tile, environment) => {
        this.props.onDeleteCompetition(this.props.tile.id, this.props.environment,);
    };


    getCompetitionDetails = (competitionId, environment, page) => {
        this.setState({page});
        this.props.onChangeCurrentCompetition(this.props.tile.id);
        this.props.onGetCompetitionDetails(this.props.tile.id, this.props.environment, page);
        this.props.onGetCompetitionWinners(this.props.tile.id, this.props.environment, page);
    };

    changeEntriesPage = (event, index, page) => {
        this.setState({page});
        this.getCompetitionDetails(this.props.tile.id, this.props.environment, page);
    };

    getCompetitionWinners = (competitionId, environment, page) => {
        this.props.onChangeCurrentCompetition(competitionId);
        this.getCompetitionDetails(this.props.tile.id, this.props.environment, page);
        this.props.onGetCompetitionWinners(this.props.tile.id, this.props.environment, page);
    };

    changeCompetitionName = (event, value) =>   { this.setState({ edited_competition_name: value }) };
    changeStartTime = (date) =>   { this.setState({ start_time_formatted: date }); this.setState({ start_time: date.toISOString() }) };
    changeEndTime = (date) =>     { this.setState({ end_time_formatted: date }); this.setState({ end_time: date.toISOString() }) };
    changeInfoMessage = (event, value) =>       { this.setState({ info_message_template: value}) };
    changeWinnerMessage = (event, value) =>       { this.setState({ winner_message_template: value}) };
    changeInfoTemplate = (event, value, template) =>       { this.setState({ infoTemplate: template}) };
    changeWinnerTemplate = (event, value, template) =>       { this.setState({ winnerTemplate: template}) };

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.start_time_formatted < this.state.end_time_formatted) {
            this.setState({ errorMessage: ''});
            this.props.onEditCompetition(this.props.tile.id, this.state.edited_competition_name, this.state.start_time, this.state.end_time, this.state.info_message_template, this.state.winner_message_template, this.state.infoTemplate, this.state.winnerTemplate, this.props.environment);
            this.setState({editBoxOpen: false});
        } else { this.setState({ errorMessage: 'End time must be later than start time!'})}
    };


    render() {
        const {
            currentPage,
            lastPage,
            nextPage,
            prevPage,
            isNextPage,
            isPrevPage,
            pages,
            tile,
            environment,
            competitionMixTiles,
            competitionMixWinners,
            competitionInfoTemplates,
            competitionWinnerTemplates
        } = this.props;

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />
        ];
        let tileType;
        if (tile.type == 1) tileType = 'Season';
        if (tile.type == 2) tileType = 'Festival';
        if (tile.type == 3) tileType = 'Daily';

        let statusMessage = '';
        if (tile.competition_effective_status === "undefined") statusMessage = "No Winners have been chosen yet.";
        if (tile.competition_effective_status === "created") statusMessage = "Ready for new Winner.";
        if (tile.competition_effective_status === "selected") statusMessage = "Winner has been selected and should be notified automatically. (You shouldn't see this message)";
        if (tile.competition_effective_status === "notified") statusMessage = "Winner has been notified. Waiting for them to make contact.";
        if (tile.competition_effective_status === "expired") statusMessage = "Selected Winner has expired! Another may be chosen.";
        if (tile.competition_effective_status === "approved") statusMessage = "Contact details received. Winner may collect their prize.";
        if (tile.competition_effective_status === "prize collected") statusMessage = "Prize has been collected. Hooray!";

        this.mixEntryFields = (tile) => {
            if (tile.can_select_winner !== false) {
                return (
                    <div>
                        <Card onExpandChange={ () => this.getCompetitionDetails(tile.id, this.props.environment, 1 )} style={{"backgroundColor": "#f2f2f2"}} >
                            <CardHeader
                                title="Show Entries"
                                actAsExpander={true}
                                showExpandableButton={true}
                            />
                            <CardText expandable={true} style={{flex: 1, flexDirection: 'row'}}>
                                <div className="container" style={{"marginTop": "-45px"}}>
                                    <FlatButton
                                        label="Prev Pg"
                                        labelPosition="after"
                                        disabled={isPrevPage}
                                        icon={<NavigationArrowBack/>}
                                        onClick={() => {this.getCompetitionDetails(tile.id, this.props.environment, prevPage)
                                        }}
                                    />
                                    <b>Page:
                                        <DropDownMenu maxHeight={300} value={this.state.page} onChange={this.changeEntriesPage} style={{"bottom": "-22px"}}>
                                            {pages}
                                        </DropDownMenu>
                                        of {lastPage}</b>
                                    <FlatButton
                                        label="Next Pg"
                                        labelPosition="before"
                                        disabled={isNextPage}
                                        icon={<NavigationArrowForward/>}
                                        onClick={() => {this.getCompetitionDetails(tile.id, this.props.environment, nextPage)}}
                                    />
                                </div>
                                <hr/>
                                <GridList cellHeight={"auto"} cols={1} padding={20}>
                                    <div>
                                        <div className="center-block">
                                            {competitionMixTiles.map((mixTile) => (
                                                <CompetitionMixTile tile={mixTile} key={mixTile.id} environment={this.props.environment} competitionId={tile.id}/>
                                            ))}
                                        </div>
                                        <hr/>
                                    </div>
                                </GridList>
                            </CardText>
                        </Card>
                    </div>
                )
            } else {
                return (
                    <div>
                        <b>No more winners may be selected!</b>
                    </div>
                )
            }
        };

        return (
            <GridTile key={tile.id}>
                <h4><b>Competition Name: {tile.name}</b></h4>
                <b>{statusMessage}</b><br/>
                <br/>
                <b>ID Number: </b> {tile.id}<br />
                <b>Event Name: </b> {tile.event_info_name}<br />
                <b>Competition type: </b> { tileType } <br />
                <b>Competition start: </b> {tile.start_at} <br />
                <b>Competition end: </b> {tile.end_at} <br />
                <b>Info Message Template: </b> {tile.info_message_template} <br />
                <b>Winner Message Template: </b> {tile.winner_message_template} <br />
                <br/>
                <FlatButton
                    label="Edit Competition"
                    onClick={ () => this.handleOpen() }
                    backgroundColor="#4286f4"
                    style={{"marginRight": "10px"}}
                />
                <FlatButton
                    label="Delete Competition"
                    onClick={ () => this.confirmDelete(tile, this.props.environment) }
                    backgroundColor="#E57373"
                />
                <br/>
                <br/>

                <Card onExpandChange={ () => this.getCompetitionWinners(tile.id, this.props.environment, 1 )} style={{"backgroundColor": "#f2f2f2"}} >
                    <CardHeader
                        title="Show Winners"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true} style={{flex: 1, flexDirection: 'row'}}>
                        <GridList cellHeight={"auto"} cols={1} padding={20}>
                            <div>
                                <div className="center-block">
                                    {competitionMixWinners.map((winnerTile) => (
                                        <CompetitionWinnerTile tile={winnerTile} key={winnerTile.id} environment={this.props.environment} competition_id={tile.id}/>
                                    ))}
                                </div>
                                <hr/>
                            </div>
                        </GridList>
                    </CardText>
                </Card>
                <br/>
                {this.mixEntryFields(this.props.tile)}

                <Dialog
                    title="Edit Competition"
                    actions={actions}
                    modal={false}
                    open={this.state.editBoxOpen}
                    onRequestClose={this.handleClose}
                    bodyStyle={{"overflowY": "visible"}}
                    autoScrollBodyContent={true}
                >
                    <form onSubmit={this.handleSubmit} >
                        <TextField
                            hintText="Competition Name (Used for internal identification)"
                            type="text" value={this.state.edited_competition_name} onChange={this.changeCompetitionName} style={{'width':'522px', 'marginRight': '10px'}}
                        />
                        <br/>
                        <TextField
                            hintText="Info message. Use {name} in place of the user's name."
                            floatingLabelText="Info message. Use {name} in place of the user's name."
                            multiLine={true}
                            rows={1}
                            rowsMax={2}
                            fullWidth={true}
                            type="text" value={this.state.info_message_template} onChange={this.changeInfoMessage} style={{'width':'522px', 'marginRight': '10px'}}
                        />
                        <br/>
                        <TextField
                            hintText="Winner message. Use {name} in place of the user's name."
                            floatingLabelText="Winner message. Use {name} in place of the user's name."
                            multiLine={true}
                            rows={1}
                            rowsMax={2}
                            fullWidth={true}
                            type="text" value={this.state.winner_message_template} onChange={this.changeWinnerMessage} style={{'width':'522px', 'marginRight': '10px'}}
                        />
                        <br/>
                        <DropDownMenu name={"infoTemplate"} value={this.state.infoTemplate} onChange={this.changeInfoTemplate} >
                            {competitionInfoTemplates}
                        </DropDownMenu>
                        <DropDownMenu name={"winnerTemplate"} value={this.state.winnerTemplate} onChange={this.changeWinnerTemplate} >
                            {competitionWinnerTemplates}
                        </DropDownMenu>
                        <br/>
                        <label>Start Time (UTC):</label>
                        <Datetime
                            value={this.state.start_time_formatted}
                            onChange={(date) => this.changeStartTime(date)}
                            dateFormat={"Do MMMM YYYY,"}
                            timeFormat={"HH:mm:ss"}
                            utc={true}
                        />
                        <label>End Time (UTC):</label>
                        <Datetime
                            value={this.state.end_time_formatted}
                            onChange={(date) => this.changeEndTime(date)}
                            dateFormat={"Do MMMM YYYY,"}
                            timeFormat={"HH:mm:ss"}
                            utc={true}
                        />
                        <br/>
                        <b style={{"color": "red"}}>{this.state.errorMessage}</b>
                        <br/>
                        <FlatButton
                            label="Submit"
                            type="submit" value="Submit"
                        />
                    </form>
                </Dialog>
                <hr />
            </GridTile>
        )
    }
}

const mapStateToProps = (state, props) => {
    //console.log("PROPS:", props);
    let pages = [];
    let competitionMixTiles = [];
    let competitionMixWinners = [];
    let competitionPaginationDetails;
    let competitionPaginationWinners;
    let currentPage = 1;
    let lastPage = 1;
    let nextPage;
    let prevPage;
    let isNextPage;
    let isPrevPage;

    if (state.competitions.currentCompetition === props.tile.id) {
        pages = [];

        competitionPaginationWinners = state.competitions.competitionPaginationWinners;
        competitionMixWinners = state.competitions.competitionMixWinners;

        competitionPaginationDetails = state.competitions.competitionPaginationDetails;
        competitionMixTiles = state.competitions.competitionMixDetails;

        currentPage = competitionPaginationDetails.current_page;
        lastPage = competitionPaginationDetails.last_page;
        nextPage = competitionPaginationDetails.current_page + 1;
        prevPage = competitionPaginationDetails.current_page - 1;
        isNextPage = competitionPaginationDetails.next_page_url == null;
        isPrevPage = competitionPaginationDetails.prev_page_url == null;

        for (let i = 0; i < competitionPaginationDetails.last_page; i++) {
            pages.push(<MenuItem value={i + 1} key={i + 1} primaryText={i + 1}/>);
        }
    }

    let competitionTemplatesList = state.competitions.templates;
    let competitionInfoTemplates = [<MenuItem value={"Please select an Info template"} key={0} primaryText={"Please select an Info template"}/>];
    let competitionWinnerTemplates = [<MenuItem value={"Please select a Winner template"} key={0} primaryText={"Please select a Winner template"}/>];

    for (let i = 0; i < competitionTemplatesList.length; i++) {
        competitionInfoTemplates.push(<MenuItem value={competitionTemplatesList[i]} key={i+1} primaryText={competitionTemplatesList[i]}/>);
        competitionWinnerTemplates.push(<MenuItem value={competitionTemplatesList[i]} key={i+1} primaryText={competitionTemplatesList[i]}/>);
    }

    return {
        state,
        currentPage,
        lastPage,
        nextPage,
        prevPage,
        isNextPage,
        isPrevPage,
        pages,
        competitionPaginationDetails,
        competitionMixTiles,
        competitionPaginationWinners,
        competitionMixWinners,
        competitionInfoTemplates,
        competitionWinnerTemplates
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteCompetition: (tileId, environment) => dispatch(deleteCompetition(tileId, environment)),
        onGetCompetitionDetails: (competitionId, environment, page) => dispatch(getCompetitionDetails(competitionId, environment, page)),
        onGetCompetitionWinners: (competitionId, environment, page) => dispatch(getCompetitionWinners(competitionId, environment, page)),
        onChangeCurrentCompetition: (competitionId) => dispatch(changeCurrentCompetition(competitionId)),
        onEditCompetition: (competitionId, competition_name, start_time, end_time, info_message_template, winner_message_template, infoTemplate, winnerTemplate, environment) => dispatch(editCompetition(competitionId, competition_name, start_time, end_time, info_message_template, winner_message_template, infoTemplate, winnerTemplate, environment))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompetitionTile);


