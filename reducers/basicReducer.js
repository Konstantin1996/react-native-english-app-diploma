const initialState = {
    count: 0
}

export default function basicReducer(state = initialState, action) {
    switch (action.type) {
        case 'BUTTON_CLICK':
            console.log("CLICK!!");
            console.log(action);
            return state
        
        default: {
            console.log(state);
            return state
        }
    }
}