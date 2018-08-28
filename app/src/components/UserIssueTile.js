import React from 'react'
import {connect} from 'react-redux'
import {FlatButton, GridTile} from "material-ui";
import {blockUser} from "../actions/adminActions";

class UserIssueTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const tile = this.props.tile;

        return (
            <GridTile key={tile.id}>
                <div className="user-issue-tile-wrapper">
                    <div className="row user-issue-tile-reported">
                        <h4>Reported User:</h4>
                        <div className="col-md-4">
                            <img src={tile.reported.avatar} className="col-md-12"/>
                        </div>
                        <div className="col-md-8">
                            <b>Name:</b> {tile.reported.name}<br />
                            <b>Id:</b> {tile.reported.id}<br />
                            <b>Email:</b> {tile.reported.email}<br />
                            <b>Gender:</b> {tile.reported.gender}<br />
                            <b>DOB:</b> {tile.reported.birthday}<br />
                            <b>Type:</b> {tile.reported.user_type}<br />
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
                                onClick={() => {this.props.onSuspendUser(tile.reported.id, 'dev')}}
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

const mapStateToProps = (state) => { return state };

const mapDispatchToProps = (dispatch) => {
    return {
        onSuspendUser: (userId, environment) => dispatch(blockUser(userId, environment))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserIssueTile);


