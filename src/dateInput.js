import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import './dateInput.css';
export default class DateInput extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state({ date: ''});
    // }   
    constructor() {
        super();
        this.state = {
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
      }
    
      onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      onSubmitForm() {
        console.log(this.state)
      }
    
    render(){
        const { items } = this.state;
        return(    
        <div className="component-display">
            <input name="myDate" type="date" id="dt" onChange={this.onInputchange}/>
            <input name="myTime" type="time" id="tm" onChange={this.onInputchange}/>
            <input id="duration-input" type="text" required pattern="[0-9]{2}:[0-9]{2}" value="00:00" title="Write a duration in the format hh:mm:ss:ms"/>
            <div>
                <button onClick={this.onSubmitForm}>Submit</button>
            </div>
        </div>);
        
        // <body>
        // <input type="date" id="dt" onchange="mydate1();" hidden/>
        // <input type="text" id="ndt"  onclick="mydate();" hidden />
        // <input type="button" Value="Date" onclick="mydate();" />
        // </body>
    }
} 