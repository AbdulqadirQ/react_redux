import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    // `Field` tag below passes in some arguments in renderInput to allow forms to work
    renderInput = ({ input, label, meta }) => {
        console.log(meta);
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;
        // Adds all values within 'formProps.input' and add them to <input> tag
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };

    render() {
        return (
            // Field allows normal html forms to be wired-up to redux-form

            // props from 'reduxForm' (below) has a 'handleSubmit' function already which just passes
            // the values submitted to our custom 'onSubmit'. This saves us making an onSubmit eventHandler
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

// validate is called when user interacts with it in any way
// formValues.title and formValaues.description match the 'Field' names 'title' and 'description above. This is how
// redux-form knows to pass in errors object to correct component
const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "You must enter a title";
    }

    if (!formValues.description) {
        errors.description = "You must enter a description";
    }

    return errors;
};

// reduxForm takes the place of 'connect' and 'mapStateToProps' to handle Redux things, and passes props to above class
const formWrapped = reduxForm({
    form: "streamCreate",
    validate: validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
