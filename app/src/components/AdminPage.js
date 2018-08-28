import React from 'react'
import {connect} from 'react-redux'
import UserIssueTile from "./UserIssueTile";
import {DropDownMenu, FlatButton, MenuItem} from "material-ui";
import {loadMixFlags, loadUserFlags} from "../actions/adminActions";
import MixIssueTile from "./MixIssueTile";

class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        let environmentCookie = 'dev';

        this.state = {
            env: environmentCookie
        };
    }

    changeEnvironment = (event, index, env) => {
        this.setState({env});
        this.props.onLoadUserFlags(env);
        this.props.onLoadMixFlags(env);
    };

    issuesFeed = () => {
        const {subpage, feed} = this.props;

        if (subpage == 'userIssues') {
            return (
                <div className="center-block">
                    {feed.map((issue) => (
                        <UserIssueTile tile={issue} environment={this.state.env} key={issue.id} />
                    ))}
                </div>
            )
        }
        if (subpage == 'mixIssues') {
            return (
                <div className="center-block">
                    {feed.map((issue) => (
                        <MixIssueTile tile={issue} key={issue.id} />
                    ))}
                </div>
            )
        } else {
            <center><h2>There was an error.</h2></center>
        }
    };

    render() {
        return (
            <div>
                {/*<center><h4>This is still a work in progress. Have to test it from the site. Use with caution!<br />- Joey</h4></center>*/}
                <div className="row">
                    <FlatButton
                        className="col-md-3"
                        label="Flagged Users"
                        onClick={() => this.props.onChangeSubpage('userIssues')}
                    />
                    <FlatButton
                        className="col-md-3"
                        label="Flagged Posts"
                        // disabled={true}
                        onClick={() => this.props.onChangeSubpage('mixIssues')}
                    />
                    <div className="col-md-6 dropdown-wrapper">
                        <span className="subNavLabel noPadding">Environment:</span>
                        <DropDownMenu value={this.state.env} onChange={this.changeEnvironment} className="dropdownMenu">
                            <MenuItem value={'dev'} primaryText={'Development'}/>
                            <MenuItem value={'staging'} primaryText={'Staging'}/>
                            <MenuItem value={'live'} primaryText={'Live'}/>
                        </DropDownMenu>
                    </div>
                </div>
                <hr/>
                { this.issuesFeed() }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let subpage = state.issues.subpage;
    let feed = [];


    if (subpage == 'userIssues') { if (state.issues.userIssues) feed = state.issues.userIssues.data.filter(function(n){ return n != null }) }
    if (subpage == 'mixIssues') { if (state.issues.mixIssues) feed = state.issues.mixIssues.data.filter(function(n){ return n != null }) }

    return {
        subpage,
        feed
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadUserFlags: (environment) => dispatch(loadUserFlags(1, environment)),
        onLoadMixFlags: (environment) => dispatch(loadMixFlags(1, environment)),
        onChangeSubpage: (subpage) => dispatch({type: 'CHANGE_SUBPAGE', subpage})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminPage);


