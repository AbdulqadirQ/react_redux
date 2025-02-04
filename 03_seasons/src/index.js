import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
    state = { lat: null, errorMessage: "" };

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

    renderContent() {
        if (this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        } else {
            return <Loader />;
        }
    }

    render() {
        return <div className="border red">{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
