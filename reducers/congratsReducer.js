const initialState = {
    points: 0,
}

export default function congratsReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_POINTS':
            console.log(`UPDATE POINTS`);
            return { points: action.payload };
        default: {
            console.log('default ',state);
            return state
        }
    }
}