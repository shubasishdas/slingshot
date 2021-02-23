// let's go!
// console.log("it's working");
// alert('hey')

import React from 'react';
import {render} from 'react-dom';
import Router from './components/Router';
import './css/style.css';

// render(<p>Hey!!!</p>, document.querySelector('#main'));
// render(<StorePicker />, document.querySelector('#main'));
render(<Router />, document.querySelector('#main'));

