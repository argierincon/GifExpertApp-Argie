import React from 'react';
import ReactDOM from 'react-dom'
// import PrimeraApp from './PrimerApp';
import CounterApp from './components/Counter/Counter'

const App = document.querySelector('#app');

ReactDOM.render( < CounterApp value={10} / > , App)
// console.log(App);