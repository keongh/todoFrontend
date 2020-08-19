import React, { Component } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem.js';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

    this.updateTodo = this.updateTodo.bind(this);
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_API_ENDPOINT)
    .then(res => {
      this.setState({ todos: res.data });
    });
  }

  updateTodo(todoId, task, completed) {
    axios.put(`${process.env.REACT_APP_API_ENDPOINT}/${todoId}`, {
      "Id": todoId,
      "Task": task,
      "Completed": completed
    }).then(() => {
      axios.get(process.env.REACT_APP_API_ENDPOINT).then(res => {
          this.setState({ todos: res.data });
        });
    });
  }

  render() {
    return (
      <div>
        <ul>
          { this.state.todos.map(todo => {
              return <TodoItem key={todo.id} id={todo.id} completed={todo.completed} task={todo.task} updateTodo={this.updateTodo} />
          })
        }
        </ul>
      </div>
    );
  }
}
