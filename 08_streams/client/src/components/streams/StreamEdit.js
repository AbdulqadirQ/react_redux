import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
    componentDidMount() {
        // use of lifecycle method to data load the particular stream we're trying to edit
        // this is in case the user navigates to this screen without first navgiating to "/" where we do all our data loading
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                {/* initialValues is a specially-named prop to pass in values to the same Field names in StreamForm
                    this.props.stream contains the object {title: <title>, description: <description>} */}
                {/* _.pick only passes the specified properties from this.props.form so we're not passing more
                    data than we need / should */}
                <StreamForm
                    initialValues={_.pick(this.props.stream, "title", "description")}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

// The ID of the stream to edit is passed as a prop to StreamEdit. To get this using Redux, 'ownProps' holds
// all props that would appear in StreamEdit
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
