import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
    render() {
        return <div>SongList</div>;
    }
}

//syntax which invokes the function returned by the `connect()` function
export default connect()(SongList);
