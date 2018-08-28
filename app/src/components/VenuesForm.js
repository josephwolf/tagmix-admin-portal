import React from 'react'
import {connect} from "react-redux";
import {Card, CardHeader, CardText, DropDownMenu, FlatButton, MenuItem, TextField} from "material-ui";
import {saveVenue} from "../actions/venuesActions";
import Datetime from 'react-datetime';
import '../../../app/stylus/datetime.styl'

class VenuesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            venue_name: '',
            venue_type: 'club',
            latitude: '',
            longitude: '',
            start_time_formatted: new Date(),
            start_time: '',
            end_time_formatted: new Date(),
            end_time: ''
        };

        this.changeName = this.changeName.bind(this);
        this.changeType = this.changeType.bind(this);
        this.changeLatitude = this.changeLatitude.bind(this);
        this.changeLongitude = this.changeLongitude.bind(this);
        this.changeStartTime = this.changeStartTime.bind(this);
        this.changeEndTime = this.changeEndTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeName(event)       { this.setState({venue_name: event.target.value}) }
    changeType(event)       { this.setState({venue_type: event.target.textContent}) }
    changeLatitude(event)   { this.setState({latitude: event.target.value}) }
    changeLongitude(event)  { this.setState({longitude: event.target.value}) }
    changeStartTime = (date) =>   { this.setState({ start_time_formatted: date }); this.setState({ start_time: date.toISOString() }) };
    changeEndTime = (date) =>     { this.setState({ end_time_formatted: date }); this.setState({ end_time: date.toISOString() }) };

    handleSubmit(event) {
        event.preventDefault();
        console.log('Submit data:', this.state);
        this.props.onSaveProVideo(this.state.venue_name, this.state.venue_type, this.state.latitude, this.state.longitude, this.state.start_time, this.state.end_time, this.props.environment);
    }

    optionalFormFields = () => {
        if (this.state.venue_type == 'festival') {
            return (
                <div>
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
                </div>
            )
        } else {
            this.state.start_time = '';
            this.state.end_time = '';
        }
    };

    render() {
        return (
            <div>

                <Card>
                    <CardHeader
                        title="Add New Venue"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true} style={{flex: 1, flexDirection: 'row'}}>
                        <form onSubmit={this.handleSubmit}>
                            <DropDownMenu value={this.state.venue_type} onChange={this.changeType}>
                                <MenuItem value={"club"} primaryText={"club"} />
                                <MenuItem value={"festival"} primaryText={"festival"} />
                            </DropDownMenu>
                            <TextField
                                hintText="Venue Name"
                                type="text" value={this.state.venue_name} onChange={this.changeName} style={{'width': '20%', 'marginRight': '10px'}}
                            />
                            <TextField
                                hintText="Latitude"
                                type="text" value={this.state.latitude} onChange={this.changeLatitude} style={{'width': '20%', 'marginRight': '10px'}}
                            />
                            <TextField
                                hintText="Longitude"
                                type="text" value={this.state.longitude} onChange={this.changeLongitude} style={{'width': '20%', 'marginRight': '10px'}}
                            />
                            {this.optionalFormFields()}
                            <br/>
                            <FlatButton
                                label="Submit"
                                type="submit" value="Submit"
                            />
                            <br/>
                            <FlatButton
                                label="Click here to find your latitude and longitude"
                                onClick={() => {window.open('https://www.latlong.net/', '_blank').focus()}}
                            />
                        </form>
                    </CardText>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => { return state };

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveProVideo: (venue_name, venue_type, latitude, longitude, start_time, end_time, environment) => dispatch(saveVenue(venue_name, venue_type, latitude, longitude, start_time, end_time, environment))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VenuesForm);
