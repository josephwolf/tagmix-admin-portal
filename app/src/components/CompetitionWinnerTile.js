import React from 'react'
import {connect} from 'react-redux'
import {Card, CardHeader, CardText, Checkbox, FlatButton, GridTile, TextField} from "material-ui";
import {DefaultPlayer as Video} from "react-html5video";
import 'react-html5video/dist/styles.css';
import {winnerApproved, winnerCollectedPrize, winnerSelected} from "../actions/competitionActions";

class CompetitionWinnerTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tilesToRenderVideoIds: [],
            showDetailsField: false,
            userDetails: '',
            errorMessage: ''
        };

        this.changeUserDetails = this.changeUserDetails.bind(this);
    }

    changeUserDetails = (event, value) => { this.setState({ userDetails: value}) };

    renderVideo = (tile) => {
        const newTilesToRenderVideoIds = this.state.tilesToRenderVideoIds;
        newTilesToRenderVideoIds.push(tile.id);
        this.setState({tilesToRenderIds: newTilesToRenderVideoIds});
    };

    unrenderVideo = (tile) => {
        const newTilesToRenderVideoIds = this.state.tilesToRenderVideoIds;
        let idToRemove = newTilesToRenderVideoIds.indexOf(tile.id);
        if (idToRemove > -1) {
            newTilesToRenderVideoIds.splice(idToRemove, 1)
        }
        this.setState({tilesToRenderIds: newTilesToRenderVideoIds});
    };

    handleSubmit =(event)=> {
        event.preventDefault();
       if (this.state.userDetails.length >= 10) {
            this.setState({ errorMessage: ''});
            this.props.onWinnerApproved(this.props.tile.id, this.props.competition_id, this.state.userDetails, this.props.environment);
            this.toggleDetailsForm()
        } else {this.setState({ errorMessage: 'User details must be at least 10 characters long.'})}
    };

    detailsForm =()=> {
        if (this.state.showDetailsField) {
            return (
                <div>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            hintText="Submit user contact details"
                            type="text" value={this.state.userDetails} onChange={this.changeUserDetails}
                        />
                        <FlatButton label="Submit" type="submit" value="Submit"/>
                        <br/>
                        <b style={{"color": "red"}}>{this.state.errorMessage}</b>
                    </form>
                </div>
            )
        }
    };

    processingButtons =()=> {
        const { tile } = this.props;
        let canBeNotified = true;
        let canBeApproved = true;
        let canBeCollectedPrize = true;

        if (tile.status === 'created') { canBeNotified = true; canBeApproved = false; canBeCollectedPrize = false; }
        if (tile.status === 'selected') { canBeNotified = false; canBeApproved = false; canBeCollectedPrize = false; }
        if (tile.status === 'notified') { canBeNotified = false; canBeApproved = true; canBeCollectedPrize = true; }
        if (tile.status === 'approved') { canBeNotified = false; canBeApproved = false; canBeCollectedPrize = true; }
        if (tile.status === 'prize collected') { canBeNotified = false; canBeApproved = false; canBeCollectedPrize = false; }
        if (tile.status === 'expired') { canBeNotified = false; canBeApproved = true; canBeCollectedPrize = true; }


        if (tile.can_select_winner || (tile.status !== 'created')) {
            return (
                <div>
                    <br/>
                    <FlatButton
                        label="SEND NOTIFICATION"
                        disabled={!canBeNotified}
                        onClick={() => {this.props.onWinnerSelected(this.props.tile.id, this.props.competition_id, this.props.environment)}}
                        style={{"marginRight": "10px"}}
                    />
                    <FlatButton
                        label="GOT CONTACT DETAILS"
                        disabled={!canBeApproved}
                        onClick={() => {this.toggleDetailsForm()}}
                        style={{"marginRight": "10px"}}
                    />
                    <FlatButton
                        label="COLLECTED PRIZE"
                        disabled={!canBeCollectedPrize}
                        onClick={() => {this.props.onWinnerCollectedPrize(this.props.tile.id, this.props.competition_id, this.props.environment)}}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <br/>
                    <b>Not processing more winners right now.</b>
                </div>
            )
        }
    };

    toggleDetailsForm() {this.setState({ showDetailsField: !this.state.showDetailsField})}

    render() {
        const { tile } = this.props;
        const mix = tile.mix;
        let collectedAt = tile.collected_at || 'User has not yet collected prize!';
        let statusMessage = '';

        if (tile.status === 'created') { statusMessage = "Winner has been entered.";}
        if (tile.status === 'selected') { statusMessage = "Winner has been selected and should be notified imminently. (You shouldn't see this message)";}
        if (tile.status === 'notified') { statusMessage = "Winner has been notified. Waiting for them to make contact.";}
        if (tile.status === 'approved') { statusMessage = "Contact details received. Winner may collect their prize.";}
        if (tile.status === 'prize collected') { statusMessage = "Winner collected their prize!";}
        if (tile.status === 'expired') { statusMessage = "Selected Winner has expired! You may pick another Winner.";}

        return (
            <GridTile key={tile.id}>

                <b>{statusMessage}</b><br/>
                <br/>
                <b>Winner Name:</b> {mix.author.name}<br/>
                <b>Collected on:</b> {collectedAt}<br/>
                <b>Contact Details:</b> {tile.contact_details}<br/>

                <Card>
                    <CardHeader
                        title="See Winner Details"
                        subtitle={mix.author.name}
                        actAsExpander={true}
                        showExpandableButton={true}
                        avatar={ mix.author.avatar } />
                    <CardText expandable={true}>
                        <div className="container">
                            <Checkbox
                                label="Render Video"
                                onCheck={(event, isChecked) => {
                                    isChecked ? this.renderVideo(mix) : this.unrenderVideo(mix)
                                }}
                            />

                            {this.state.tilesToRenderVideoIds.includes(mix.id) ?
                                <Video
                                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                    poster={mix.preview_image}
                                    className="col-md-6 tile-embedded-video">
                                    <source src={mix.link} type="video/mp4"/>
                                </Video> :
                                <img src={mix.preview_image} className="col-md-6 tile-embedded-video"/>
                            }

                            <div className="col-md-6">
                                <b>Mix ID: {mix.id}</b><br/>
                                <div>
                                    Created on: {mix.created_at}<br/>
                                    Status: {mix.status}<br/>
                                    Likes: {mix.likes_count}<br/>
                                    Comments: {mix.comments_count}<br/>
                                    User Email: {mix.author.email}<br/>
                                    User Gender: {mix.author.gender}<br/>
                                    User Type: {mix.author.user_type}<br/>
                                    User Birthday: {mix.author.birthday}<br/>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </CardText>
                </Card>
                {this.processingButtons()}
                {this.detailsForm()}
                <br/>
                <hr/>
            </GridTile>
        )
    }
}

const mapStateToProps = (state) => {
    let winnerTilesContainNotified = false;
    let winnerTilesContainApproved = false;
    let winnerTilesContainSelected = false;
    let winnerTilesContainPrizeCollected = false;

    return {state, winnerTilesContainNotified, winnerTilesContainApproved, winnerTilesContainSelected, winnerTilesContainPrizeCollected }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onWinnerSelected: (winner_id, competition_id, environment) => dispatch(winnerSelected(winner_id, competition_id, environment)),
        onWinnerApproved: (winner_id, competition_id, winnerDetails, environment) => dispatch(winnerApproved(winner_id, competition_id, winnerDetails, environment)),
        onWinnerCollectedPrize: (winner_id, competition_id, environment) => dispatch(winnerCollectedPrize(winner_id, competition_id, environment)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompetitionWinnerTile);


