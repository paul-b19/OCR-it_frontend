// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.min.css';
import './css/custom.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(<Router><Route path='/' component={App} /></Router>, document.getElementById('root'));
serviceWorker.unregister();
