import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    state = { lat: null, lon: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position =>
                this.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        if (this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat && this.state.lon) {
            return (
                <div>
                    Latitude: {this.state.lat}
                    <br />
                    Longitude: {this.state.lon}
                </div>
            );
        } else {
            return <div>Loading ...</div>;
        }
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
