import React, { Component } from 'react';

export default class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone() {
    this.props.updateTodo(this.props.id, this.props.task, !this.props.completed);
  }

  render(props) {
    if (!this.props.completed) {
      return (
        <div>
          {this.props.task}<button onClick={this.toggleDone}>Done</button>
            <button>Delete</button>
        </div>
      );
    }
    else {
      return (
        <div>
          <p style={{textDecoration: "line-through"}}>{this.props.task}
          <button onClick={this.toggleDone}>Undo</button><button>Delete</button></p>
        </div>
      )
    }
  }
}
