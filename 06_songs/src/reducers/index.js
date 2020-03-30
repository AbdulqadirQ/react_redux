import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "No Scrubs", duration: "4:05" },
        { title: "Macarena", duration: "2:30" },
        { title: "All start", duration: "3:15" },
        { title: "that way", duration: "74:13" }
    ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: SelectedSongReducer
});
