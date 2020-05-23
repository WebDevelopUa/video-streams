import React, {Component} from "react";

import {connect} from "react-redux";
import {fetchStream} from "../../actions";

import flv from "flv.js";

class StreamShow extends Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchStream(id);
        this.buildPlayer()
    }

    componentWillUnmount() {
        this.player.destroy()
    }

    componentDidUpdate() {
        this.buildPlayer()
    }

    buildPlayer() {
        if (this.player || !this.props.stream) {
            return
        }

        const {id} = this.props.match.params;
        const development = `http://localhost:8000/live/${id}.flv`;

        this.player = flv.createPlayer({
            type: 'flv',
            url: development
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if (!this.props.stream) {
            return <div>loading ...</div>
        }

        const {title, description} = this.props.stream

        return (
            <div className="ui raised segments">
                <div className="ui segment">
                    <video ref={this.videoRef}
                           style={{width: '100%'}}
                           controls={true}
                    />
                </div>
                <div className="ui secondary segment">
                    <h3 className="ui grey header">{title}</h3>
                    <h4 className="ui grey header">{description}</h4>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({stream: state.stream[ownProps.match.params.id]})
export default connect(mapStateToProps, {fetchStream})(StreamShow)