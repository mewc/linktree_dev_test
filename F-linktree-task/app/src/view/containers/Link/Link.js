import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import './Link.css';
import { getTreeData } from '../../../state/ducks/treelink/operations';

const Link = (props) => {
    const { loading } = props;
    const WrapperClass = cx({
        'wrapper': true
    })
    const username = window.location.pathname.split('/tree/')[1].split('/')[0];
    console.log({username}); //TODO stricter validation on usernames
    props.getUserData(username);

    return (
        <div className={WrapperClass}>
            {(Object.keys(loading).length > 1) ? '...loading' : 'Link'}
        </div >
    );
}

function mapStateToProps(state, ownProps) {
    return {
        loading: state.app.loading,

    };
}

const mapDispatchToProps = dispatch => {
    return {
        getUserData: (username) => { dispatch(getTreeData(username))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Link);


