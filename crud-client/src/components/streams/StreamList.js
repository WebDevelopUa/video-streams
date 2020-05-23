import React, {Component} from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";
import {fetchStreams} from "../../actions";


class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdmin(stream) {
        const validOwner = (stream.userId === this.props.currentUserId) && (stream.userId !== null);
        return (validOwner) ?
            (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button basic">
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button basic">
                        Delete
                    </Link>
                </div>
            ) : null
    }

    renderCreateStream() {
        const signedOwner = this.props.isSignedIn;
        return (signedOwner) ?
            (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button positive">
                        Create Stream &emsp;
                        <i className="ui plus circle icon"/>
                    </Link>
                </div>
            ) : null
    }

    renderListLoading = () => this.props.stream.length ? this.props.stream.map(stream =>
        <div className="item" key={stream.id}>
            {this.renderAdmin(stream)}
            <i className="large middle aligned play circle icon blue big"/>
            <div className="content">
                <Link to={`/streams/${stream.id}`} className="ui violet header">
                    {stream.title}
                </Link>
                <div className="description">
                    {stream.description}
                </div>
            </div>
        </div>
    ) : <div className="ui segment">
        <div className="ui active inverted dimmer">
            <div className="ui large text loader">Loading</div>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
    </div>

    render() {
        return (
            <div className="ui segment">
                <h3 className="ui disabled header">List of Streams</h3>
                <div className="ui celled list">
                    {this.renderListLoading()}
                </div>
                {this.renderCreateStream()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stream: Object.values(state.stream),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
})
export default connect(mapStateToProps, {fetchStreams})(StreamList)