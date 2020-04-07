import React from 'react';
import Home from './view/containers/Home';
import Link from './view/containers/Link';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

//https://reacttraining.com/react-router/web/example/custom-link
function Router() {
    document.title = 'mewc tree'
    //todo stricter pathmatching 
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/tree"> 
                        <Link />
                    </Route>
                </Switch>
            </BrowserRouter>
    );
}


export default Router;
