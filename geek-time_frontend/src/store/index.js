import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import reducers from './reducer';
import thunk from 'redux-thunk'; // 异步状态修改

export default createStore (
    combineReducers(reducers),
    applyMiddleware(thunk)
)