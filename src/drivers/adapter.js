import React, { useMemo } from 'react';
import { func, shape, string } from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const ReactPwaAdapter = props => {
    const { children, store } = props;


    return (
        <ReduxProvider store={store}>
            <BrowserRouter>{children}</BrowserRouter>
        </ReduxProvider>
    );
};



ReactPwaAdapter.propTypes = {
    store: shape({
        dispatch: func.isRequired,
        getState: func.isRequired,
        subscribe: func.isRequired
    }).isRequired
};

export default ReactPwaAdapter;
