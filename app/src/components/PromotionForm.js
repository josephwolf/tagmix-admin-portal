import React from 'react'
import {connect} from "react-redux";
import {Card, CardHeader, CardText, DropDownMenu, FlatButton, MenuItem, TextField} from "material-ui";
import {savePromotion} from "../actions/promotionsActions";
import Datetime from 'react-datetime';
import '../../../app/stylus/datetime.styl'

class PromotionsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            promotion_title: '',
            promotion_body: '',
            promotion_url: '',
            maximum_allocations: 0,
            start_time_formatted: new Date(),
            start_time: '',
            end_time_formatted: new Date(),
            end_time: '',
            selectedVenue: 0,
            venue_id: 0,
            venue_name: '',
            promotion_type_id: 1,
            promotion_type: 'proximity',
        };

        this.changePromotionTitle = this.changePromotionTitle.bind(this);
        this.changePromotionBody = this.changePromotionBody.bind(this);
        this.changePromotionUrl = this.changePromotionUrl.bind(this);
        this.changePromotionMaximumAllocations = this.changePromotionMaximumAllocations.bind(this);
        this.changeStartTime = this.changeStartTime.bind(this);
        this.changeEndTime = this.changeEndTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changePromotionTitle(event) { this.setState({promotion_title: event.target.value}) }
    changePromotionBody(event)  { this.setState({promotion_body: event.target.value}) }
    changePromotionUrl(event)   { this.setState({promotion_url: event.target.value}) }
    changePromotionMaximumAllocations(event)   { this.setState({maximum_allocations: event.target.value}) }
    changeStartTime = (date) =>   { this.setState({ start_time_formatted: date }); this.setState({ start_time: date.toISOString() }) };
    changeEndTime = (date) =>     { this.setState({ end_time_formatted: date }); this.setState({ end_time: date.toISOString() }) };

    changeVenue = (event, index, selectedVenue) => {
        console.log("selected venue id:", selectedVenue);
        console.log("selected venue index:", index);
        this.setState({selectedVenue});
        this.setState({venue_id: selectedVenue});
        this.setState({venue_name: event.target.innerText});
    };

    changePromotionType = (event, index, promotion_type_id) => {
        console.log("environment:", this.props.environment);
        this.setState({promotion_type_id});
        this.setState({promotion_type_id: promotion_type_id});
        if (promotion_type_id == 1) {this.setState({promotion_type: 'proximity'})}
        if (promotion_type_id == 2) {this.setState({promotion_type: 'mix'})}
    };


    handleSubmit(event) {
        event.preventDefault();
        console.log('Submit data:', this.state);
        this.props.onSavePromotion(
            this.props.environment,
            this.state.promotion_title,
            this.state.promotion_body,
            this.state.promotion_url,
            this.state.venue_id,
            this.state.venue_name,
            this.state.maximum_allocations,
            this.state.start_time,
            this.state.end_time,
            this.state.promotion_type
        );
    }

    render() {
        const {
            venues
        } = this.props;

        return (
            <div>
                <Card>
                    <CardHeader
                        title="Add New Promotion"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true} style={{flex: 1, flexDirection: 'row'}}>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                hintText="Title"
                                type="text" value={this.state.promotion_title} onChange={this.changePromotionTitle} style={{'marginRight': '10px'}}
                            />
                            <br/>
                            <TextField
                                hintText="Promotion Body Text"
                                type="text" value={this.state.promotion_body} onChange={this.changePromotionBody} style={{'width':'522px','marginRight': '10px'}}
                            />
                            <br/>
                            <TextField
                                hintText="Url"
                                type="text" value={this.state.promotion_url} onChange={this.changePromotionUrl} style={{'width':'522px','marginRight': '10px'}}
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
                            <DropDownMenu value={this.state.promotion_type_id} onChange={this.changePromotionType}>
                                <MenuItem value={1} primaryText="Activates when user is near venue" />
                                <MenuItem value={2} primaryText="Activates when user creates a mix at venue" />
                            </DropDownMenu>
                            <DropDownMenu maxHeight={300} value={this.state.selectedVenue} onChange={this.changeVenue}>
                                {venues}
                            </DropDownMenu>
                            <br/>
                            <label style={{'marginRight': '10px'}}>Number of allocations: </label>
                            <TextField
                                hintText="Maximum Allocations"
                                type="number" value={this.state.maximum_allocations} onChange={this.changePromotionMaximumAllocations} style={{'marginRight': '10px'}}
                            />
                            <br/>
                            <FlatButton
                                label="Submit"
                                backgroundColor="#4286f4"
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
    let venueList = state.venues.allVenues;
    let venues = [<MenuItem value={0} key={0} primaryText={'Please select a venue'}/>];

    for (let i = 0; i < venueList.length; i++) {
        venues.push(<MenuItem value={venueList[i].id} key={i + 1} primaryText={venueList[i].venue_name}/>);
    }
    return {state, venues, venueList}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSavePromotion: (environment, title, body, link_url, venue_id, venue_name, maximum_allocations, start_time, end_time, promotion_type) =>
            dispatch(savePromotion(environment, title, body, link_url, venue_id, venue_name, maximum_allocations, start_time, end_time, promotion_type))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PromotionsForm);
