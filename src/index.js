import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import readXlsxFile from 'read-excel-file';

// const input = document.getElementById('input');

// input.addEventListener('change', () => {
//   readXlsxFile(input.files[0]).then(rows => {
//     // `rows` is an array of rows
//     // each row being an array of cells.
//   });
// });
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
