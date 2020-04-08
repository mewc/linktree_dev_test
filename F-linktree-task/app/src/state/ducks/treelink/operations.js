import * as actions from './actions';
import { USER_DATA_STATES } from '../../../assets/strings/constants';

export const getTreeData = (username) => {
    return dispatch => {
        dispatch(actions.getTreeDataStart());

        //todo make this into an API call to server
        //TODO get location data properly from env vars
        const filename = `/data/example_trees/${username}.json`;
        let data = fetch(filename);
        data.then((data) => {
            return data.json()
        }).then((response) => {
            if (response && typeof response === 'object' && Object.keys(response).length > 0) { //format next state here
                dispatch(actions.getTreeDataSuccess({
                    data: response,
                    username
                }));
            } else {
                dispatch(actions.getTreeDataFail({
                    data: USER_DATA_STATES.NOTFOUND,
                    username
                }));
            }

        }).catch((err) => {
            console.log(err);
            console.log(`No tree for ${username}`);
            dispatch(actions.getTreeDataFail({
                data: USER_DATA_STATES.NOTFOUND,
                username

            }));
        })

    }
}
