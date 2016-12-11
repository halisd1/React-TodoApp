import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from 'TodoList';

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      todos: [
      {
        id: 1,
        text: 'Walk the dog'
      }, {
        id: 2,
        text: 'Clean the Yard'
      }, {
        id: 3,
        text: 'Do the laundry'
      }, {
        id: 4,
        text: 'Mow the lawn'
      }
    ]
    };
  },

  render(){
    var {todos} = this.state;

    return(
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

export default TodoApp;
