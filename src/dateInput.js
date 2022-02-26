import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import './dateInput.css';
export default class DateInput extends React.Component {


    
    render(){
        return(    
        <div className="component-display">
            <input type="date" id="dt" onchange="mydate1();"/>
        </div>);
        
        // <body>
        // <input type="date" id="dt" onchange="mydate1();" hidden/>
        // <input type="text" id="ndt"  onclick="mydate();" hidden />
        // <input type="button" Value="Date" onclick="mydate();" />
        // </body>
    }
} 