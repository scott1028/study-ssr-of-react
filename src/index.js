import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.hydrate(<App />, document.getElementById('root'));
// registerServiceWorker();  // can not be executed on server build
