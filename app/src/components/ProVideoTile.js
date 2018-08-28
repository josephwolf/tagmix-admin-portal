import React from 'react'
import {connect} from 'react-redux'
import {Checkbox, FlatButton, GridTile} from "material-ui";
import {deleteProVideo} from "../actions/proVideoActions";
import {DefaultPlayer as Video} from "react-html5video";
import 'react-html5video/dist/styles.css';

class ProVideoTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tilesToRenderVideoIds: []
        };
    }

    confirmDelete = (tile) => {
        if (window.confirm("Are you sure you want to delete this pro video?")) {
            this.removeVideoFromProVideos(tile);
        }
    };

    removeVideoFromProVideos = (tile) => {
        this.props.onDeleteProVideo(this.props.environment, tile.id);
    };

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

    render() {
        const tile = this.props.tile;

        return (
            <GridTile key={tile.id}>

                {this.state.tilesToRenderVideoIds.includes(tile.id) ?
                    <Video
                        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                        poster={tile.poster}
                        className="col-md-6 tile-embedded-video">
                        <source src={tile.path_to} type="video/mp4"/>
                    </Video> :
                    <img src={tile.poster} className="col-md-6 tile-embedded-video"/>
                }
                <Checkbox
                    label="Render Video"
                    onCheck={(event, isChecked) => {
                        isChecked ? this.renderVideo(tile) : this.unrenderVideo(tile)
                    }}
                />
                <h4><b>Id: {tile.id}</b></h4>
                <div className="row">
                    <div className="col-md-8">
                        <b>Path: </b> {tile.path_to} <br />
                        <b>Duration: </b> {tile.duration} <br />
                        <b>Added on: </b> {tile.updated_at}<br/>
                    </div>
                    <div className="col-md-4">
                        <FlatButton
                            label="DOWNLOAD PROVIDEO"
                            onClick={() => {null}}
                            href={tile.path_to}
                            download={"provideo_download"}
                            backgroundColor="#4286f4"
                            fullWidth={true}
                        />
                        <FlatButton
                            label="Delete Pro Video"
                            onClick={ () => this.confirmDelete(tile) }
                            backgroundColor="#E57373"
                            fullWidth={true}
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
        onDeleteProVideo: (environment, proVideoId) => dispatch(deleteProVideo(environment, proVideoId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProVideoTile);


