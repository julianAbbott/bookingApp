import React from 'react';
import './App.css';
import calculateBooking from './calculateBooking';
import DateInput from './dateInput';
import Display from './Display'; 
import firebase from "firebase/compat/app"
import {databaseRef} from './firebase.js'
import { push } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { set  } from 'firebase/database';
import { ref  } from 'firebase/database';


class App extends React.Component {
    state = {
      booking: "default",
      cost: "default", 
    };

    handleSubmit = (date, time, dur) => {
      this.setState(calculateBooking(date, time, dur)); //TODO fix bugs here 
      // push(databaseRef, this.state)

      const postListRef = ref(databaseRef, 'users/'); 
      const newPostRef = push(postListRef);
      set(newPostRef, {
      username:"biggie"
      });
    }
    render(){
      console.log(databaseRef);
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
