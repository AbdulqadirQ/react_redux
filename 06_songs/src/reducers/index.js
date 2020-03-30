import { combineReducers } from "redux";

/*
NOTES:
These are setup as reducers and therefore make up the entire state of the App (in this case - if there were other reducers
    then they would also contribute)
SongReducer is just a fixed 'state' object and therefore cannot be changed - in this case is therefore the database
SelectedSongReducer will actually take an 'action' as an argument which would change its state

Both are exported as Reducers using 'combineReducers'. They're also renamed to 'songs' and 'selectedSong' respectively, which
is what will appear in console if state is printed out

SongList uses 'connect' which somehow allows access to store:
    - uses songsReducer when mapStateToProps returns 'state.songs'
    - uses  SelectedSongReducer when 'this.props.selectSong' refers to the Action Creator 'selectSong'
      inside /src/actions/index.js
*/

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
