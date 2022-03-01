import React from 'react';
import PropTypes from "prop-types";
import getHour from './calculateBooking'
import ReactDOM from 'react-dom';
import './dateInput.css';
import Display from './Display.js';

export default class DateInput extends React.Component {

  static propTypes = {
    submitHandler: PropTypes.func // this is how I pass my data to the app component 
  };


    constructor() {
        super();
        this.state = {
            date: null,
            time: null,
            dur: null
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
        if(this.state.date!=null && this.state.time!=null && this.state.dur != null && this.state.dur != "select"){
          console.log(this.state);
          this.props.submitHandler(this.state.date, this.state.time, this.state.dur); // here we use the function defined in the app
        } 
      }
    
    
    render(){
        const { items } = this.state;
        return(    
        <div className="component-display">
            <div> Enter a Booking </div>
            <div ><small> Open 9-5 </small></div>
            <input name="date" type="date" id="dt" onChange={this.onInputchange}/>
            <input name="time" type="time" id="tm" placeholder ="9-5" onChange={this.onInputchange}/> 
            
            <div>
            
            <select name="dur" id="sel" onChange={this.onInputchange}>
              <option value="select">select</option>
              <option value="1">1hr</option>
              <option value="2">2hr</option>
              <option value="3">3hr</option>
              <option value="4">4hr</option>
              <option value="5">5hr</option>
              {/* <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option> */}
          
            </select>
            </div>
            <div>
                <button onClick={this.onSubmitForm}>Submit</button> 
            </div>
        </div>);
    }
} 
