import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome"
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('test');
    const msgRef = rootRef.child('message');
    msgRef.on('value', snap => {
      this.setState({
        message: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React my guy</h2>
        </div>
        <h3>{this.state.message}</h3>
        <p className="App-intro">
          To begin, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
