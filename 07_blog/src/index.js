import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import think from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
import thunk from "redux-thunk";

// links middleware 'thunk' to redux store
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
