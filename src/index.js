import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// substituting HashRouter for BrowserRouter for GH Pages
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);