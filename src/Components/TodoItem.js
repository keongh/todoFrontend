import React, { Component } from 'react';

export default class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.toggleDone = this.toggleDone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  toggleDone() {
    this.props.updateTodo(this.props.id, this.props.task, !this.props.completed);
  }

  deleteTodo() {
    this.props.delete(this.props.id);
  }

  render(props) {
    if (!this.props.completed) {
      return (
        <div>
          {this.props.task}<button style={{marginLeft:"5px"}}onClick={this.toggleDone}>Done</button>
            <button onClick={this.deleteTodo}>Delete</button>
        </div>
      );
    }
    else {
      return (
        <div>
          <p style={{textDecoration: "line-through"}}>{this.props.task}
          <button style={{marginLeft:"5px"}}onClick={this.toggleDone}>Undo</button>
          <button onClick={this.deleteTodo}>Delete</button></p>
        </div>
      )
    }
  }
}
