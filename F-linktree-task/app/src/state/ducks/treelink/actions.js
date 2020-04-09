import {
    createAction
} from 'redux-actions';
import types from './types';

const passthrough = (data) => data;

export const getTreeDataStart = createAction(types.GET_TREE_START, passthrough);
export const getTreeDataFail = createAction(types.GET_TREE_FAIL, passthrough); 
export const getTreeDataSuccess = createAction(types.GET_TREE_SUCCESS, passthrough);

export const getShowDataStart = createAction(types.GET_SHOWS_START, passthrough);
export const getShowDataFail = createAction(types.GET_SHOWS_FAIL, passthrough);
export const getShowDataSuccess = createAction(types.GET_SHOWS_SUCCESS, passthrough);