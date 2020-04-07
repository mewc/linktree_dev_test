import * as actions from './actions';
import { timeoutPromise } from '../../../util/app';
import axios from 'axios';

export const getTreeData = (username) => {
    return dispatch => {
        dispatch(actions.getTreeDataStart());

        //todo make this into an API call from server
        const filename = `/data/example_trees/${username}.json`;
        let data = fetch(filename);
        data.then((data) => {
            return data.json()
        }).then((response) => {
            if (response && typeof response === 'object') { //format next state here
                console.log(response);
                dispatch(actions.getTreeDataSuccess({
                    linkdata: {
                        [username]: response
                    }
                }));
            } else {
                dispatch(actions.getTreeDataFail({
                    linkdata: {
                        [username]: false
                    }
                }));
            }

        }).catch((err) => {
            console.log(err);
            console.log(`No tree for ${username}`);
            dispatch(actions.getTreeDataFail({
                linkdata: {
                    [username]: false
                }
            }));
        })

    }
}
