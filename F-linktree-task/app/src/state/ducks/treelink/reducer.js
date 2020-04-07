import * as actions from './actions';
import { handleActions } from 'redux-actions';
import merge from 'lodash.merge';

//see data/eno.json for structure
export const initState = {
    linkdata: {}
}

const {
    getTreeDataSuccess, getTreeDataFail
} = actions;


export default handleActions({
    [getTreeDataSuccess]: (state, action) => {
        console.log(action);
        return { ...merge(state, action.payload) } //merge will handle no overwriting without awkward spreads all over
    },
    [getTreeDataFail]: (state, action) => { //end loading actions
        return {...merge(state, action.payload) }
    }
}, initState)