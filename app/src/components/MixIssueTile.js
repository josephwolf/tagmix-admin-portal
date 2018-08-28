import React from 'react'
import {connect} from 'react-redux'
import {Checkbox, FlatButton, GridTile} from "material-ui";
import {blockUser, deleteMix} from "../actions/adminActions";
import {DefaultPlayer as Video} from "react-html5video";

class MixIssueTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tilesToRenderVideoIds: []
        };
    }

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

    blockAlert = (displayAlert, isBlocked) => {
        if (displayAlert) {
            if (isBlocked) {
                return (<div>User has been suspended!</div>)
            }
            else {
                return ( <div>User has been unsuspended!</div>)
            }
        }
    };

    confirmDelete = (mixId, environment) => {
        if (window.confirm("Are you sure you want to delete this mix?")) {
            this.props.onDeleteMix(mixId, environment);
        }
    };

    render() {
        const tile = this.props.tile;
        const environment = this.props.environment;

        return (
            <GridTile key={tile.id}>
                <div className="user-issue-tile-wrapper">
                    <div className="row user-issue-tile-reported">
                        <h4>Reported User:</h4>
                        <div className="col-md-4">
                            <Checkbox
                                label="Render Video"
                                onCheck={(event, isChecked) => {
                                    isChecked ? this.renderVideo(tile) : this.unrenderVideo(tile)
                                }}
                            />
                            {this.state.tilesToRenderVideoIds.includes(tile.id) ?

                                <Video
                                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                    poster={tile.mix.preview_image}>
                                    <source src={tile.mix.link} type="video/mp4"/>
                                </Video> :
                                <img src={tile.mix.preview_image} className="col-md-6 tile-embedded-video"/>
                            }
                        </div>
                        <div className="col-md-8">
                            <b>Id:</b> {tile.mix.id}<br />
                            <b>Status:</b> {tile.mix.status}<br />
                            <b>Created at:</b> {tile.mix.created_at}<br />
                            <b>Likes:</b> {tile.mix.likes_count}<br />
                            <b>Comments:</b> {tile.mix.comments_count}<br />
                            <br/><h4>Author info:</h4>
                            <b>Name:</b> {tile.mix.author.name}<br />
                            <b>Id:</b> {tile.mix.author.id}<br />
                            <b>Email:</b> {tile.mix.author.email}<br />
                            <b>Gender:</b> {tile.mix.author.gender}<br />
                            <b>DOB:</b> {tile.mix.author.birthday}<br />
                            <b>Type:</b> {tile.mix.author.user_type}<br />
                            <br/>
                        </div>
                        <div className="col-md-4">
                            <FlatButton
                                label="Issue Warning"
                                disabled={true}
                                onClick={null}
                            />
                            <FlatButton
                                label="Suspend User"
                                onClick={() => {this.props.onSuspendUser(tile.mix.author.id, environment)}}
                                backgroundColor="#E57373"
                            />
                            <FlatButton
                                label="Delete Mix"
                                onClick={() => {this.confirmDelete(tile.mix.id, environment)}}
                                backgroundColor="#E57373"
                            />
                            <FlatButton
                                label="Dismiss Issue"
                                disabled={true}
                                onClick={null}
                            />
                        </div>
                        <div className="col-md-8">
                            <b>Reason: {tile.issue}</b><br />
                            <b>Issue ID:</b> {tile.id}<br />
                            <b>Issue Date:</b> {tile.created_at.date}<br />
                        </div>
                    </div>
                    <div className="row user-issue-tile-reporter">
                        <h4>Reported by:</h4>
                        <div className="col-md-8">
                            <b>Name:</b> {tile.reporter.name}<br />
                            <b>Id:</b> {tile.reporter.id}<br />
                            <b>Email:</b> {tile.reporter.email}<br />
                            <b>Gender:</b> {tile.reporter.gender}<br />
                            <b>DOB:</b> {tile.reporter.birthday}<br />
                            <b>Type:</b> {tile.reporter.user_type}<br />
                        </div>
                        <div className="col-md-4">
                            <img src={tile.reporter.avatar} className="col-md-12"/>
                        </div>
                    </div>
                </div>
                <br />
            </GridTile>
        )
    }
}

const mapStateToProps = (state) => { state };

const mapDispatchToProps = (dispatch) => {
    return {
        onSuspendUser: (userId, environment) => dispatch(blockUser(userId, environment)),
        onDeleteMix: (mixId, environment) => dispatch(deleteMix(mixId, environment))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MixIssueTile);


