import * as actions from './actions';
import { USER_DATA_STATES, LINK_TYPES } from '../../../assets/strings/constants';
import { get } from '../../../util/api';


const getShowData = (dispatch, showProviderLink) => {
    console.log(showProviderLink);
    dispatch(actions.getShowDataStart({ shows: [] }));

    //TODO get location data properly from env vars
    const id = showProviderLink.split('.com/artists/')[1];
    const filename = `/data/example_show_data/${id}.json`;

    //TODO depending on provider (songkick, residentAdvisor etc.) make API calls and process response here
    //TODO generalise as provider detector and fetcher (put in obj, return results for any topic (reusable for other links like socials, events, images, products))
    get(filename).then((response) => {
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
        console.error(err);
        dispatch(actions.getShowDataFail({
            shows: USER_DATA_STATES.NOTFOUND
        }));
    })
}

const getMusicData = (dispatch, musicLinks) => {
    console.log(musicLinks);
    dispatch(actions.getMusicDataStart({ music: [] }));
    Promise.all(musicLinks.map(m => {
        console.log(m);
        //TODO handle getting music data from a more reliable spot than fake url sniffing id's
        let id = m.link.split('/');
        id = id[id.length - 1]; //get last url value as id to fetch music data from. 
        return get(`/data/example_music_data/${id}.json`);
    })).then((response) => {
        console.log('musicmusic', response);
        if (Array.isArray(response)) { //format next state here
            console.log('in');
            dispatch(actions.getMusicDataSuccess({
                music: response[0] //TODO rm hardcode 0 index and get real results if there are many
            }));
        } else {
            console.log('out');
            dispatch(actions.getMusicDataFail({
                music: USER_DATA_STATES.NOTFOUND
            }));
        }
    }).catch((err) => {
        console.error(err);
        dispatch(actions.getMusicDataFail({
            music: USER_DATA_STATES.NOTFOUND
        }));
    })
}


const getExtraData = (dispatch, links) => {
    //TODO add new link types as they come in here and if they require additional data
    const extra = {};
    links.forEach((link) => {
        switch (link.type.toUpperCase()) {
            case LINK_TYPES.SHOWS:
                (Array.isArray(extra[LINK_TYPES.SHOWS])) ? extra[LINK_TYPES.SHOWS].push(link) : extra[LINK_TYPES.SHOWS] = [link];
                break;
            case LINK_TYPES.MUSIC:
                (Array.isArray(extra[LINK_TYPES.MUSIC])) ? extra[LINK_TYPES.MUSIC].push(link) : extra[LINK_TYPES.MUSIC] = [link];
                break;
            default:
                break;
        }
    })
    console.log({extra});
    if (extra[LINK_TYPES.SHOWS] && extra[LINK_TYPES.SHOWS].length === 1) { getShowData(dispatch, extra[LINK_TYPES.SHOWS][0].link); }
    if (extra[LINK_TYPES.MUSIC] && extra[LINK_TYPES.MUSIC].length > 0) { getMusicData(dispatch, extra[LINK_TYPES.MUSIC]); }
    return Object.keys(extra);
}


export const getTreeData = (username) => {
    return dispatch => {
        console.log(username, 'start');
        dispatch(actions.getTreeDataStart({ data: USER_DATA_STATES.EMPTY, username: "" })); //reset on start

        //TODO make this into an API call to server
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
                console.log('Tree has extra data?', getExtraData(dispatch, response.links));
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







