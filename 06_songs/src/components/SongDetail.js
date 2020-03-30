import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ currentSong }) => {
    if (!currentSong) {
        return <div>Select a song</div>;
    }
    return <div>{currentSong.title}</div>;
};

const mapStateToProps = state => {
    return { currentSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
