import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
    // `Field` tag below passes in some arguments in renderInput to allow forms to work
    renderInput({ input }) {
        // Adds all values within 'formProps.input' and add them to <input> tag
        return <input {...input} />;
    }

    render() {
        return (
            // Field allows normal html forms to be wired-up to redux-form
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        );
    }
}

// reduxForm takes the place of 'connect' and 'mapStateToProps' to handle Redux things, and passes props to above class
export default reduxForm({
    form: "streamCreate",
})(StreamCreate);
