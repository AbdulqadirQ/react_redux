// This reducer gets an action of a single user (retrieved from an api request, /users/{id})
// The user is then appended to a new list object containing the previous state
export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_USER":
            return [...state, action.payload];
        default:
            return state;
    }
};
