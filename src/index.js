import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DateInput from './dateInput.js';
import reportWebVitals from './reportWebVitals';
import Display from './Display.js';


var myDate = new Date();

ReactDOM.render( 
                <body>
                {/* <DateInput/>
                <Display data={"THIS IS A BOOKING"}/>
                <Display data={"THIS IS THE COST"}/> */}
                <App/>
                </body> ,
                document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
