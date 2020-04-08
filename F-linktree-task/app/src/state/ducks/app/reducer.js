import * as appActions from './actions';
import * as treelinkActions from '../treelink/actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

export const initState = {
    loading: {}
}

const {
    loadingStart, loadingEnd
} = appActions;
const {
    getTreeDataFail,
    getTreeDataStart,
    getTreeDataSuccess
} = treelinkActions


export default handleActions({
    [combineReducers(loadingStart, getTreeDataStart)]: (state, action) => {
        console.log(state.loading, action.type);
        let l = state.loading;
        l[action.type.split("/")[0]] = true; //add key and bool to loading object
        //TODO handle load % instead of just booleans
        return { ...state, loading: l }
    },
    [combineReducers(loadingEnd, getTreeDataFail, getTreeDataSuccess)]: (state, action) => { //end loading actions
        let l = state.loading;
        if (Object.keys(l).length > 1) {
            delete l[action.type.split("/")[0]]; //remove action base type from the loading obj and leave others
        } else {
            l = {}; 
        }
        return { ...state, loading: l }
    }
}, initState)