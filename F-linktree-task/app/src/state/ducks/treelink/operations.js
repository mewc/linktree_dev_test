import * as actions from './actions';
import { USER_DATA_STATES } from '../../../assets/strings/constants';

const getShowData = (dispatch, showProviderLink) => {
    console.log(showProviderLink);
    dispatch(actions.getShowDataStart());

    const id = showProviderLink.split('.com/artists/')[1];
    //todo make this into an API call to server for each provider
    //TODO get location data properly from env vars
    const filename = `/data/example_show_data/${id}.json`;
    let data = fetch(filename);
    data.then((data) => {
        return data.json()
    }).then((response) => {
        console.log('showshows', response);
        if (Array.isArray(response)) { //format next state here
            console.log('in');
            dispatch(actions.getShowDataSuccess({
                shows: response
            }));
        } else {
            console.log('out');
            dispatch(actions.getShowDataFail({
                shows: USER_DATA_STATES.NOTFOUND
            }));
        }

    }).catch((err) => {
        console.log(err);
        dispatch(actions.getShowDataFail({
            shows: USER_DATA_STATES.NOTFOUND
        }));
    })
}


export const getTreeData = (username) => {
    return dispatch => {
        console.log(username, 'start');
        dispatch(actions.getTreeDataStart());

        //todo make this into an API call to server
        //TODO get location data properly from env vars
        const filename = `/data/example_trees/${username}.json`;
        let data = fetch(filename);
        data.then((data) => {
            return data.json()
        }).then((response) => {
            console.log(response);
            if (response && typeof response === 'object' && Object.keys(response).length > 0) { //format next state here
                dispatch(actions.getTreeDataSuccess({
                    data: response,
                    username
                }));
                const show = response.links.filter(r => r.type === 'shows');
                if (show.length === 1) {
                    console.log('HAS SHOW', show[0].link, getShowData);
                    getShowData(dispatch, show[0].link);
                }
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







