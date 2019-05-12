import firebase from '../firebase/config'

function requestCurrentUser() {
    return {
        type: 'REQUEST_CURRENT_USER'
    }
}

function requestCurrentUserSuccess(user) {
    return {
        type: 'REQUEST_CURRENT_USER_SUCCESS',
        payload: user
    }
}

function requestCurrentUserFailure(err) {
    return {
        type: 'REQUEST_CURRENT_USER_FAILURE',
        payload: err
    }
}

export const updatePoints = (points) => {
    console.log('ACTION UPDATE POINTS', points);
    return { type: 'UPDATE_POINTS', payload: points }
}

export const getCurrentUser = (uid) => {
    return dispatch => {
        dispatch(requestCurrentUser);
        firebase.database().ref('users/' + uid).once('value', (snapshot) => {
            dispatch(requestCurrentUserSuccess(snapshot.val()));
        })
        .catch(err => dispatch(requestCurrentUserFailure(err)))
    }
}
