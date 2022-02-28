import React from 'react';
import './App.css';
import calculateBooking from './calculateBooking';
import DateInput from './dateInput';
import Display from './Display';

class App extends React.Component {
    state = {
      booking: "default",
      cost: "default", 
    };

    handleSubmit = (date, time, dur) => {
      this.setState(calculateBooking(date, time, dur)); //TODO fix bugs here
    }
    render(){
      return(
        <div>
          <DateInput submitHandler={this.handleSubmit}/>
          <Display data={this.state.booking}/>
          <Display data={this.state.cost}/>

        </div>

      );
    }

}

export default App;
