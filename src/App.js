import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    
  };

  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput userName="sampleName"/>
        <UserOutput />
      </div>
    );
  }
}

export default App;
