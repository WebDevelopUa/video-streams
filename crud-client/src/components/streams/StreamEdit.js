import React, {Component} from "react";
import _ from "lodash";
import {connect} from "react-redux";
import {fetchStream, editStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    renderList = () =>
        !this.props.stream ? <div className="ui segment">
                <div className="ui active inverted dimmer">
                    <div className="ui large text loader">Loading</div>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div> :
            <div className="ui segment">
                <h3 className="ui disabled header">Edit a Stream</h3>
                <StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description', 'userId')}
                    onSubmit={this.onSubmit}
                />
            </div>

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({stream: state.stream[ownProps.match.params.id]})

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit)