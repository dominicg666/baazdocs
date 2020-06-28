import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Overview = lazy(() => import('../Overview'));
const CLI = lazy(() => import('../Cli'));
const EnvironmentSetup = lazy(() => import('../EnvironmentSetup'));

const Routes = () => {
    return (
        <Suspense fallback={null}>
            <Switch>
                <Route exact path="/environment-setup">
                    <EnvironmentSetup />
                </Route>
                <Route exact path="/cli">
                    <CLI />
                </Route>
                <Route exact path="/">
                    <Overview />
                </Route>
            </Switch>
        </Suspense>
    );
};

export default Routes;
