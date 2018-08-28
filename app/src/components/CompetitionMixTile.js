import React from 'react'
import {connect} from 'react-redux'
import {Card, CardHeader, CardText, Checkbox, FlatButton, GridTile} from "material-ui";
import {DefaultPlayer as Video} from "react-html5video";
import 'react-html5video/dist/styles.css';
import {deletePost} from "../actions/postActions";
import {chooseWinner} from "../actions/competitionActions";
import Confetti from "react-dom-confetti";

class CompetitionMixTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tilesToRenderVideoIds: [],
            isAWinner: false
        };
    }

    confirmDelete = (environment, tileId, tagId, page) => {
        if (window.confirm("Are you sure you want to delete this mix?")) {
            this.deletePostFromFeed(environment, tileId, tagId, page);
        }
    };

    deletePostFromFeed = (environment, tileId, tagId, page) => {
        this.props.onDeletePost(environment, tileId, tagId, page)
    };

    selectWinner = (competitionId, mixId,  environment) => {
        this.props.onSelectWinner(competitionId, mixId, this.props.environment);
        this.setState({isAWinner: true});
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
        const competitionId = this.props.competitionId;
        const tagId = this.props.tagId;
        const page = this.props.page;

        const confettiConfig = {
            angle: 90,
            spread: 45,
            startVelocity: 45,
            elementCount: 50,
            decay: 0.9
        };

        return (
            <GridTile key={tile.id}>

                <div className="container">
                    <Checkbox
                        label="Render Video"
                        onCheck={(event, isChecked) => {
                            isChecked ? this.renderVideo(tile) : this.unrenderVideo(tile)
                        }}
                    />

                    {this.state.tilesToRenderVideoIds.includes(tile.id) ?
                        <Video
                            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                            poster={tile.preview_image}
                            className="col-md-6 tile-embedded-video">
                            <source src={tile.link} type="video/mp4"/>
                        </Video> :
                        <img src={tile.preview_image} className="col-md-6 tile-embedded-video"/>
                    }

                    <div className="col-md-6">
                        <b>Mix ID: {tile.id}</b><br/>
                        <div>
                            Created on: {tile.created_at}<br/>
                            Status: {tile.status}<br/>
                            Likes: {tile.likes_count}<br/>
                            Comments: {tile.comments_count}<br/>
                        </div>
                        <br/>
                    </div>
                </div>
                <Card>
                    <CardHeader
                        title={tile.author.name}
                        subtitle="User details"
                        actAsExpander={true}
                        showExpandableButton={true}
                        avatar={ tile.author.avatar} />
                    <CardText expandable={true}>
                        ID: {tile.author.id}<br/>
                        Name: {tile.author.name}<br/>
                        Email: {tile.author.email}<br/>
                        Gender: {tile.author.gender}<br/>
                        User Type: {tile.author.user_type}<br/>
                        Birthday: {tile.author.birthday}<br/>
                    </CardText>
                </Card>
                <br/>
                <FlatButton
                    label="SELECT WINNER"
                    onClick={() => {this.selectWinner(competitionId, tile.id,  this.props.environment)}}
                    backgroundColor="#4286f4"
                    style={{"marginBottom": "10px"}}
                />
                <center><Confetti active={ this.state.isAWinner } config={ confettiConfig }/></center>
                <FlatButton
                    label="DELETE MIX"
                    onClick={() => {this.confirmDelete(this.props.environment, tile.id, tagId, page)}}
                    backgroundColor="#E57373"
                />
                <br/>
                <hr/>
            </GridTile>
        )
    }
}

const mapStateToProps = (state) => { return state };

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectWinner: (competitionId, mixId,  environment) => dispatch(chooseWinner(competitionId, mixId,  environment)),
        onDeletePost: (environment, tileId, tagId, page) => dispatch(deletePost(environment, tileId, tagId, page))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompetitionMixTile);


