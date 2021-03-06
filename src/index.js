import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

let store = createStore(reducers, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <App/> 
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();


