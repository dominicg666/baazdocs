import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Overview = lazy(() => import('../Overview'));
const CLI = lazy(() => import('../Cli'));
const EnvironmentSetup = lazy(() => import('../EnvironmentSetup'));
const BuiKits = lazy(() => import('../buikits'));
const Accordion = lazy(() => import('../buikits/Accordion'));
const Modal = lazy(() => import('../buikits/Modal'));

const Routes = () => {
    return (
        <Suspense fallback={null}>
                <Switch>
                    <Route exact path="/buikit">
                        <BuiKits />
                    </Route>
                    <Route exact path="/buikit/accordion">
                        <Accordion />
                    </Route>
                    <Route exact path="/buikit/modal">
                        <Modal />
                    </Route>
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
