import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import './style.css'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
    <BrowserRouter>
        <App proppp={0}/>
    </BrowserRouter>,
    document.querySelector("#root")
)
