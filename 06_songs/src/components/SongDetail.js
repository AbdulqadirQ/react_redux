import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ currentSong }) => {
    if (!currentSong) {
        return <div>Select a song</div>;
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {currentSong.title}
                <br />
                Duration: {currentSong.duration}
            </p>
        </div>
    );
};

const mapStateToProps = state => {
    return { currentSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
