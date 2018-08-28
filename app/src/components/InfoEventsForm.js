import React from 'react'
import {connect} from "react-redux";
import {Card, CardHeader, CardText, DropDownMenu, FlatButton, MenuItem, TextField} from "material-ui";
import {saveInfoEvent} from "../actions/infoEventsActions";
import Datetime from 'react-datetime';
import '../../../app/stylus/datetime.styl'

class InfoEventsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            event_name: '',
            description: '',
            image_url: '',
            link: '',
            venue_id: 0,
            start_time_formatted: new Date(),
            start_time: '',
            end_time_formatted: new Date(),
            end_time: '',
            promoter_id: 0
        };

        this.changeEventName = this.changeEventName.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changeImageUrl = this.changeImageUrl.bind(this);
        this.changeLink = this.changeLink.bind(this);
        this.changeVenueId = this.changeVenueId.bind(this);
        this.changePromoterId = this.changePromoterId.bind(this);
        this.changeStartTime = this.changeStartTime.bind(this);
        this.changeEndTime = this.changeEndTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeEventName = (event, value) =>       { this.setState({ event_name: value}) };
    changeDescription = (event, value) =>       { this.setState({ description: value}) };
    changeImageUrl = (event, value) =>       { this.setState({ image_url: value}) };
    changeLink = (event, value) =>       { this.setState({ link: value}) };
    changeStartTime = (date) =>   { this.setState({ start_time_formatted: date }); this.setState({ start_time: date.toISOString() }) };
    changeEndTime = (date) =>     { this.setState({ end_time_formatted: date }); this.setState({ end_time: date.toISOString() }) };
    changeVenueId = (event, value, venueId) => {this.setState({ venue_id: venueId}) };
    changePromoterId = (event, value, promoterId) => {this.setState({ promoter_id: promoterId}) };

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSaveInfoEvent(this.state.event_name, this.state.description, this.state.image_url, this.state.link, this.state.venue_id, this.state.start_time, this.state.end_time, this.state.promoter_id, this.props.environment);
    }

    render() {
        const {
            venues,
            promoters
        } = this.props;

        return (
            <div>
                <Card>
                    <CardHeader
                        title="Add New Event"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true} style={{flex: 1, flexDirection: 'row'}}>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                hintText="Event Name"
                                type="text" value={this.state.event_name} onChange={this.changeEventName} style={{'width':'522px', 'marginRight': '10px'}}
                            />
                            <br/>
                            <DropDownMenu name={"venueId"} value={this.state.venue_id} onChange={(event, value, venueId) => this.changeVenueId(event, value, venueId)} >
                                {venues}
                            </DropDownMenu>
                            <br/>
                            <DropDownMenu name={"promoterId"} value={this.state.promoter_id} onChange={(event, value, promoterId) => this.changePromoterId(event, value, promoterId)} >
                                {promoters}
                            </DropDownMenu>
                            <br/>
                            <TextField
                                hintText="Description"
                                type="text" value={this.state.description} onChange={this.changeDescription} style={{'width':'522px', 'marginRight': '10px'}}
                            />
                            <br/>
                            <TextField
                                hintText="Image Url"
                                type="text" value={this.state.image_url} onChange={this.changeImageUrl} style={{'width':'522px', 'marginRight': '10px'}}
                            />
                            <br/>
                            <TextField
                                hintText="Link to Event Details"
                                type="text" value={this.state.link} onChange={this.changeLink} style={{'width':'522px', 'marginRight': '10px'}}
                            />
                            <br/>
                            <label>Start Time:</label>
                            <Datetime
                                value={this.state.start_time_formatted}
                                onChange={(date) => this.changeStartTime(date)}
                            />
                            <label>End Time:</label>
                            <Datetime
                                value={this.state.end_time_formatted}
                                onChange={(date) => this.changeEndTime(date)}
                            />
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

    let promoterList = state.infoEvents.promoters;
    let promoters = [<MenuItem value={0} key={0} primaryText={"Select a Promoter (if any)"}/>];

    for (let i = 0; i < promoterList.length; i++) {
        promoters.push(<MenuItem value={promoterList[i].id} key={i+1} primaryText={promoterList[i].name}/>);
    }

    for (let i = 0; i < venueList.length; i++) {
        venues.push(<MenuItem value={venueList[i].id} key={i+1} primaryText={venueList[i].venue_name}/>);
    }

    return { venues, promoters }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveInfoEvent: (event_name, description, image_url, link, venue_id, start_at, end_at, promoter_id, environment) => dispatch(saveInfoEvent(event_name, description, image_url, link, venue_id, start_at, end_at, promoter_id, environment)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoEventsForm);
