import React from 'react'
import {connect} from 'react-redux'
import {FlatButton, GridTile} from "material-ui";
import {deleteVenue} from "../actions/venuesActions";

class VenueTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    confirmDelete = (tile, environment) => {
        if (window.confirm("Are you sure you want to delete this venue?")) {
            this.removeVenueFromVenues(tile, environment);
        }
    };

    removeVenueFromVenues = (tile, environment) => {
        console.log("tile props", this.props);
        console.log("deleting from", environment);
        this.props.onDeleteProVideo(tile.id, environment);
    };

    timeFields = (tile) => {
        if (tile.start_time) {
            return (
                <div>
                    <b>Start Time: </b> {tile.start_time}<br />
                    <b>End Time: </b> {tile.end_time}<br />
                </div>
            )
        }
    };

    render() {
        const tile = this.props.tile;
        const environment = this.props.environment;

        return (
            <GridTile key={tile.id}>
                <h4><b>Venue Name: {tile.venue_name}</b></h4>
                <div className="row">
                    <div className="col-md-8">
                        <b>Venue type: </b> {tile.venue_type} <br />
                        <b>Latitude: </b> {tile.latitude} <b>Longitude: </b> {tile.longitude} <br />
                        <b>Added on: </b> {tile.date_added}<br/>
                        {this.timeFields(tile)}
                    </div>
                    <div className="col-md-4">
                        <FlatButton
                            label="Delete Venue"
                            onClick={ () => this.confirmDelete(tile, environment) }
                            backgroundColor="#E57373"
                        />
                    </div>
                </div>
                <hr />
            </GridTile>
        )
    }
}

const mapStateToProps = (state) => { return state };

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteProVideo: (tileId, environment) => dispatch(deleteVenue(tileId, environment))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VenueTile);


