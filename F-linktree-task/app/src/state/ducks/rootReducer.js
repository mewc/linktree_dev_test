import { combineReducers } from 'redux';
import { app } from './app';
import { treelink } from './treelink';

const reducers = {
    app,
    treelink
}

export default () => combineReducers(reducers);