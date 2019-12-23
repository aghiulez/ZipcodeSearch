import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      city: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ zip: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // fetch(`/result`, {method: 'GET'})
    //   .then(response => response.json())
    //   .then(state => this.setState(state));
    fetch(`/result?zip=${encodeURIComponent(this.state.zip)}`)
    .then(response => response.json())
    .then(state => this.setState(state));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <form onSubmit={this.handleSubmit}>
            <label htmlFor="zip">Enter A zipcode: </label>
            <input
              id="zip"
              type="text"
              value={this.state.zip}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>

          <p>{this.state.city}</p>

        </header>
      </div>
    );
  }
}


export default App;
