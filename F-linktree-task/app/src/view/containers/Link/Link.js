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
    //if we are waiting for a response

    //TODO organise the status gates better
    if (!loading && (udata === USER_DATA_STATES.EMPTY || username !== currentUsername)) {
        props.getUserData(currentUsername);
    }
    if (udata === USER_DATA_STATES.NOTFOUND) {
        return (<MissingPage />)
    }
    if (loading || udata.links === undefined) {
        //TODO prettier handling of loading screen for higher latencies
        return (<div className={WrapperClass}>
            {loading ? '...loading' : ''}
        </div >);
    }
    //TODO handle style change better with a themeprovider around app (more reacty than loading seperate css files)
    return ( //user found, render linktree
        <div className={WrapperClass}>
            <link rel="stylesheet" type="text/css" href={`/themes/${getThemeKey(udata.theme)}.css`} />
            <UserHeader username={udata.username} imgsrc={udata.img} />
            <TreeWrapper linkCollection={udata.links} linkTypeData={props.linkTypeData} />
        </div >
    );
}

const mapStateToProps = (state, ownProps) => {
    let data = state.treelink.data;
    if (data === undefined) data = USER_DATA_STATES.EMPTY;
    console.log('Loading', state.app.loading);
    return {
        loading: (Object.keys(state.app.loading).length > 0),
        udata: data,
        linkTypeData: { shows: state.treelink.shows, music: state.treelink.music },
        username: state.treelink.username
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getUserData: (username) => { dispatch(getTreeData(username)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Link);


