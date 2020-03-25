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

# Component Lifecycle Methods:

-   Sequence:
    constructor -> render -> componentDidMount -> componentDidUpdate -> componentWillUnmount

-   constructor: called during component initialisation
    -> used for one-time setup stuff
    -> by convention, do any data-loading within componentDidMount and not here for centralised data-loading
-   render: called whenver state is updated (i.e. through `setState`)
    -> avoid doing anything besides returning JSX
-   componentDidMount: called immediately after content is visible on screen
    -> good place to do data loading
-   componentDidUpdate: waits to be called **after** and update (i.e. **after** render as been called)
    -> good place to do more data-loading when state/props change
-   componentWillUnmount: called when component is no longer shown
    -> good place to do cleanup (especially for non-React stuff)

# Event Handlers:

-   The following two provide the exact same functionality:

## SYNTAX 1:

```js
import React from "react";

class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
```

## SYNTAX 2:

```js
import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={event => console.log(event.target.value)} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
```
