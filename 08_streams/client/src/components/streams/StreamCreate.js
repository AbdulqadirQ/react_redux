import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
    // `Field` tag below passes in some arguments in renderInput to allow forms to work
    renderInput({ input, label }) {
        // Adds all values within 'formProps.input' and add them to <input> tag
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return (
            // Field allows normal html forms to be wired-up to redux-form

            // props from 'reduxForm' (below) has a 'handleSubmit' function already which just passes
            // the values submitted to our custom 'onSubmit'. This saves us making an onSubmit eventHandler
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

// reduxForm takes the place of 'connect' and 'mapStateToProps' to handle Redux things, and passes props to above class
export default reduxForm({
    form: "streamCreate",
})(StreamCreate);
