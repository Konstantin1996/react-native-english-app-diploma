const initialState = {
    user: null,
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_CURRENT_USER':
            return state;
        case "REQUEST_CURRENT_USER_SUCCESS":
            return { user: action.payload }
        case "REQUEST_CURRENT_USER_FAILURE":
            return state;
        case "UPDATE_POINTS":
            return Object.assign({}, state, {
                user: Object.assign({},state.user,{
                    points: action.payload
                })
            })
        default: {
            return state
        }
    }
}