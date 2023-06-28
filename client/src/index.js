// Path: client/src/index.js
// build an index.js file that will be the main entry point for the application
// import the react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
// import the App component
import App from './App';
// import the reportWebVitals file
import reportWebVitals from './reportWebVitals';
// import the css file for the application
import './index.css';

// create the root variable that will be used to render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
// render the App component to the root variable
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();