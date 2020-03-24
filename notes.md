# A typical callback function (get geolocation):

```js
const App = () => {
    // The function `getCurrentPosition`: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
    // a successfull call stores the geolocation within `position`. error stores within `err`
    // NOTE: we're actually PASSING a callback function into `getCurrentPosition`. `getCurrentPosition` doesn't store
    // the result on its own
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err)
    );

    return <div>Hi There!</div>;
};
```

# Classes and State

-   State can only be used with class components (mostly)
-   State is NOT the same as props
-   The key to re-render a component; we must update its state
-   State must be initialised when a component is created
-   State can **only** be updated using the function `setState`, e.g:
    `this.setState({ lat: position.coords.latitute })`

    -   The ONLY time `state` can be directly references is during initialisation:
        `this.state = { lat: null }`

```js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, lon: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            },
            err => console.log(err)
        );
    }

    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <br></br>
                Longitude: {this.state.lon}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```
