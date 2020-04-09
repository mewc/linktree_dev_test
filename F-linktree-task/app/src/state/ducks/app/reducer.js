import * as appActions from './actions';
import * as treelinkActions from '../treelink/actions';
import { handleActions, combineActions } from 'redux-actions';

export const initState = {
    loading: {}
}

const {
    loadingStart, loadingEnd
} = appActions;
const {
    getTreeDataFail,
    getTreeDataStart,
    getTreeDataSuccess, 
    getShowDataStart,
    getShowDataSuccess,
    getShowDataFail
} = treelinkActions


export default handleActions({
    [combineActions(loadingStart, getTreeDataStart, getShowDataStart)]: (state, action) => {
        console.log(state.loading, action.type);
        let l = state.loading;
        l[action.type.split("_")[0]] = true; //add key and bool to loading object
        //TODO handle load % instead of just booleans
        return { ...state, loading: l }
    },
    [combineActions(loadingEnd, getTreeDataFail, getTreeDataSuccess, getShowDataSuccess, getShowDataFail)]: (state, action) => { //end loading actions
        let l = state.loading;
        if (Object.keys(l).length > 1) {
            delete l[action.type.split("_")[0]]; //remove action base type from the loading obj and leave others
        } else {
            l = {}; 
        }
        return { ...state, loading: l }
    }
}, initState)