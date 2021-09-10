import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'GTM-PPQS4D9',
    dataLayer: []
}

TagManager.initialize(tagManagerArgs)

let store = createStore(reducers, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <App/> 
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();


