import React from 'react'
import {connect} from "react-redux";
import {Card, CardHeader, CardText, FlatButton, TextField} from "material-ui";
import {saveProVideoTag} from "../actions/proVideoActions";

class ProVideoTagForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { tagName: '' };
        this.changeTagName = this.changeTagName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeTagName(event){ this.setState({tagName: event.target.value}) }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSaveProVideoTag(this.props.environment, this.state.tagName);
    }


    render() {
        return (
            <div>
                <br/>
                <Card>
                    <CardHeader
                        title="Create New Tag"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true} style={{flex: 1, flexDirection: 'row'}}>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                hintText="Tag Name"
                                type="text" value={this.state.tagName} onChange={this.changeTagName}
                            />
                            <br/>
                            <FlatButton
                                label="Submit"
                                backgroundColor="#4286f4"
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
    return { state }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveProVideoTag: (environment, tagName) => dispatch(saveProVideoTag(environment, tagName))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProVideoTagForm);
