import React from 'react';
import { connect } from 'react-redux';
import Router from './Router';
import { appLoading } from './state/ducks/app/operations';
import { SCOPES } from './assets/strings/constants';
import Logo from './assets/img/logo.svg'
import './app.css';

function App(props) {
    const { loading } = props.loading;
    return (
        <div className="App">
            {(loading)}
            <Router />
            <div className="app-footer"> <img src={Logo} alt="Logo" className="App-logo footer-logo" /></div>
        </div >
    );
}

function mapStateToProps(state, ownProps) {
    return {
        loading: (state.app.loading[SCOPES.SCOPE_APP] !== null)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        appLoading: (promise) => { dispatch(appLoading(promise)) }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(App);
