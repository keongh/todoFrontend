import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
    render() {
      return (
        <div className="App">
          <h2>My Todo App</h2>
          <form>
            <input placeholder="New item"></input>
            <button type="submit">Submit</button>
          </form>
          <h4>Todo</h4>
        </div>
      );
  }
}
