import React from 'react'
import {connect} from "react-redux";
import {Card, CardHeader, CardText, DropDownMenu, FlatButton, MenuItem, TextField} from "material-ui";
import {deleteProVideoTag, loadProVideoTags, saveProVideoTag} from "../actions/proVideoActions";

class ProVideoTagDeleteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { tagId: 0 };
        this.changeProVideoTag = this.changeProVideoTag.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeProVideoTag(event, index, tagId){
        this.setState({tagId})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.confirmDelete();
    }

    confirmDelete = () => {
        if (window.confirm("Are you sure you want to delete this tag?")) {
            this.props.onDeleteProVideoTag(this.props.environment, this.state.tagId);
            this.props.onLoadProVideoTags(this.props.environment);
        }
    };

    render() {
        const {
            proVideoTags,
        } = this.props;

        return (
            <div>
                <br/>
                <Card>
                    <CardHeader
                        title="Delete Tag"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true} style={{flex: 1, flexDirection: 'row'}}>
                        <form onSubmit={this.handleSubmit}>
                            <DropDownMenu value={this.state.tagId} onChange={this.changeProVideoTag} >
                                {proVideoTags}
                            </DropDownMenu>
                            <br/>
                            <FlatButton
                                label="DELETE TAG"
                                backgroundColor="#E57373"
                                type="submit" value="Submit"
                            />
                        </form>
                    </CardText>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let proVideoTagsList = state.proVideos.proVideoTags;
    let proVideoTags = [<MenuItem value={0} key={0} primaryText={'Please select a Tag'}/>];

    for (let i = 0; i < proVideoTagsList.length; i++) {
        proVideoTags.push(<MenuItem value={proVideoTagsList[i].id} key={i + 1} primaryText={proVideoTagsList[i].source_name}/>);
    }

    return { state, proVideoTags }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteProVideoTag: (environment, tagId) => dispatch(deleteProVideoTag(environment, tagId)),
        onLoadProVideoTags: (environment) => dispatch(loadProVideoTags(environment))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProVideoTagDeleteForm);
