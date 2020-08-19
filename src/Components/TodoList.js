import React, { Component } from 'react';
import axios from 'axios';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_API_ENDPOINT)
    .then(res => {
      this.setState({ todos: res.data });
    });
  }

  render() {
    return(
      <div>
        <ul>
          { this.state.todos.map(todo => {
            if (!todo.completed) {
              return <li key={todo.id}>{todo.task}</li>
            }
            else {
              return <li key={todo.id} style={{ textDecoration: "line-through" }}>{todo.task}</li>
            }
          })
        }
        </ul>
      </div>
    );
  }
}
