import * as actions from './actions';
import { handleActions,combineActions } from 'redux-actions';

import merge from 'lodash.merge';
import {USER_DATA_STATES} from '../../../assets/strings/constants';
//see data/eno.json for structure
export const initState = {
    data: USER_DATA_STATES.EMPTY,
    username: "",
    shows: []
}

const {
    getTreeDataSuccess, getTreeDataFail,
    getShowDataSuccess, getShowDataFail
} = actions;


export default handleActions({
    [combineActions(getTreeDataSuccess, getShowDataSuccess)]: (state, action) => {
        return { ...merge(state, action.payload) } //merge will handle no overwriting without awkward spreads all over
    },
    [combineActions(getTreeDataFail, getShowDataFail)]: (state, action) => { //end loading actions
        return {...merge(state, action.payload) }
    }
}, initState)