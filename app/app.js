import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import FontFaceObserver from 'fontfaceobserver';
import createHistory from 'history/createBrowserHistory';
import '@fortawesome/fontawesome-free-solid';
import 'sanitize.css/sanitize.css';
import 'react-dd-menu/dist/react-dd-menu.css';

import App from './containers/App';

/* eslint-disable */
import '!file-loader?name=[name].[ext]!./images/favicon.png';
/* eslint-enable */

import configureStore from './configureStore';

import './global-styles';

const balooObserver = new FontFaceObserver('Baloo', {});

balooObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
