import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const users = [ { name:"Heniu"}, { name: "Hans"} ];
ReactDOM.render( <App users={users}/>, document.getElementById('root') );


