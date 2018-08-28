import React from 'react'
import {connect} from "react-redux";
import {Card, CardHeader, CardText, DropDownMenu, FlatButton, GridList, MenuItem, TextField} from "material-ui";
import {submitProVideo} from "../actions/proVideoActions";

class ProVideoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            proVideoTagSelected: 0
        };

        this.changeProVideoTagSelected = this.changeProVideoTagSelected.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeProVideoTagSelected(event, index, value){ this.setState({proVideoTagSelected:  value}) }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmitProVideo(
            this.props.environment,
            this.videoFileInput.files[0],
            parseInt(this.state.proVideoTagSelected),
        )
    }

    formIsUploading(isTrue) {
        if (isTrue) {
            return (
                <div>
                    <h4>Uploading...</h4>
                </div>
            )
        }
    };

    render() {
        const  {proVideoTags, proVideoUploading, environment} = this.props;

        return (
            <div>
                <br/>
                <Card>
                    <CardHeader
                        title="Upload New Pro Video"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true} style={{flex: 1, flexDirection: 'row'}}>
                        <form onSubmit={this.handleSubmit}>
                            Video:
                            <input
                                type={"file"}
                                ref={ input => { this.videoFileInput = input }}
                            />
                            <br/>
                            Select Tag:
                            <DropDownMenu name={"tagId"} value={this.state.proVideoTagSelected} onChange={this.changeProVideoTagSelected} >
                                {proVideoTags}
                            </DropDownMenu>
                            <br/>
                            <br/>
                            <FlatButton
                                label="Submit"
                                backgroundColor="#4286f4"
                                disabled={proVideoUploading}
                                type="submit" value="Submit"
                            />
                            { this.formIsUploading(this.props.videoUploading) }
                        </form>
                    </CardText>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let proVideoTagsList = state.proVideos.proVideoTags;
    let videoUploading = state.proVideos.proVideoUploading;
    let proVideoTags = [];

    for (let i = 0; i < proVideoTagsList.length; i++) {
        proVideoTags.push(<MenuItem value={proVideoTagsList[i].id} key={i} primaryText={proVideoTagsList[i].source_name}/>);
    }

    // console.log("finished tag list:", proVideoTags)
    return { proVideoTags, videoUploading }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitProVideo: (environment, videoFile, tagId) => dispatch(submitProVideo(environment, videoFile, tagId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProVideoForm);
