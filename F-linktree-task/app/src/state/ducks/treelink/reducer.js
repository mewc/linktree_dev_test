import * as actions from './actions';
import { handleActions,combineActions } from 'redux-actions';

import merge from 'lodash.merge';
import {USER_DATA_STATES} from '../../../assets/strings/constants';
//see data/eno.json for structure
export const initState = {
    data: USER_DATA_STATES.EMPTY,
    username: "",
    shows: [],
    music: [],
}

const {
    getTreeDataSuccess, getTreeDataFail, getTreeDataStart,
    getShowDataSuccess, getShowDataFail, getShowDataStart,
    getMusicDataSuccess, getMusicDataFail, getMusicDataStart
} = actions;


export default handleActions({
    [combineActions(getTreeDataStart, getShowDataStart, getMusicDataStart)]: (state, action) => { 
        console.log({action});
        return { ...merge(state, action.payload) }
    },
    [combineActions(getTreeDataSuccess, getShowDataSuccess, getMusicDataSuccess)]: (state, action) => {
        return { ...merge(state, action.payload) } //merge will handle no overwriting without awkward spreads all over
    },
    [combineActions(getTreeDataFail, getShowDataFail, getMusicDataFail)]: (state, action) => { //end loading actions
        return {...merge(state, action.payload) }
    }
}, initState)