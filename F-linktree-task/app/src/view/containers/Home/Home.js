import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import './Home.css';
import { appLoading } from '../../../state/ducks/app/operations';
import {
    Link
} from "react-router-dom";
import {
    Grid
} from '@material-ui/core'

const Home = (props) => {
    const { loading } = props;
    const WrapperClass = cx({
        'wrapper': true
    })
    if (Object.keys(loading).length > 1) { return (<p>'...loading'</p>); }
    return (
        <div className={WrapperClass}>
            <p>Task Homepage</p>
            <Grid container
                spacing={4}
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Link to={`/tree/eno`} className={'link'}>Tree User 1</Link>
                </Grid>
                <Grid item>
                    <Link to={`/tree/mattelliott`} className={'link'}>Tree User 2</Link>
                </Grid>
                <Grid item>
                    <Link to={`/tree/mewc`} className={'link'}>Tree User 3</Link>
                </Grid>
                <Grid item>
                    <Link to={`/tree/not-set-deliberately`} className={'link'}>Missing Tree User 1</Link>
                </Grid>
                <Grid item>
                    <Link to={`/tree/`} className={'link'}>No User set</Link>
                </Grid>
            </Grid>

        </div >
    );
}

function mapStateToProps(state, ownProps) {
    return {
        loading: state.app.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        appLoading: (promise) => { dispatch(appLoading(promise)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);


