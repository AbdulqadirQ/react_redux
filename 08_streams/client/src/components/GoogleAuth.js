import React from "react";

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        // loads google auth2 libraries
        // use of a callback function to input clientId
        window.gapi.load("client:auth2", () => {
            // 'init()' returns a promise when a library has successfully initialised
            window.gapi.client
                .init({
                    clientId: "1015240795940-b5iu95u2o17bqpu86g7min89pfribv7d.apps.googleusercontent.com",
                    scope: "email"
                })
                .then(() => {
                    // binds 'auth' so this.auth now returns an AuthInstance whenever called within the current class
                    this.auth = window.gapi.auth2.getAuthInstance();
                    // sets some component-level state
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                    // listen() is a in-built actionListener which can be used to call a function on a change
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    // Arrow function so it's bound to the class
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I don't know if we're signed in</div>;
        } else if (this.state.isSignedIn) {
            return <div>I am signed in!</div>;
        } else {
            return <div>I am not signed in</div>;
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;
