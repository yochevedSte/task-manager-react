import React, { Component } from 'react';
import TaskManager from './TaskManager';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskManager/>
      </div>
    );
  }
}

export default App