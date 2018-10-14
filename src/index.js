/* Modules */
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './services/registerServiceWorker';

/* Aplication */
import App from './containers/App/App';

ReactDOM.render(
    <App />
    , document.getElementById('root'));

registerServiceWorker();

