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

## Controlled vs Uncontrolled Elements

-   A react app can be split into 'React' side and 'HTML' side
-   A user interacts with the HTML side, and react attempts to re-render etc.

-   controlled element: ensuring 'React' side knows about the data within HTML side, i.e. ensuring user-input is stored within **state**
-   uncontrolled element: data only exists within HTML DOM

## A Controlled element for user input, controlling user data through state:

```js
import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            // NOTE: we're setting 'input' element to the value it already is. Seems confusing but is just
                            // React convention
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
```

# Binding and 'this' keyword:

-   when using `this`, e.g. `this.state.myInput`, if this is not correctly binded to the class object, it would lead to 'TypeError: Cannot read property 'state' of undefined', since `this` may refer to `undefined`
-   There are a few methods to ensure we explicitly bind the element

## METHOD 1

```js
import React from "react";

class SearchBar extends React.Component {
    state = { term: "input something..." };

    // DOES THE BINDING
    constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault(); // Disables form's default auto-submit when enter is pressed
        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
```

## METHOD 2

```js
import React from "react";

class SearchBar extends React.Component {
    state = { term: "input something..." };

    // DOES THE BINDING
    onFormSubmit = event => {
        event.preventDefault(); // Disables form's default auto-submit when enter is pressed
        console.log(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
```

## METHOD 3

```js
import React from "react";

class SearchBar extends React.Component {
    state = { term: "input something..." };

    onFormSubmit(event) {
        event.preventDefault(); // Disables form's default auto-submit when enter is pressed
        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                {/* DOES THE BINDING */}
                <form onSubmit={event => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
```

# API Calls

-   Can use `fetch` or `axios` to make calls, however `axios` is preferred

-   To install axios for a project: `npm install --save axios`
