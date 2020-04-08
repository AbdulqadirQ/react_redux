import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
    componentDidMount() {
        // use of lifecycle method to data load the particular stream we're trying to edit
        // this is in case the user navigates to this screen without first navgiating to "/" where we do all our data loading
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }
        return <div>{this.props.stream.title}</div>;
    }
}

// The ID of the stream to edit is passed as a prop to StreamEdit. To get this using Redux, 'ownProps' holds
// all props that would appear in StreamEdit
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
