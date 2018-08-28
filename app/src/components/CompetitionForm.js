import React from 'react'
import {connect} from "react-redux";
import {Card, CardHeader, CardText, DropDownMenu, FlatButton, MenuItem, TextField} from "material-ui";
import {loadVenueEvents, saveCompetition} from "../actions/competitionActions";
import Datetime from 'react-datetime';
import '../../../app/stylus/datetime.styl'


class CompetitionsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 0,
            competition_name: '',
            start_time_formatted: new Date(),
            end_time_formatted: new Date(),
            info_message_template: '',
            winner_message_template: '',
            venueId: 0,
            venueEventId: 0,
            errorMessage: '',
            infoTemplate: 'Please select an Info template',
            winnerTemplate: 'Please select a Winner template',
            expanded: false
        };

        this.changeInfoMessage = this.changeInfoMessage.bind(this);
        this.changeWinnerMessage = this.changeWinnerMessage.bind(this);
        this.changeType = this.changeType.bind(this);
        this.changeCompetitionName = this.changeCompetitionName.bind(this);
        this.changeVenue = this.changeVenue.bind(this);
        this.changeVenueEvent = this.changeVenueEvent.bind(this);
        this.changeStartTime = this.changeStartTime.bind(this);
        this.changeEndTime = this.changeEndTime.bind(this);
        this.changeInfoTemplate = this.changeInfoTemplate.bind(this);
        this.changeWinnerTemplate = this.changeWinnerTemplate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeType = (event, value) =>       { this.setState({ type: value}) };
    changeCompetitionName = (event, competition_name) =>   { this.setState({ competition_name: competition_name }) };
    changeVenue = (event, value, venueId) =>       { this.setState({ venueId: venueId}); this.props.onLoadVenueEvents(venueId, this.props.environment ) };
    changeVenueEvent = (event, value, venueEventId) =>       { this.setState({ venueEventId: venueEventId}) };
    changeInfoMessage = (event, value) =>       { this.setState({ info_message_template: value}) };
    changeWinnerMessage = (event, value) =>       { this.setState({ winner_message_template: value}) };
    changeInfoTemplate = (event, value, template) =>       { this.setState({ infoTemplate: template}) };
    changeWinnerTemplate = (event, value, template) =>       { this.setState({ winnerTemplate: template}) };
    changeStartTime = (date) =>   { this.setState({ start_time_formatted: date }) };
    changeEndTime = (date) =>     { this.setState({ end_time_formatted: date }) };

    handleExpandChange = (expanded) => { this.setState({expanded: expanded}) };

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.type != 0) {
            if (this.state.competition_name != '') {
                if ((this.state.venueEventId != 0) || (this.state.type == 1)) {
                    if ((this.state.infoTemplate != 'Please select an Info template') && (this.state.winnerTemplate != 'Please select a Winner template')) {
                        if (this.state.start_time_formatted < this.state.end_time_formatted) {
                            this.setState({ errorMessage: ''});
                            this.props.onSaveCompetition(this.state.type, this.state.start_time_formatted.toISOString(), this.state.end_time_formatted.toISOString(), this.state.info_message_template, this.state.winner_message_template, this.state.competition_name, this.state.infoTemplate, this.state.winnerTemplate, this.state.venueEventId, this.props.environment);
                            this.handleExpandChange(false)
                        } else { this.setState({ errorMessage: 'End time must be later than start time!'})}
                    } else { this.setState({ errorMessage: 'Please choose info and winner templates.'})}
                } else { this.setState({ errorMessage: 'Please choose a competition venue and event.'})}
            } else { this.setState({ errorMessage: 'Please choose a competition name.'})}
        } else { this.setState({ errorMessage: 'Please choose a competition type.'})}
    }

    chooseVenueField = () => {
        const {
            venues
        } = this.props;

        if ((this.state.type !== 0) && (this.state.type !== 1)) {
            return (
                <div>
                    <br/>
                    <DropDownMenu name={"venueId"} value={this.state.venueId} onChange={this.changeVenue} >
                        {venues}
                    </DropDownMenu>
                </div>
            )
        }
    };

    chooseEventField = () => {
        const {
            venueEvents
        } = this.props;

        if ((this.state.type !== 0) && (this.state.venueId !== 0)) {
            return (
                <div>
                    <br/>
                    <DropDownMenu name={"venueEventId"} value={this.state.venueEventId} onChange={this.changeVenueEvent} >
                        {venueEvents}
                    </DropDownMenu>
                </div>
            )
        }
    };

    render() {
        const {
            competitionInfoTemplates,
            competitionWinnerTemplates
        } = this.props;

        return (
            <div>
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} >
                    <CardHeader
                        title="Add New Competition"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true} style={{flex: 1, flexDirection: 'row'}}>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                hintText="Competition Name (Used for internal identification)"
                                type="text" value={this.state.competition_name} onChange={this.changeCompetitionName} style={{'width':'522px', 'marginRight': '10px'}}
                            />
                            <br/>
                            <DropDownMenu value={this.state.type} onChange={this.changeType}>
                                <MenuItem value={0} primaryText={"Choose a competition type"} />
                                <MenuItem value={1} primaryText={"Season"} />
                                <MenuItem value={2} primaryText={"Festival"} />
                                <MenuItem value={3} primaryText={"Daily"} />
                            </DropDownMenu>
                            {this.chooseVenueField()}
                            {this.chooseEventField()}
                            <TextField
                                hintText="Info message. Use {name} in place of the user's name."
                                floatingLabelText="Info message. Use {name} in place of the user's name."
                                multiLine={true}
                                rows={1}
                                rowsMax={2}
                                fullWidth={true}
                                type="text" value={this.state.info_message_template} onChange={this.changeInfoMessage} style={{'marginRight': '10px'}}
                            />
                            <br/>
                            <TextField
                                hintText="Winner message. Use {name} in place of the user's name."
                                floatingLabelText="Winner message. Use {name} in place of the user's name."
                                multiLine={true}
                                rows={1}
                                rowsMax={2}
                                fullWidth={true}
                                type="text" value={this.state.winner_message_template} onChange={this.changeWinnerMessage} style={{'marginRight': '10px'}}
                            />
                            <br/>
                            <DropDownMenu name={"infoTemplate"} value={this.state.infoTemplate} onChange={this.changeInfoTemplate} >
                                {competitionInfoTemplates}
                            </DropDownMenu>
                            <DropDownMenu name={"winnerTemplate"} value={this.state.winnerTemplate} onChange={this.changeWinnerTemplate} >
                                {competitionWinnerTemplates}
                            </DropDownMenu>
                            <br/>
                            <label>Start Time (UTC):</label><Datetime
                                value={this.state.start_time_formatted}
                                onChange={(date) => this.changeStartTime(date)}
                                dateFormat={"Do MMMM YYYY,"}
                                timeFormat={"HH:mm:ss"}
                                utc={true}
                            />
                            <label>End Time (UTC):</label><Datetime
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
                    </CardText>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let venueList = state.venues.allVenues.sort(function(a, b){
        if(a.venue_name < b.venue_name) return -1;
        if(a.venue_name > b.venue_name) return 1;
        return 0;
    });
    let venues = [<MenuItem value={0} key={0} primaryText={"Please select a venue"}/>];

    let venueEventList = state.competitions.venueEvents;
    let venueEvents = [<MenuItem value={0} key={0} primaryText={"Please select an event"}/>];

    let competitionTemplatesList = state.competitions.templates;
    let competitionInfoTemplates = [<MenuItem value={"Please select an Info template"} key={0} primaryText={"Please select an Info template"}/>];
    let competitionWinnerTemplates = [<MenuItem value={"Please select a Winner template"} key={0} primaryText={"Please select a Winner template"}/>];

    for (let i = 0; i < venueList.length; i++) {
        venues.push(<MenuItem value={venueList[i].id} key={i+1} primaryText={venueList[i].venue_name}/>);
    }

    for (let i = 0; i < competitionTemplatesList.length; i++) {
        competitionInfoTemplates.push(<MenuItem value={competitionTemplatesList[i]} key={i+1} primaryText={competitionTemplatesList[i]}/>);
        competitionWinnerTemplates.push(<MenuItem value={competitionTemplatesList[i]} key={i+1} primaryText={competitionTemplatesList[i]}/>);
    }

    for (let i = 0; i < venueEventList.length; i++) {
        venueEvents.push(<MenuItem value={venueEventList[i].id} key={i+1} primaryText={venueEventList[i].event_name}/>);
    }

    return { venues, venueEvents, competitionInfoTemplates, competitionWinnerTemplates }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveCompetition: (type, start_time, end_time, info_message_template, winner_message_template, competition_name, info_page_template, winner_page_template, event_info_id, environment) => dispatch(saveCompetition(type, start_time, end_time, info_message_template, winner_message_template, competition_name, info_page_template, winner_page_template, event_info_id, environment)),
        onLoadVenueEvents: (venueId, environment) => dispatch(loadVenueEvents(venueId, environment))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompetitionsForm);
