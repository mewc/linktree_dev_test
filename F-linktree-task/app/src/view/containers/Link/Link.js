import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import './Link.css';
import { getTreeData } from '../../../state/ducks/treelink/operations';
import LogoNoText from '../../../assets/img/logo_notext.svg'
import copy from '../../../assets/strings/copy';
import { USER_DATA_STATES} from '../../../assets/strings/constants';
import UserHeader from '../../components/UserHeader';
import Icon from '../../components/Icon';
import * as rrd from "react-router-dom";
import TreeWrapper from '../../components/TreeWrapper/TreeWrapper';
const DomLink = rrd.Link;

//TODO stricter validation on usernames 
//TODO parse this through store from rotuer
const getUserFromPath = () => window.location.pathname.split('/tree/')[1].split('/')[0];

const Link = (props) => {
    const { loading, udata, username } = props;
    const WrapperClass = cx({
        'linktree-fail-wrapper': (udata === USER_DATA_STATES.NOTFOUND),
        'linktree-wrapper': true,

    })
    
    console.log(loading, udata);
    const currentUsername = getUserFromPath();
    if (loading || udata === USER_DATA_STATES.EMPTY || username !== currentUsername) {
        console.log({ currentUsername, username, udata });
        props.getUserData(currentUsername);
        //dont have this users data yet, dispatch.
        //TODO prettier handling of loading screen for higher latencies
        return (<div className={WrapperClass}>
        {loading ? '...loading' : 'Loading complete for ' + currentUsername} 
    </div >);
    }
    if (udata === USER_DATA_STATES.NOTFOUND) { 
        return (
            <div className={WrapperClass}>
                <Icon src={LogoNoText} className={'logo-no-text'}></Icon>
                <h3>{copy.NO_USER_FOUND}</h3>
                <DomLink to={`/`} className={'return-link'}>{copy.RETURN_TO_HOME}</DomLink>
            </div>
        )
    }
    return ( //user found, render linktree
        <div className={WrapperClass}>
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


