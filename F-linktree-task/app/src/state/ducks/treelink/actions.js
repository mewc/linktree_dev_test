import {
    createAction
} from 'redux-actions';
import types from './types';

export const getTreeDataStart = createAction(types.GET_TREE_START, () => true);
export const getTreeDataFail = createAction(types.GET_TREE_FAIL, (data) => data); 
export const getTreeDataSuccess = createAction(types.GET_TREE_SUCCESS, (data) => data);

export const getShowDataStart = createAction(types.GET_SHOWS_START, () => true);
export const getShowDataFail = createAction(types.GET_SHOWS_FAIL, (data) => data);
export const getShowDataSuccess = createAction(types.GET_SHOWS_SUCCESS, (data) => data);