import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">Select</button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// Is what links this Reducer to Store
const mapStateToProps = state => {
    // this now allows  'this.props' to equal { songs: state.songs }
    return { songs: state.songs };
};

//syntax which invokes the function returned by the `connect()` function
export default connect(mapStateToProps)(SongList);
