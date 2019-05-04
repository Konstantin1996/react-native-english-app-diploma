import { createStore, applyMiddleware, compose } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';

import reducers from '../reducers'


const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const store = createStore(
    reducers,
    enhancers
)



export default store