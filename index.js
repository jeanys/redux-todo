import React, { Component }  from "react";
import ReactDOM  from "react-dom";

import ReduxThunk from 'redux-thunk';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import todoApp from "./src/reducers";
import App from "./src/containers/App";
import logger from "./src/middleware/logger";
import './src/styles/main.scss';

let store = createStore(
    todoApp,
    {},
    applyMiddleware(ReduxThunk, logger)
);

const history = syncHistoryWithStore(hashHistory, store);

const routes = {
    path: '/(:filter)',
    component: App
}

const renderApp = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router history={history} routes={routes} />
            </Provider>
        </AppContainer>,
        document.getElementById('content')
    )
};

renderApp();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./src/containers/App', () => {
        const NextApp = require('./src/containers/App').default;
        renderApp();
    });
}