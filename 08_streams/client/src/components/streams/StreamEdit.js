import React from "react";
import { connect } from "react-redux";

const StreamEdit = (props) => {
    console.log(props);
    return <div>StreamEdit</div>;
};

// The ID of the stream to edit is passed as a prop to StreamEdit. To get this using Redux, 'ownProps' holds
// all props that would appear in StreamEdit
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps)(StreamEdit);
