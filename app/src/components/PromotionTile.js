import React from 'react'
import {connect} from 'react-redux'
import {FlatButton, GridTile} from "material-ui";
import 'react-html5video/dist/styles.css';
import {deletePromotion} from "../actions/promotionsActions";

class PromotionTile extends React.Component {
    constructor(props) {
        super(props);
    }

    confirmDelete = (tile) => {
        if (window.confirm("Are you sure you want to delete this promotion?")) {
            this.removePromotionsFromPromotions(tile);
        }
    };

    removePromotionsFromPromotions = (tile) => {
        this.props.onDeletePromotion(this.props.environment, tile.id);
    };

    render() {
        const tile = this.props.tile;

        return (
            <GridTile key={tile.id}>

                <h4><b>Promotion Name: {tile.title}</b></h4>
                <div className="row">
                    <div className="col-md-12">
                        <b>ID: </b> {tile.id} <br />
                        <b>Base Url: </b> {tile.link_url} <br />
                        <b>Body Text: </b> {tile.body} <br />
                        <b>Venue: </b> {tile.venue_name} <br />
                        <b>Maximum Allocations: </b> {tile.maximum_allocations} <br />
                        <b>Already Claimed: </b> {tile.users_allocated} <br />
                        <b>Start Time: </b> {tile.start_time} <br />
                        <b>End Time: </b> {tile.end_time} <br />
                        <b>Created: </b> {tile.created_at} <br />
                        <b>Promotion Type: </b> {tile.promotion_type} <br />
                    </div>
                    <br/>
                    <FlatButton
                        label="Delete Promotion"
                        onClick={ () => this.confirmDelete(tile) }
                        backgroundColor="#E57373"
                    />
                </div>
                <hr />
            </GridTile>
        )
    }
}

const mapStateToProps = (state) => { return state };

const mapDispatchToProps = (dispatch) => {
    return {
        onDeletePromotion: (environment, promotionId) => dispatch(deletePromotion(environment, promotionId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PromotionTile);


