import React, { Component }  from "react";
import ReactDOM  from "react-dom";
import ReduxThunk from 'redux-thunk';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { AppContainer } from 'react-hot-loader'
import todoApp from "./src/reducers";
import App from "./src/components/App";
import './src/styles/main.scss';

let store = createStore(
    todoApp,
    {},
    applyMiddleware(ReduxThunk)
);

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    document.getElementById('content')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./src/components/App', () => {
        const NextApp = require('./src/components/App').default;
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <NextApp />
                </Provider>
            </AppContainer>,
            document.getElementById('content')
        );
    });
}