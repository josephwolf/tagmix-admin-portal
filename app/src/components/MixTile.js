import React from 'react'
import {connect} from 'react-redux'
import {Card, CardHeader, CardText, Checkbox, FlatButton, GridTile} from "material-ui";
import {FacebookShareButton, TwitterShareButton} from "react-share/lib/share-buttons";
import {generateShareIcon, ShareButtons} from "react-share";
import {deleteFavorite, saveFavourite} from "../actions/favoritesActions";
import {DefaultPlayer as Video} from "react-html5video";
import 'react-html5video/dist/styles.css';
import {deletePost} from "../actions/postActions";

class MixTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tilesToRenderVideoIds: []
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

    addTileToFavorites = (tile) => {
        this.props.onSaveFavorite(tile);
    };

    removeTileFromFavorites = (tile) => {
        this.props.onDeleteFavorite(tile.id);
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
        const environment = this.props.environment;
        const tagId = this.props.tagId;
        const page = this.props.page;

        const {
            FacebookShareButton,
            TwitterShareButton
        } = ShareButtons;

        const FacebookIcon = generateShareIcon('facebook');
        const TwitterIcon = generateShareIcon('twitter');

        return (
            <GridTile key={tile.id}>

                <div className="col-md-6 col-sm-6" style={{"overflow": "hidden"}}>
                    {this.state.tilesToRenderVideoIds.includes(tile.id) ?
                        <Video
                            controls={['PlayPause', 'Seek', 'Time', 'Volume']}
                            poster={tile.preview_image}
                            className="tile-embedded-video">
                            <source src={tile.link} type="video/mp4"/>
                        </Video> :
                        <img src={tile.preview_image} className="col-md-6 col-sm-6 tile-embedded-video"/>
                    }
                    <Checkbox
                        label="Render Video"
                        onCheck={(event, isChecked) => {
                            isChecked ? this.renderVideo(tile) : this.unrenderVideo(tile)
                        }}
                    />
                    <Checkbox
                        label="Favorite Video"
                        checked={tile.isFavorite}
                        onCheck={(event, isChecked) => {
                            isChecked ? this.addTileToFavorites(tile) : this.removeTileFromFavorites(tile)
                        }}
                    />
                </div>

                <div className="col-md-6 col-sm-6">
                    <b>Mix ID: {tile.id}</b><br/>
                    <div>
                        Created on: {tile.created_at}<br/>
                        Status: {tile.status}<br/>
                        Likes: {tile.likes_count}<br/>
                        Comments: {tile.comments_count}<br/>
                    </div>
                    <br/>
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
                    <Card>
                        <CardHeader
                            title="Share"
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText expandable={true} style={{flex: 1, flexDirection: 'row'}}>
                                <FacebookShareButton url={ "https://share.tagmix.me/fb?videoUrl=" + decodeURI(tile.link) + "&videoPreviewUrl=" + decodeURI(tile.preview_image)}>
                                    <FacebookIcon size={32} round={true}/>
                                </FacebookShareButton> Facebook
                                <TwitterShareButton url={ "https://share.tagmix.me/tw?videoUrl=" + decodeURI(tile.link) + "&videoPreviewUrl=" + decodeURI(tile.preview_image)}>
                                    <TwitterIcon size={32} round={true}/>
                                </TwitterShareButton> Twitter
                            <br/>
                        </CardText>
                    </Card>
                    <br/>
                    <FlatButton
                        label="DOWNLOAD MIX"
                        onClick={() => {null}}
                        href={tile.link}
                        style={{"marginBottom": "10px"}}
                        download={"mix_download"}
                        backgroundColor="#4286f4"
                        fullWidth={true}
                    />
                    <br/>
                    <FlatButton
                        label="DELETE MIX"
                        onClick={() => {this.confirmDelete(environment, tile.id, tagId, page)}}
                        backgroundColor="#E57373"
                        fullWidth={true}
                    />
                </div>
            </GridTile>
        )
    }
}

const mapStateToProps = (state) => { return state };

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveFavorite: (tile) => dispatch(saveFavourite(tile)),
        onDeleteFavorite: (tileId) => dispatch(deleteFavorite(tileId)),
        onDeletePost: (environment, tileId, tagId, page) => dispatch(deletePost(environment, tileId, tagId, page))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MixTile);


