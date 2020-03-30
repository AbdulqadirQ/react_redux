import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
    render() {
        return <div>SongList</div>;
    }
}

// Is what links this Reducer to Store
const mapStateToProps = state => {
    console.log(state);
    return state;
};

//syntax which invokes the function returned by the `connect()` function
export default connect(mapStateToProps)(SongList);
