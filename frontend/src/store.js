import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { postDetailsReducer, postListReducer } from './reducers/postReducers';

const initialState = {};
const reducer = combineReducers({
    postList: postListReducer,
    postDetails: postDetailsReducer
})

const composEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composEnchancer(applyMiddleware(thunk)));

export default store;