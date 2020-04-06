import React from "react";

class GoogleAuth extends React.Component {
    componentDidMount() {
        // loads google auth2 libraries
        // use of a callback function to input clientId
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "1015240795940-b5iu95u2o17bqpu86g7min89pfribv7d.apps.googleusercontent.com",
                scope: "email"
            });
        });
    }
    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;
