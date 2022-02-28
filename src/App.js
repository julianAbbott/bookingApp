import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    state = {
      booking: null,
      cost: null, 
    };

    handleSubmit = (date, time, dur) => {
      this.setState(calculteBooking(date, time, dur));
    }
}

export default App;
