import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Movie from './movie';
import Mdetail from './moviedetail';
import Sea from './debounce';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Sea/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
