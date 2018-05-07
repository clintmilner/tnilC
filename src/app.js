import React from 'react';
import ReactDOM from 'react-dom';
import { init, initUtils } from './rs-utils.js';
import './styles/styles.scss';

const tmpl = <p>React build from JSX and Babel</p>;
ReactDOM.render( tmpl, document.getElementById('container'));

console.warn(`here is app.js and ${init('init!')}`);
console.info(`here is app.js and ${initUtils('awesome!')}`);
