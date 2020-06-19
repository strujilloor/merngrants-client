import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GrantDetail from './components/grants/GrantDetail';
import Grants from './components/grants/Grants';

const Routes = () => {
    return (
    <>
        <Switch>
            <Route exact path="/">
                <Redirect to="/grants" /> 
            </Route> 
            <Route exact path="/grants" component={ Grants } />
            <Route exact path="/grant/:id" component={ GrantDetail }/>
        </Switch>  
    </>
    );
};

export default Routes;
