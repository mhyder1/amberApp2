import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ideas from './ideas'

ReactDOM.render(
<BrowserRouter>
    <App ideas={ideas}/>
</BrowserRouter>,
document.getElementById('root'));
