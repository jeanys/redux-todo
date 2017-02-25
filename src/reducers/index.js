import { combineReducers } from 'redux';
import todos from './todo';
import visibility from './visibility';

const todoApp = combineReducers({
    todos,
    visibility
});

export default todoApp;