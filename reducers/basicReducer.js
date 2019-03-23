const initialState = {
    data: 'SPACE'
}

export default function basicReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            console.log(`FETCHING DATA ...`);
            return { data: action.payload };
        case 'INCREMENT':
            console.log('INCREMENT');
            return { ...state, count: state.count + 1 }
        default: {
            console.log(state);
            return state
        }
    }
}