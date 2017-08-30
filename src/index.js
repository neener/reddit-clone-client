import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';

console.log(store)

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

registerServiceWorker();

