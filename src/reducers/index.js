import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todo';
import visibility from './visibility';

const todoApp = combineReducers({
    todos,
    visibility,
    routing: routerReducer
});

export default todoApp;