import React from 'react'
import {connect} from 'react-redux'
import {GridTile} from "material-ui";
import {FacebookShareButton, TwitterShareButton} from "react-share/lib/share-buttons";
import {generateShareIcon, ShareButtons} from "react-share";

class EventTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const tile = this.props.tile;

        const {
            FacebookShareButton,
            TwitterShareButton
        } = ShareButtons;

        const FacebookIcon = generateShareIcon('facebook');
        const TwitterIcon = generateShareIcon('twitter');

        return (
            <GridTile key={tile.id}>
                <div className="row">
                <div className="col-md-6">
                    <img src={tile.event_brand_img} className="col-md-12"/>
                    <div className="col-md-2">
                        <FacebookShareButton url={tile.listing_buy_tickets_link} className="icon-nudge">
                            <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>
                    </div>
                    <div className="col-md-2">
                        <TwitterShareButton url={tile.listing_buy_tickets_link} className="icon-nudge">
                            <TwitterIcon size={32} round={true}/>
                        </TwitterShareButton>
                    </div>
                </div>
                <div className="col-md-6">
                    <b>Listing ID: {tile.listing_id}</b><br/>
                    <b>Event Music Style:</b> {tile.event_music_style}<br />
                    <b>Event Name:</b> {tile.event_name}<br />
                    <b>Opening Hours:</b> {tile.event_opening_hours}<br />
                    <b>Venue Name:</b> {tile.event_venue_name}<br />
                    <b>Listing Name:</b> {tile.listing_alias}<br />
                    <b>Buy Tickets Link:</b> <a target="_blank" href={tile.listing_buy_tickets_link}> {tile.listing_buy_tickets_link}</a><br />
                    <b>Listing Date:</b> {tile.listing_date}<br />
                    <b>Early Price:</b> {tile.listing_earlybird_price}<br />
                    <b>Early Message:</b> {tile.listing_earlybird_price_message}<br />
                    <b>Listing Name:</b> {tile.listing_name}<br />
                    <b>Performer Info:</b> {tile.listing_performer_info}<br />
                    <b>Listing Price:</b> {tile.listing_ticket_price}<br />

                    {/*<b>Event Alias:</b> {tile.event_alias}<br />*/}
                    {/*<b>Listing Link:</b> {tile.listing_buy_listing_link}<br />*/}
                    {/*Brand Image: {tile.event_brand_img}<br />*/}
                    {/*Event ID: {tile.event_id}<br />*/}
                    {/*Short Info: {tile.event_short_info}<br />*/}
                    {/*Event Info: {tile.event_long_info}<br />*/}
                    {/*Slideshow: {tile.event_slideshow_img_list}<br />*/}
                    {/*Event Type: {tile.event_type}<br />*/}
                    {/*Event Type Alias: {tile.event_type_alias}<br />*/}
                    {/*Event Address: {tile.event_venue_address}<br />*/}
                    {/*Venue Name: {tile.event_venue_alias}<br />*/}
                    {/*Event Latitude: {tile.event_venue_lat}<br />*/}
                    {/*Event Longitude: {tile.event_venue_lon}<br />*/}
                    {/*Maximum Occupancy: {tile.listing_allocation_warning_message}<br />*/}
                    {/*Date Timestamp: {tile.listing_date_timestamp}<br />*/}
                    <br/>
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
        dispatch
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventTile);


