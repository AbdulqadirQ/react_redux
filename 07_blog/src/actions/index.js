import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
    // Thunk recursively iterates through response until it's not a function
    const response = await jsonPlaceholder.get("/posts");

    // Action is dispatched manually to 'dispatch' in the event we have the raw Action and not a function which could be
    // invoked to return an Action
    dispatch({
        type: "FETCH_POSTS",
        payload: response
    });
};
