import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchStream, deleteStream} from "../../actions";
import Modal from "../Modal";
import plainRouterHistory from "../../history";

class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = () => (
        <>
            <button className="ui button negative"
                    onClick={() => this.props.deleteStream(this.props.match.params.id)}>
                Delete&emsp;
                <i className="trash alternate outline icon"/>
            </button>
            <Link to="/" className="ui button">Cancel</Link>
        </>
    )

    renderContent = () => !this.props.stream ? 'Are you sure you want to delete this stream?' :
        `Are you sure you want to delete the stream with title: ${this.props.stream.title} ?`


    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => plainRouterHistory.push('/')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({stream: state.stream[ownProps.match.params.id]})

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete)