import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // await ensures fetchPosts is called, sends api request, gets response, and the dispatches action before moving on to next line of code
    // So await IS ONLY used here since we have more logic following this line
    await dispatch(fetchPosts());

    // // lodash 'map' gets only 'userId'  properties from getState().posts objects
    // // lodash 'uniq' returns an array of only unique userIds
    const userIds = _.uniq(_.map(getState().posts, "userId"));

    // // dispatches the response of fetchUser to redux store after we've made the request for specific userId
    userIds.forEach(id => dispatch(fetchUser(id)));

    // OPTIONAL REFACTOR OF LINE 11 ONWARDS FROM ABOVE USING _.chain:
    // _.chain(getState().posts)
    //     .map("userId")
    //     .uniq()
    //     .forEach(id => dispatch(fetchUser(id)))
    //     .value();   // performs the 'execute()' of this chain
};

export const fetchPosts = () => async dispatch => {
    // Thunk recursively iterates through response until it's not a function
    const response = await jsonPlaceholder.get("/posts");

    // Action is dispatched manually to 'dispatch' in the event we have the raw Action and not a function which could be
    // invoked to return an Action
    dispatch({
        type: "FETCH_POSTS",
        payload: response.data
    });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
};

//  MEMOIZE ALTERNATIVE OF FETCHING ONLY UNIQUE USERS
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: "FETCH_USER", payload: response.data });
// });
