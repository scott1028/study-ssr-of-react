import React, { Component } from 'react';
import logo from './logo.svg';
import text from './text.txt';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={text} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <button onClick={() => console.log('Hi!!')}>Test</button>
        </p>
      </div>
    );
  }
}

export default App;
