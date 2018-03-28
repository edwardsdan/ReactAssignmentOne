import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import './App.css';

class App extends Component {

  state = {
    username: 'anotherName'
  };

  usernameChangedHandler = (newUserName) => {
    this.setState({
      username: newUserName
    });
  }

  inputChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {

    const styleButton = {
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <button onClick={() => this.usernameChangedHandler('someNewName')} style={styleButton}>Switch Name</button>
        <UserInput changed={this.inputChangedHandler.bind(this)} name={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Test"/>
      </div>
    );
  }
}

export default App;
