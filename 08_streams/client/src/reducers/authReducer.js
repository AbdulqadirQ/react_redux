import { SIGN_IN, SIGN_OUT } from "../actions/types";

// sets a default value of state
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload };
        case SIGN_OUT:
            // when signing out, userId is set back to null
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
};
