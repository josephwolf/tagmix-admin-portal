import React from 'react'
import {connect} from 'react-redux'
import {Checkbox, FlatButton, GridTile} from "material-ui";
import {deleteInfoEvent, togglePartnerEvent} from "../actions/infoEventsActions";

class InfoEventsTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    confirmDelete = (tile, environment) => {
        if (window.confirm("Are you sure you want to delete this event?")) {
            this.removeEventFromEventInfo(tile, environment);
        }
    };

    removeEventFromEventInfo = (tile, environment) => {
        console.log("deleting from", environment);
        this.props.onDeleteInfoEvent(tile.id, environment);
    };

    promoterName() {
        let promoterList = this.props.promoters;
        let promoterName = 'Not a Promoter Event!';

        for (let i = 0; i < promoterList.length; i++) {
            if (promoterList[i].id == this.props.tile.promoter_id) {promoterName = promoterList[i].name}
        }

        if (this.props.tile.promoter_id != 0) {
            return (
                <div>
                    <b>Promoter Name: </b> {promoterName} <br />
                </div>
            )
        }
    };

    render() {
        const tile = this.props.tile;
        const environment = this.props.environment;
        let isPartnerEvent;
        tile.is_partner_event === 1 ? isPartnerEvent = true : isPartnerEvent = false;

        return (
            <GridTile key={tile.id}>
                <h4><b>Event Name: {tile.event_name}</b></h4>
                <div className="row">
                    <div className="col-sm-4 col-md-3">
                        <img src={tile.image_url} style={{"width": "100%"}} />
                        <Checkbox
                            label="Partner Event"
                            checked={isPartnerEvent}
                            onCheck={() => { this.props.onTogglePartnerEvent(tile.id, this.props.environment, this.props.page) }}
                        />
                    </div>

                    <div className="col-sm-8 col-md-9">
                        <b>Venue: </b> {tile.venue_name} <br />
                        <b>Description: </b> {tile.description} <br />
                        {this.promoterName()}
                        <b>Start: </b> {tile.start_at} <br />
                        <b>End: </b> {tile.end_at} <br />
                    </div>
                </div>
                <br/>
                <FlatButton
                    label="Delete Event"
                    onClick={ () => this.confirmDelete(tile, environment) }
                    backgroundColor="#E57373"
                />
                <hr />
            </GridTile>
        )
    }
}

const mapStateToProps = (state) => { return {state} };

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteInfoEvent: (tileId, environment) => dispatch(deleteInfoEvent(tileId, environment)),
        onTogglePartnerEvent: (eventId, environment, page) => dispatch(togglePartnerEvent(eventId, environment, page))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoEventsTile);


