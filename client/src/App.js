import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };

    this.fetchMessage = this.fetchMessage.bind(this);
  }

  componentDidMount() {
    this.fetchMessage();
  }

  fetchMessage = async () => {
    const res = await fetch('/api/message');
    const json = await res.json();
    console.log(json.text);
    console.log(json);
    this.setState({
      message: json.text,
      fetching: false
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hey there!!!</h1>
          <h4>
            {this.state.fetching
              ? '------- Fetching Message from API -------'
              : this.state.message}
          </h4>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
