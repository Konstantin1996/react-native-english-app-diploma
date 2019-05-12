import { combineReducers } from 'redux'
import basicReducer from './basicReducer'
import congratsReducer from './congratsReducer'
import usersReducer from './usersReducer'

export default combineReducers({
    basicReducer: basicReducer,
    congratsReducer: congratsReducer,
    usersReducer: usersReducer
})