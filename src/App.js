import React, { Component } from 'react';
import logo from './logo.svg';
import text from './text.txt';
import './App.css';

console.log(logo, 11);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={text} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={() => console.log(111)}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
