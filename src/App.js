import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import './App.css';

class App extends Component {

  state = {
    userName: 'sampleName'
  };

  switchHandler = (newUserName) => {
    this.setState({
      userName: newUserName
    });
  }

  inputChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  render() {

    const styleButton = {
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <button onClick={() => this.switchHandler('newUserName')} style={styleButton}>Switch Name</button>
        <UserInput changed={this.inputChangedHandler.bind(this)} name={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
      </div>
    );
  }
}

export default App;
