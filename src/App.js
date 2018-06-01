import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from "./Editor/Editor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Build a Markdown Previewer</h1>
        </header>

          <Editor />
      </div>
    );
  }
}

export default App;
