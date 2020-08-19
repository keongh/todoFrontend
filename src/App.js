import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        newTodo: ""
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({ newTodo: e.target.value })
    }

    handleSubmit(e) {
      e.preventDefault();
      axios.post(process.env.REACT_APP_API_ENDPOINT, {
        "Task": this.state.newTodo,
        "Completed": false
      });
      this.setState({ newTodo: "" })
    }

    render() {
      return (
        <div className="App">
          <h2>My Todo App</h2>
          <form>
            <input placeholder="New item" value={this.state.newTodo} onChange={this.handleChange}></input>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </form>
          <h4>Todo</h4>
        </div>
      );
  }
}
