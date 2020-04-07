import _ from "lodash";
import { FETCH_STREAM, FETCH_STREAMS, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            /*
            adds each stream object to its own id in state
            e.g. {"title":"pro strem", "description":"bes strem", "id":1} =>
                 {1: {"title":"pro strem", "description":"bes strem", "id":1} }
            */
            return { ...state, ..._.mapKeys(action.payload, "id") };
        // The rest of these just ensure Redux Store and db.json are in sync
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            // omit creates a new object to delete the stream
            return _.omit(state, action.payload);
        default:
            return state;
    }
};
