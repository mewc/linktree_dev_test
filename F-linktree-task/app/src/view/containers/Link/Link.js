import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import './Link.css';
import { getTreeData } from '../../../state/ducks/treelink/operations';
import { USER_DATA_STATES } from '../../../assets/strings/constants';
import UserHeader from '../../components/UserHeader';
import TreeWrapper from '../../components/TreeWrapper/TreeWrapper';
import MissingPage from '../MissingPage'
import { getThemeKey } from '../../../util/styling';


//TODO stricter validation on usernames 
//TODO parse this through store from rotuer
const getUserFromPath = () => window.location.pathname.split('/tree/')[1].split('/')[0];

const Link = (props) => {
    const { loading, udata, username } = props;
    const WrapperClass = cx({
        'linktree-fail-wrapper': (udata === USER_DATA_STATES.NOTFOUND),
        'linktree-wrapper': true,
        ['lt-theme-' + udata.theme]: udata.theme
    })

    const currentUsername = getUserFromPath();
    if (loading || udata === USER_DATA_STATES.EMPTY || username !== currentUsername) {
        console.log({ currentUsername, username, udata });
        props.getUserData(currentUsername);
        //dont have this users data yet, dispatch.
        //TODO prettier handling of loading screen for higher latencies
        return (<div className={WrapperClass}>
            {loading ? '...loading' : ''}
        </div >);
    }
    if (udata === USER_DATA_STATES.NOTFOUND) {
        return (<MissingPage />)
    }
    //TODO handle style change better with a themeprovider around this component (more reacty than loading seperate css files)
    return ( //user found, render linktree
        <div className={WrapperClass}>
            <link rel="stylesheet" type="text/css" href={`/themes/${getThemeKey(udata.theme)}.css`} />
            <UserHeader username={udata.username} imgsrc={udata.img} />
            <TreeWrapper linkCollection={udata.links} />
        </div >
    );
}

const mapStateToProps = (state, ownProps) => {
    let data = state.treelink.data;
    if (data === undefined) data = USER_DATA_STATES.EMPTY;
    return {
        loading: (Object.keys(state.app.loading).length > 0),
        udata: data,
        username: state.treelink.username
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getUserData: (username) => { dispatch(getTreeData(username)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Link);


